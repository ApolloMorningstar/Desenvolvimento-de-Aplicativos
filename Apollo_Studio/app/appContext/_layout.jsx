import React from "react";
import { Slot } from "expo-router";
import { CarrinhoProvider } from "../../scripts/appContext"; 

const Layout = () => {
    return (
        <CarrinhoProvider>
            <Slot />
        </CarrinhoProvider>
    );
};

export default Layout;
