function transformarInteiro(content) {
    let inteiro = parseInt(content);
    return inteiro;
}
let qtdPista = transformarInteiro(document.getElementById("qtd-pista").textContent);
let qtdSuperior = transformarInteiro(document.getElementById("qtd-superior").textContent);
let qtdInferior = transformarInteiro(document.getElementById("qtd-inferior").textContent);

function atualizaQtd(tipo, qtda, id) {
    if (qtda >= 0) {
        let quantidade = document.getElementById("qtd").value;
        let novaQtd = qtda - quantidade;
        if (novaQtd < 0) {
            alert('Não há mais ingressos suficientes este setor. :(');
        } else {
            document.getElementById(`${id}`).textContent = novaQtd;
            alert('Compra efetuada!');
            return novaQtd;
        }
    } else {
        alert('Não há mais ingressos para este setor. :(');
    }
}

function comprar() {
    let tipoTicket = document.getElementById("tipo-ingresso").value;
    let tipoID = `qtd-${tipoTicket}`;
    if (tipoTicket == "pista") {
        qtdPista = atualizaQtd(tipoTicket, qtdPista, tipoID);
    } else if (tipoTicket == "superior") {
        qtdSuperior = atualizaQtd(tipoTicket, qtdSuperior, tipoID);
    } else {
        qtdInferior = atualizaQtd(tipoTicket, qtdInferior, tipoID);
    }
}
