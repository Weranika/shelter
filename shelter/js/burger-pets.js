function burgerNavigation(elem) {
    let navigationBar = document.getElementById("navigation-bar");
    let popup = document.getElementById("popup-background");
    let navigation = document.getElementById('navigation');    
    document.querySelector('body').classList.toggle("stop-scrolling");    
    if (navigationBar.classList.contains("change")) {
        navigationBar.classList.remove("change");
        navigationBar.classList.add("slideout");
        document.querySelector('header').style.position = 'relative';
    } else {
        navigationBar.classList.remove("slideout");
        navigationBar.classList.add("change");
        document.querySelector('header').style.position = 'relative';
    }
    popup.classList.toggle("nonshow");   
    document.getElementById("logo").classList.toggle("nonshow");
    elem.classList.toggle("rotate");       
      
    if (navigation.style.display == 'block') {
        navigation.style.display = 'none';
        document.querySelector('header').style.position = 'fixed';
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
    document.querySelector('header').style.position = 'fixed';
    if (navigation.style.display == 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
    document.querySelector('body').classList.toggle("stop-scrolling");
}

const windowInnerWidth = document.documentElement.clientWidth;
if (windowInnerWidth < 768) {
    document.getElementById("ourPets").addEventListener("click", handler2);
    document.getElementById("helpNav").addEventListener("click", handler2);
    document.getElementById("contactsNav").addEventListener("click", handler2);
    document.getElementById("aboutTheScelter").addEventListener("click", handler2);
}    

function handler2() {
    let navigationBar = document.getElementById("navigation-bar");    
    let navigation = document.getElementById('navigation');
    document.querySelector('header').style.position = 'fixed';
    
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
    document.querySelector('body').classList.toggle("stop-scrolling");
}