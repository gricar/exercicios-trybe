//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
const pai = document.getElementById('pai');
const paiNos = pai.childNodes;
//console.log(paiNos)
for (let i = paiNos.length - 1; i >= 0; i -= 1) {
    const currentChild = paiNos[i];
    if (currentChild.id !== 'elementoOndeVoceEsta') {
        currentChild.remove()
    }
};

//console.log(pai)


const ondeVcTa = document.getElementById('elementoOndeVoceEsta');
//console.log(ondeVcTa.childNodes); //mostra ambos filho do filho

const segundoUltimoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoUltimoFilho.remove();
console.log(ondeVcTa.childNodes);