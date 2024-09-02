import { StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App_logo = () => {
    const Logo_deuses_gregos = require('./pasta de imagens/logo_deuses.png');
  
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo} 
                source={Logo_deuses_gregos} 
            />
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={styles.background}>
                        
                 </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c669f',
  },
  logo: {
    width: 200,  // largura da imagem
    height: 200, // altura da imagem
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default App_logo;
