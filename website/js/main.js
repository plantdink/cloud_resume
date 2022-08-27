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


// GET API REQUEST
async function get_visitors() {
    try {
        let response = await fetch(
          "https://sqq5itvs97.execute-api.ap-southeast-2.amazonaws.com/Prod/count",
          {
            method: "GET"
          }
        );
        let data = await response.json()
        document.getElementById("visitors").innerHTML = data['visitor_count'] + " views";
        // console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

window.onload = get_visitors();