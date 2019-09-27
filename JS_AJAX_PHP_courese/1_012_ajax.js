
var myNumber = 0;
$(function()
{
    $(".col-md-3").click(function(event){
        console.log('change detected');
        var myValue = $('#MyText').val();
        console.log(myValue);
        $.ajax({
            type:"POST",
            url: "myphp.php",
            data: 'm=' + myValue,
            success: function (response){
                console.log(response);
                $('#output').html(response);
            }
        })
    })
})