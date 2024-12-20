import React, { useState, useEffect } from 'react';

const Relogio = () => {
    const [hora, setHora] = useState('');

    useEffect(() => {
        const atualizarRelogio = () => {
            const agora = new Date();
            const horas = String(agora.getHours()).padStart(2, '0');
            const minutos = String(agora.getMinutes()).padStart(2, '0');
            const segundos = String(agora.getSeconds()).padStart(2, '0');
            setHora(`${horas}:${minutos}:${segundos}`);
        };

        atualizarRelogio(); // Atualiza a hora ao montar o componente
        const intervalo = setInterval(atualizarRelogio, 1000);

        return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div>
            <h1>{hora}</h1>
        </div>
    );
};

export default Relogio;
