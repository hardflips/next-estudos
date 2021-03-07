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
            Contador: {contador}
            <br />
            <button onClick={adicionaContador}>Adcionar</button>
            {' '}
            <button onClick={removeContador}>Remover</button>
        </div>
    )
}

export default Home;