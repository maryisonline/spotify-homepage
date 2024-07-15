// deifinicao de variaveis
const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = `http://localhost:4000/imersao-spotify/api-artists/artists?name_like=${searchTerm}`; // url com path
    fetch(url)
        .then((response) => response.json()) // busca a resposta e converte ela em JSON devido o arquivo ser artists.json
        .then((result) => displayResults(result)) // mostrar resultado na tela
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden") // hidden é o nome da classe, nao eh um funcao :)
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}
//  manipulação de eventos  
// abaixo: escutando esse evento para quando ele acontecer ter uma lógica na tela
document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    // abaixo: duplo = verifica se os valores são apenas iguais, enquanto triplo verifica se são iguais E do mesmo tipo
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
     }

     //searchTerm - elemento & searchInput - valor
     requestApi(searchTerm);
})
