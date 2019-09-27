//JS jQuery

var myNumber = 0
// $(document).ready(function(){
$(function() {
    // $(".col-md-3").hover(function () {
        // $(this).hide();
        // myNumber++;
        // $('output').html('clicked me ' + myNumber);
        // $('*').toggle();
        $(".col-md-3").on({
            mouseenter: function () {
                $(this).css("background-color", "#0000ff");
            },
            mouseleave: function () {
                $(this).css("background-color", "#ff0000");
            }

        });
    });

$.get('myphp.php', function( response ){
    $('#output').html( response );  //server response
});