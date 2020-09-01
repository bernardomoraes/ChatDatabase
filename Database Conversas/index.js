/* A ideia ainda é ter vários tipos de copys pra mesma parada, É um pouco do que tem no disrupt, mas ele falha em identificar essa sutileza (o que é esperado já que é algo mais complexo) então ter uns 3 tipos de respostas diferentes com propostas diferentes para o mesmo padrão. */


/* Selecionar Nome do Talento */
document.querySelector("h2.pr2").innerText

/* Selecionar o primeiro nome do Talento */
document.querySelector("h2.pr2").innerText.split(" ")[0]

/* Conseguir diferenciar o texto */
document.querySelectorAll("ul.msg-s-message-list-content a.msg-s-event-listitem__link").forEach((e) => (console.log(e.getAttribute("href"))))

/* Consegue o texto das mensagens */
document.querySelectorAll("p.msg-s-event-listitem__body").forEach((e) => (console.log(e.outerText)))

/* Consegue selecionar os conjuntos de mensagens */ /* Percebi que o li não seleciona um conjunto de P's então não sentido */
document.querySelectorAll("li.msg-s-message-list__event").forEach((e) => (console.log(e)))

/* Esse código seleciona o SPAN de TIme ele so lança quando muda de pessoa independente do espaço entre as mensagens */
document.querySelectorAll("ul li span.msg-s-event-listitem--group-a11y-heading")

/* Consegue criar uma lista com todas as conversas visiveis */
document.querySelectorAll("li.msg-conversation-listitem")

/* A ideia é conseguir registrar todas as mensagens e  */
/* Tentando ajeitar o código */
var mensagelist = []
document.querySelectorAll("p.msg-s-event-listitem__body").forEach((e) => (mensagelist.push(e.outerText)))
console.log(mensagelist)

var idlist = []
document.querySelectorAll("ul.msg-s-message-list-content a.msg-s-event-listitem__link").forEach((e) => (idlist.push(e.getAttribute("href"))))




document.querySelectorAll("span.msg-s-event-listitem--group-a11y-heading, p.msg-s-event-listitem__body").forEach((e) => (console.log(e.innerText)))

itens = document.querySelectorAll("span.msg-s-event-listitem--group-a11y-heading, p.msg-s-event-listitem__body")
for (var i = 0; i < itens.length; ++i) {
    var joke = itens[i];
    console.log(joke.localName)
}

/* Varredura para encontrar os spans */
for (var i = 0; i < itens.length; ++i) {
    var joke = itens[i];
    if (joke.localName == "span") {
        console.log(joke.localName, i)
    }
}

/* Varredura para encontrar os spans */
for (var i = 0; i < itens.length; ++i) {
    var joke = itens[i];
    span = []
    p = []
    if (joke.localName == "span") {
        span.push(i)
    } else if (joke.localName == "p"){
        p.push(i)
    }
}
console.log(p)
console.log(i)
document.querySelectorAll("span.msg-s-event-listitem--group-a11y-heading, p.msg-s-event-listitem__body").forEach((e, a=0) => (console.log(e.outerText, a++))) /* Imprime todo o texto com a linha do lado */




/* Consegui  */
itens = document.querySelectorAll("span.msg-s-event-listitem--group-a11y-heading, p.msg-s-event-listitem__body")
for (var i = 0; i < itens.length; ++i) {
    var joke = itens[i];
    console.log(joke.localName, joke.outerText)
}


/* Consegui pegar todas as mensagens e separar por tópico */
itens = document.querySelectorAll("span.msg-s-event-listitem--group-a11y-heading, p.msg-s-event-listitem__body")
var conversationlog = []
for (var i = 0; i < itens.length; ++i) {
    var localName = itens[i].localName;
    var outerText = itens[i].outerText;
    if (i != itens.length-1){
        if ((itens[i].localName) == (itens[i+1].localName)) {
            outerText = outerText + '\n' + itens[i+1].outerText;
            i++;
        }
    } 
    conversationlog.push([localName, outerText])
}
console.log(conversationlog)

/* fazer a varredura de todos os itens!!! Não Funcional ainda!! */
var conversationitens = document.querySelectorAll("li.msg-conversation-listitem")
itens = document.querySelectorAll("span.msg-s-event-listitem--group-a11y-heading, p.msg-s-event-listitem__body")
var conversationlog = []
conversationitens.forEach((e) => {
    e.click()
    itens = document.querySelectorAll("span.msg-s-event-listitem--group-a11y-heading, p.msg-s-event-listitem__body")
    for (var i = 0; i < itens.length; i++) {
        var localName = itens[i].localName;
        var outerText = itens[i].outerText;
        if (i != itens.length-1){
            if ((itens[i].localName) == (itens[i+1].localName)) {
                outerText = outerText + '\n' + itens[i+1].outerText;
                i++;
            }
        } 
        conversationlog.push([localName, outerText])
    }
})
console.log(conversationlog)

document.querySelectorAll("div.content label").forEach((e) => {
    if (e.innerHTML == "Sem Interesse" || e.innerHTML == "Emprego Atual") {
        e.click()
    }
})
document.querySelector("button.saveButton").click()
    
// Next Step
document.querySelector("div.msg-form__message-texteditor p").innerHTML = "Olá " + talentname +" conseguiu dar uma olhada na minha proposta?"

/* "content_scripts": [
    {
        "Set-Cookie": [
            "flavor=choco",
            "SameSite=None",
            "Secure"
        ],

        "matches": [
            "https://www.linkedin.com/"
        ],
        
        "css": [
            "style.css"
        ],
        "js": [
            "content.js"
        ]
    } */