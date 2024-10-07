import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [LadoCamera, seTladoCamera] = useState('back');

    const salvarfoto = async () => {
        if (foto) {
            await MediaLibrary.saveToLibraryAsync(foto.uri);
            setFoto(null);
        }
    };

    const inverterladoCamera = () => {
        seTladoCamera(LadoCamera === 'back' ? 'front' : 'back');
    };

    if (!permissao) {
        return <View><Text>Aguardando permissão...</Text></View>;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Você precisa de permissão para usar a câmera</Text>
                <TouchableOpacity style={styles.button} onPress={pedirPermissao}>
                    <Text style={styles.buttonText}>Pedir Permissão</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotobase = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        });
        setFoto(fotobase);
        console.log(fotobase);
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View style={styles.fototirada}>
                    <Image style={styles.image} source={{ uri: foto.uri }} barcodeScannerSettings={{
    barcodeTypes: ["qr"]}}/>
                    <TouchableOpacity style={styles.saveButton} onPress={salvarfoto}>
                        <Text style={styles.buttonText}>Salvar Foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.discardButton} onPress={() => setFoto(null)}>
                        <Text style={styles.buttonText}>Descartar</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <CameraView style={styles.camera} facing={LadoCamera} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.switchButton} onPress={inverterladoCamera}>
                            <MaterialIcons name="flip-camera-ios" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.captureButton} onPress={tirarFoto} />
                    </View>
                </CameraView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textopermissao: {
        textAlign: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    fototirada: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'red',
        alignSelf: 'center',
        marginBottom: 20,
    },
    switchButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        padding: 10,
    },
    saveButton: {
        backgroundColor: 'green',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    discardButton: {
        backgroundColor: 'red',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
