"use strict";

$(document).ready(function() {
    $('h1').click(function(){
        $(this).css('background-color', 'rebeccapurple');
    });
    $('p').dblclick(function(){
        $(this).css('font-size', '30px');
    });
    $('li').hover(function(){
        $(this).css('color', 'red');
    }, function(){
        $(this).css('color', 'black');
    })
});