$(document).ready(function(){
    // wrap all selectors to add ::after in css
    $('select:not([disabled])').wrap('<label class="dropdown">');
    $('select[disabled]').wrap('<label class="dropdownDisabled">');

    // controlling color of elements
    $("select").on("change", function() {
        $(this).attr("data-value", $(this).val());
    });
})

