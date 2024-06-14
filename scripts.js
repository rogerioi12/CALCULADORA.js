const key = "cebcd482eda57fa9a6714c1c2ba91885";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".Umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`);
    const dados = await resposta.json();
    colocarDadosNaTela(dados);
}

function cliqueNoBotao(){
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
