/****************************************************************/
/* Based on tutorial by jasalguero                              */
/* http://jasalguero.com/ledld/development/web/expandable-list/ */
/* Prepares the cv to be dynamically expandable/collapsible     */
/****************************************************************/
function prepareList() {
    var highlights = $('.highlight');
    var lowlights = $('.expList').find('li:has(ul)').not( highlights );
    var root = $('html, body');

    $('.expList').find('li:has(ul)')
    .click( function(event) {
        if ( event.target == this 
            || ( event.target.parentNode == this 
                && event.target.tagName.toLowerCase() != 'a') ) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    });

    lowlights
    .addClass('collapsed')
    .children('ul').hide();
    
    highlights
    .addClass('collapsed expanded')

    $('.expList a').unbind('click').click(function(){
        var link = $(this).attr('href');
        var fragment = link.split('#')[1];
        if ( fragment ) {
            fragment = $('[name="' + link.substr(1) + '"]');
            $( root ).animate({
                scrollTop: $( fragment ).offset().top
            }, 500, function(){
                $( fragment ).addClass('expanded');
                $( fragment ).parents().not('ul').addClass('expanded');
                $( fragment ).parents().show('medium');
                $( fragment ).children().show('medium');
                //$( fragment ).effect( 'explode' );
            });
        } else {
            window.open( link );
        }
        return false;
    });

    //Create the button funtionality
    $('#highlights')
    .unbind('click')
    .click( function() {
        highlights
        .addClass('expanded')
        .children().show('medium');

        lowlights
        .removeClass('expanded')
        .children('ul').hide('medium');
    })

    $('#expandList')
    .unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children().show('medium');
    })
    
    $('#collapseList')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.expList').find('li:has(ul)').children('ul').hide('medium');
    })

};


/**************************************************************/
/* Functions to execute on loading the document               */
/**************************************************************/
$(document).ready( function() {
    prepareList();

});
