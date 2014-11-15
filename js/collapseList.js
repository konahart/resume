/****************************************************************/
/* Based on tutorial by jasalguero                              */
/* http://jasalguero.com/ledld/development/web/expandable-list/ */
/* Prepares the cv to be dynamically expandable/collapsible     */
/****************************************************************/
function prepareList() {
    $('.expList').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target ) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed')
    .children('ul').hide();
    $('.highlight').addClass('expanded');
    $('.highlight').children().show();


    //Hack to add links inside the cv
    $('.expList a').unbind('click').click(function() {
        window.open($(this).attr('href'));
	return false;
    });

    //Create the button funtionality
    $('#highlights')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children().hide('medium');
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
