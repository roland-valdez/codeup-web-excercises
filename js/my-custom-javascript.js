"use strict";

$(document).ready(function() {
    $('h1').click(function(){
        $(this).css('background-color', 'rebeccapurple');
    });
    $('p').click(function(){
        $(this).css('font-size', '30px');
    });
    $('li').hover(function(){
        $(this).css('color', 'red');
    }, function(){
        $(this).css('color', 'black');
    })
    $('p').dblclick(function(){
        $(this).css('display', 'none');
    })
    $('.btn').click(function(){
        $(this).html("Howdy!")
    })
    var hoverIn = function(e){
        var htmlCont = $(e.target).html();
        $(e.target).html(htmlCont.toUpperCase());
    };
    // var hoverOut = function(e){
    //     var htmlCont = $(e.target).html();
    //     $(e.target).html(htmlCont.toLowerCase());
    // }
    $('p').hover(hoverIn, function(e){
        var htmlCont = $(e.target).html();
        $(e.target).html(htmlCont.toLowerCase());
    });
});