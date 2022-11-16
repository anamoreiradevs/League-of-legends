const URL_API_CHARACTER = 'https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json'

/* # Functions */
function getElement(q) {
    return document.querySelector(q);
}

const getAPI = (url, functionCallback) => {
    fetch(url).then(
        (response) => response.json(), // resolve (retorno OK)
        (error) => console.error(error) // reject (erro no retorno)
        ).then(
            dataJson => functionCallback(dataJson), // resolve (retorno OK)
            erro => console.error(erro) // reject (erro no retorno)
            ); 
}

    
