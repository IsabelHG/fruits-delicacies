$(document).ready(function(){
    $('#menu').click(function(){
        $('html, body').animate({
            scrollTop: $('#inicio').offset().top
        }, 1000);
    })
    $('#images').click(function(){
        $('html, body').animate({
            scrollTop: $('#productos').offset().top
        }, 1000);
    })
    $('#contacto').click(function(){
        $('html, body').animate({
            scrollTop: $('#redes').offset().top
        }, 1000);
    })
})