$(document).ready(function(){
    $(".menu-button").click(function(){
    $(".menu-bar").toggleClass( "open" );
    })
    })
    function myFunction(id) {
            console.log(id)
            var elmnt = document.getElementById(id);
            console.log(elmnt)
            elmnt.scrollIntoView({behavior:"smooth"});
    }