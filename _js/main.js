var listCharacter = new Array();
addEventListener("load", function () {
  getAPI(URL_API_CHARACTER, ListCharacter);
});

const ListCharacter = (data) => {
  let main = getElement("main");
  console.log(data);
  listCharacter = new Array();

  Object.keys(data.data).forEach((character) => {
    let html = document.createElement("div");
    html.classList.add("card");
    html.addEventListener("click",() =>
    playAudio())
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
  let div = document.createElement("div");
  getElement("#champion").innerHTML = "";
  div.classList.add("card-show");
  let cardBody = `
            <div class="card-figure">
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
function playAudio(){
  document.getElementById("audio").play()
}
function stopAudio(){
  document.getElementById("audio").stop()
}
