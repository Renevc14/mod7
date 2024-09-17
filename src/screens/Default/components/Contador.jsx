import { useEffect, useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleContador1 = () => {
        setContador(contador + 1);
    };

    const handleContador2 = () => {
        setContador(contador - 1);
    };

    // Esta funcion especial se ejecutqa cuando el componente se haya montado
    useEffect(() => {
        setContador(12);
    }, []);

    // Esta funcion especial se ejecutqa cuando el componente se haya montado
    useEffect(() => {
        if(contador === 15) {
            alert('Contador es 15')
        }
    }, [contador]);

    // Esta funcion especial se ejecutqa cuando el componente se desmonta
    useEffect(() => {
        return () => {
            console.log('Componente desmontado');
        };
    });


    return (
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador1}>
                        Aumentar
                </button>
                <button onClick={handleContador2}>
                        Disminuir
                </button>
            </div>
        </>
    );
};

export default Contador;