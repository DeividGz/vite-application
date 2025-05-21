interface ButtonProps {
    opcaoMudarValor: React.Dispatch<React.SetStateAction<number>>
}

const Button = (contrato: ButtonProps) => {
    return(
    <button onClick={
        
        () => contrato.opcaoMudarValor(
            
            (valorAtual) => {
                
        return valorAtual + 1

    } )

    }>
        Oi, eu sou um botão
    </button>)
}

// function BotaoExemplo() {
//     return <button>Oi, eu sou um botão</button>
// }

export { Button }