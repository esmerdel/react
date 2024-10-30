import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Letreiro />
            <Relogio />

            <Link to="/">Voltar</Link>
        </>
    );
}

export default Atv01;