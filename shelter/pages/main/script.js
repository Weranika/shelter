// import { json } from "../../js/json.js";
// json = require('../../js/json.js');
console.log(1);
console.log(json);
function burgerNavigation(elem) {
    let navigationBar = document.getElementById("navigation-bar");
    let popup = document.getElementById("popup-background");
    let navigation = document.getElementById('navigation');

    //navigationBar.classList.toggle("change"); 
    if (navigationBar.classList.contains("change")) {
        navigationBar.classList.remove("change");
        navigationBar.classList.add("slideout");
    } else {
        navigationBar.classList.remove("slideout");
        navigationBar.classList.add("change");
    }
    popup.classList.toggle("nonshow");   
    document.getElementById("logo").classList.toggle("nonshow");
    elem.classList.toggle("rotate");       
      
    if (navigation.style.display == 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
}
document.getElementById("popup-background").addEventListener("click", handler1);
function handler1() {       
    let navigation = document.getElementById('navigation');

    document.getElementById("navigation-bar").classList.remove("change");
    document.getElementById("navigation-bar").classList.add("slideout");
    document.getElementById("popup-background").classList.toggle("nonshow");
    document.getElementById("burger").classList.toggle("rotate");    
    document.getElementById("logo").classList.toggle("nonshow");
    if (navigation.style.display == 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
}
document.getElementById("aboutTheScelter").addEventListener("click", handler2);
function handler2() {
    let navigationBar = document.getElementById("navigation-bar");    
    let navigation = document.getElementById('navigation');
    
    if (navigationBar.classList.contains("slideout")) {
        navigationBar.classList.remove("slideout");
        navigationBar.classList.add("change");
    } else {
        navigationBar.classList.remove("change");
        navigationBar.classList.add("slideout");
    }
    document.getElementById("popup-background").classList.toggle("nonshow");
    document.getElementById("burger").classList.toggle("rotate");    
    document.getElementById("logo").classList.toggle("nonshow");
    if (navigation.style.display == 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
}

