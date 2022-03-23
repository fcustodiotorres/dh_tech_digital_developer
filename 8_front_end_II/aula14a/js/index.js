const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Percorra o JSON e insera os nomes dos membros na lista html

const membersListReference = document.querySelector("#membros");
function percorrerMembros() {
  let jsonResult = JSON.parse(jsonData);
  let jsonMembers = jsonResult["members"];

  for (let i = 0; i < jsonResult['members'].length; i++) {
    membersListReference.innerHTML += `<li>
    ${jsonMembers[i].name} </li>
    `;
  }
}
percorrerMembros();
