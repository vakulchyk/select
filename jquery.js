$(document).ready(function(){
    // wrap all selectors to add ::after in css
    $('select:not([disabled])').wrap('<label class="dropdown">');
    $('select[disabled]').wrap('<label class="dropdownDisabled">');
    // controlling color of elements
    $('select').focusin(function(){
        var thisDropdown= $(this);
        if($(thisDropdown).prop('selectedIndex') == 0){
            thisDropdown.css('color', '#555555');
            thisDropdown.fcusout(function(){ 
                if($(thisDropdown).prop('selectedIndex') == 0) {
                    thisDropdown.css('color', '#c7cacb');
                }
            });
        }
    });
})

