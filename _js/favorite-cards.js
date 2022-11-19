var listCharacter = new Array();
addEventListener("load", function () {
  getAPI(URL_API_CHARACTER, ListCharacter);
});

const ListCharacter = (data) => {
  let main = getElement("main");
  listCharacter = new Array();
  Object.keys(data.data).forEach((character) => {
    let html = document.createElement("div");
    html.classList.add("card")
    let queryStorage = localStorage.getItem(
      `favorite${data.data[character].name}`
    );
    if (queryStorage != null) {
      let htmlBody = `
      <div class="card-body">
      <button type="button" id="btn-remove-favorites"><ion-icon name="star"></ion-icon></button>
            <h2 class="text-card">${data.data[character].name}</h2>
            </div>
        <div class="card-header">
            <img class="card-img-top" src="http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${data.data[character].image.full}" alt="${data.data[character].name}">
      </div>
        `;
      html.innerHTML = htmlBody;
    }
    main.appendChild(html);
    listCharacter.push(data.data[character]);
    console.log(localStorage.getItem(`favorite${data.data[character].name}`));
  });
};
