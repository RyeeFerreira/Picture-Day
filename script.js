const body = document.querySelector("body");
const input = document.querySelector("input");
const pesquisar = document.querySelector(".pesquisar")
const button = document.querySelector(".barra");
const div = document.getElementById("div");


pesquisar.addEventListener("click", calendario)
button.addEventListener("click", mostrarDescriçao)

async function calendario() {
    data = input.value
    let url = `https://api.nasa.gov/planetary/apod?api_key=fD7aMasjOtdeRMXpNRZ569fhj29DCOSbQxPh9Gjb&date=${data}`;
    let res = await fetch(url);
    let dados = await res.json();
    console.log(dados);
    dados.date = data;
    if(dados.media_type === "image"){
        document.createElement
        body.style.backgroundImage = `url(${dados.url})`;
    } else {

    }
    
}

async function mostrarDescriçao(){
    data = input.value
    let url = `https://api.nasa.gov/planetary/apod?api_key=fD7aMasjOtdeRMXpNRZ569fhj29DCOSbQxPh9Gjb&date=${data}`;
    let res = await fetch(url);
    let dados = await res.json();
    let qtd = document.querySelectorAll('body div').length;

    if(qtd == 1){
    let div = document.createElement('div');
    div.className = "div"
    div.innerHTML = `<h1>${dados.title}</h1> <a>${dados.explanation} </a>`;
    document.body.appendChild(div)
    qtd = 2
}else{
    document.querySelector("body > div.div").remove()
}
}


calendario()
