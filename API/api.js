const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  Headers: myHeaders,
  redirect: "follow",
};

const baseUrl ="https://www.dnd5eapi.co"
const allSpellsUrl = baseUrl + "/api/2014/spells";

function getSpells() {
  fetch(allSpellsUrl, requestOptions)
    .then((response) => response.text())
    .then((response2) => JSON.parse(response2))
    /*.then(response3 => {

        console.log(response3.results)

        let spellArray = response3.results;
        let arr = []
        for(i = 0; i < spellArray.length; i++){
            
            arr.push(spellArray[i].index);

        }
        console.log(arr);
        return arr;

    })*/
    .then((spellArray) => {
      let spellWithDescription = [];

      spellArray.results.forEach(function(spell){
        console.log(spell);
        let spellUrl = spell.url;
        console.log(spellUrl);
        fetch(baseUrl + spellUrl, requestOptions)
        .then((response) => response.text())
        .then((response) => JSON.parse(response))
        .then(response => {
            let description = response.desc;
            let descriptionText = ""
            description.forEach(function(description){
                descriptionText += desc +"\n"
                spell.description = descriptionText;

                addSpell("spell")

            })

         })

      });

    });

}


function addSpell(spell){

    document.getElementByClassName("spell")[0]
    document.appendChild("<p>hello<p>")

}