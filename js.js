function togglebar() {
    var navResponsiveElements = document.getElementsByClassName('dropdown-menu');
  
    for (var i = 0; i < navResponsiveElements.length; i++) {
      navResponsiveElements[i].classList.toggle('active');
    }
}