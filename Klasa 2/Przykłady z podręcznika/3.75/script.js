var licz = 0;
var Id = window.setInterval(
    function() {
        alert('działa');
        licz++;
        if (licz >= 5) {window.clearInterval(Id);
        }
    }, 3000);