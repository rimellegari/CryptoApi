var baseUrl ='https://api.coinranking.com/v2/coins/'
var proxyUrl ='https://cors-anywhere.herokuapp.com/'
var apiKey ='coinranking5066dad12897c929e40d3514c8d8565783c3ba7ce51a8f4d'

fetch(`${proxyUrl}${baseUrl}`,{
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin':'*'
    }
}).then((response) =>{
    if(response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)

            let coinsData = json.data.coins
            //checando a presença de itens na array
            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            //for loop para preencer a tabela

            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                cryptoCoins += `<td>${coin.name}</td>`;
                cryptoCoins += `<td>${coin.symbol}</td>`;
                cryptoCoins += `<td>${parseFloat(coin.btcPrice).toFixed(4)}</td>`;
                cryptoCoins += `<td>${coin.rank}</td>`;
                cryptoCoins += `<td>${parseFloat(coin.price).toFixed(4)}</td>`;"</tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins

        })
    }

}).catch((error) => {
    console.log(error)
})