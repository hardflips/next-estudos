import { useState } from 'react';

function Home() {
    return (
        <>
            <Contador />
        </>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    const adicionaContador = () => {
        setContador(contador + 1);
    };

    const removeContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };
    return (
        <div>
            <h3>Contador: {contador}</h3>
            <br />
            <button onClick={adicionaContador}>Adcionar</button>
            {' '}
            <button onClick={removeContador}>Remover</button>
        </div>
    )
}

export default Home;