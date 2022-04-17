function burgerNavigation(x) {
    document.getElementById("navigation-bar").classList.toggle("change");  
    //document.getElementById("navigation").classList.toggle("nonshow");
    document.getElementById("logo").classList.toggle("nonshow");
    x.classList.toggle("rotate");       
      
    if (document.getElementById('navigation').style.display == 'block') {
        document.getElementById('navigation').style.display = 'none';
    } else {
        document.getElementById('navigation').style.display = 'block';
    }
}