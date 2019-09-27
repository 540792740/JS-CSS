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

$.ajax({
    url:'Json.php',
    dataType:'json',
    cache:false,
    success: function (data, status) {
        console.log(data);
        $.each(data, function (index) {
            console.log(data[index]);
        });
    },
    error:function(xhr, textStatus, err){
        console.log(xhr);
        console.log(textStatus);
    }
});
















