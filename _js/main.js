var listCharacter = new Array();
addEventListener("load", function () {
  getAPI(URL_API_CHARACTER, ListCharacter);
});
const ListCharacter = (data) => {
  let main = getElement("main");
  listCharacter = new Array();
  Object.keys(data.data).forEach((character) => {
    let html = document.createElement("div");
    html.classList.add("card");
    html.addEventListener("click", () => playAudio());
    html.addEventListener("click", () =>
      mostraDetalhesCharacter(data.data[character])
    );
    let htmlBody = `
    <div class="card-body">
            <h2 class="text-card">${data.data[character].name}</h2>
            </div>
        <div class="card-header">
            <img class="card-img-top" src="http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${data.data[character].image.full}" alt="${data.data[character].name}">
      </div>`;
    html.innerHTML = htmlBody;
    main.appendChild(html);
    listCharacter.push(data.data[character]);
  });
};
const mostraDetalhesCharacter = (data) => {
  clickButton(data);
  let div = document.createElement("div");
  getElement("#champion").innerHTML = "";
  div.classList.add("card-show");
  let cardBody = `
            <div id="card-figure">
                <img class="card-img" src="http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${data.image.full}" alt="${data.name}">
                </div>
                <h1 class="name-champion">${data.name}</h1>
                <article>
                <ul class="list-group">
                <h2 class="title-champion">${data.title}</h2>
                        <li class="list-group-item"> Attack: ${data.info.attack}</li>
                        <li class="list-group-item"> Defense: ${data.info.defense}</li>
                        <li class="list-group-item"> Magic: ${data.info.magic}</li>
                        <li class="list-group-item"> Difficulty: ${data.info.difficulty}</li>
                    </ul>
                </article>
            </div>
        `;
  div.innerHTML = cardBody;
  getElement("#champion").appendChild(div);
  $("#charModal").modal("show");
};

const clickButton = (data) => {
  let clique = document.getElementById("btn-favorites");
  clique.addEventListener("click", () => {
    let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
    favorite.push(data);
    localStorage.setItem("favorite" + data.name, JSON.stringify(favorite));
  });
};

const showComments = () => {
  let div = document.createElement('div');
  getElement('#modal-body').innerHTML = "";
  div.classList.add('card', 'col-12', 'my-4', 'bg-dark');
  show.addEventListener("click", () => {
    let div = document.createElement("div");
    let bodyForm = `
    <label>Nome: </label>
    <input type="text" name="nick" id="nick"><br><br>
    <label>Message: </label>
    <input type="tetx" name="message" id="message"><br><br>
    <input type="button" id="btn-message" value="Cadastrar"><br><br>`;
        div.innerHTML = cardBody;
        getElement('#modal-body').appendChild(div);
        $('#charModal').modal('show');
  });
};
function playAudio() {
  document.getElementById("audio").play();
}
function stopAudio() {
  document.getElementById("audio").stop();
}

var saveMessage = document.getElementById("btn-message");
saveMessage.addEventListener("click", () => {
  var nick = document.getElementById("nick").value;
  var messageUser = document.getElementById("message").value;
  console.log(nick);
  console.log(messageUser);
  let message = new Array();
  if (localStorage.hasOwnProperty("usuarios")) {
    message = JSON.parse(localStorage.getItem("usuarios"));
  }
  message.push({ nick, messageUser });
  localStorage.setItem("usuarios", JSON.stringify(message));
  document
    .getElementById("conteudo")
    .insertAdjacentHTML(
      "beforeend",
      "Nick: " + nick + "<br>Message: " + messageUser + "<br><hr>"
    );
});
