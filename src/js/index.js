// Função que verifica se a carta deve ser exibida
function deveMostrarCarta(carta, categoriaSelecionada, precoMaximoSelecionado) {
    const categoriaCarta = carta.dataset.categoria;
    const precoCarta = parseFloat(carta.dataset.preco);

    const temFiltroCategoria = categoriaSelecionada !== '';
    const categoriaIncompativel = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    const temFiltroPreco = precoMaximoSelecionado !== '';
    const precoIncompativel = precoCarta > parseFloat(precoMaximoSelecionado);

    if ((temFiltroCategoria && categoriaIncompativel) || (temFiltroPreco && precoIncompativel)) {
        return false;
    }

    return true;
}

// Função principal para aplicar os filtros
function aplicarFiltros() {
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(carta => {
        const mostrar = deveMostrarCarta(carta, categoriaSelecionada, precoMaximoSelecionado);

        carta.classList.toggle('mostrar', mostrar);
        carta.classList.toggle('esconder', !mostrar);
    });
}

// Inicializa o listener do botão de filtro
document.addEventListener('DOMContentLoaded', () => {
    const botaoFiltrar = document.querySelector('.btn-filtrar');
    if (!botaoFiltrar) return;

    botaoFiltrar.addEventListener('click', aplicarFiltros);
});