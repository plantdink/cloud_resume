function onClick(element) {
    document.getElementById('img01').src = element.src;
    document.getElementById('modal01').style.display = 'block';
    var captionText = document.getElementById('caption');
    captionText.innerHTML = element.alt;
}

window.onscroll = function() { myFunction() };
function myFunction() {
    var navbar = document.getElementById('myNavbar');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = 'cr-bar' + ' cr-card' + ' cr-animate-top' + ' cr-white';
    } else {
        navbar.className = navbar.className.replace(' cr-card cr-animate-top cr-white', '');
    }
}

function toggleFunction() {
    var x = document.getElementById('navDemo');
    if (x.className.indexOf('cr-show') == -1) {
        x.className += ' cr-show';
    } else {
        x.className = x.className.replace(' cr-show', '');
    }
}