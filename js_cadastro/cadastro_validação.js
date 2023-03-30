export function valida (input){
    const tipoDeInput = input.dataset.tipo
    console.log('tipo de input',tipoDeInput)
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
    } else {
        input.parentElement.classList.add('input-container--invalido')
    }
};

const validadores = {
    dataNascimento:input => validaDataDeNascimento(input)
}


function validaDataDeNascimento (input) {
    let dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Voce precisa 18 anos no minimo para realizar seu cadastro.'

    }

    input.setCustomValidity(mensagem)
};

function maiorQue18 (data) {
    let dataAtual = new Date()
    let dateMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    console.log(dateMais18, dataAtual)
    return dateMais18 <= dataAtual
};
