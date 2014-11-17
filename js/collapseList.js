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
        if (this == event.target || this.parent() == event.target ) {
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
    
    $('.expList a[href*=#]').unbind('click').click(function(){
            var link = $('[name="' + $.attr(this, 'href').substr(1) + '"]');
                $( link ).addClass('expanded');
                $( link ).parents().not('ul').addClass('expanded');
                $( link ).parents().show('medium');
                $( root ).animate({
                    scrollTop: $( link ).offset().top
                }, 500);
                $( link ).children().show('medium');
            /*} else {
                window.open($(this).attr('href'));
            }*/
            return false;
    });
    
    //Hack to add links inside the cv
    /*$('.expList a').unbind('click').click(function() {
        window.open($(this).attr('href'));
	    return false;
    });*/

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
