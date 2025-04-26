// On click
const menuitems = document.getElementById("menuitems");
let menu = (elem)=> { 
    console.log("THIS is", elem.nextElementSibling.style.display);
    if(elem.nextElementSibling.style.display == "none"){
         menuitems.style.display = "flex"
    }
    else{
        menuitems.style.display = "none"
    }
}