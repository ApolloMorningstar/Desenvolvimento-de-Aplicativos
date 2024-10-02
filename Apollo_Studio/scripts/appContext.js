// import { createContext, useState } from "react";
// export const AppContext = createContext()
// export const AppProvider = ({ children }) => {
//     const [teste , setTeste] = useState('')
//     const [detail , setDetail] = useState({})


//     return(
//         <AppContext.Provider value={{teste,setTeste, detail, setDetail }}>
//             {children}
//         </AppContext.Provider>
//     )
// }
// appContext.jsx
import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prev) => [...prev, item]); 
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prev) => prev.filter(item => item.id !== id)); 
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
