import hashstaurante from "./assets/hashtaurante.webp"
import './App.css'
import {Navegacao} from "./Navegacao";
import {ItemCardapio} from "./ItemCardapio.jsx";
import {pratosPrincipais} from "./cardapio.js";

export function App() {

    return <>
        <img src={hashstaurante} className="capa"/>
        <Navegacao/>
        <div className="menu">
            {pratosPrincipais.map(item => <ItemCardapio nome={item.nome} <ItemCardapio nome={item.nome} <descricao nome={item.nome} <ItemCardapio nome={item.nome}/>)}
        </div>
         </>
}