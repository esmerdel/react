import React, { useState, useEffect } from 'react';

const Letreiro = () => {
    const texto = "Conheça a Fatec";
    const [textoAtual, setTextoAtual] = useState('');
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (indice < texto.length) {
                setTextoAtual((prev) => prev + texto.charAt(indice));
                setIndice(indice + 1);
            } else {
                setTextoAtual('');
                setIndice(0);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [indice]);

    return (
        <div>
            <h1>{textoAtual}</h1>
        </div>
    );
};

export default Letreiro;
