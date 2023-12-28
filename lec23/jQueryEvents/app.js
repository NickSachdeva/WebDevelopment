$('#btn').click(function(e){
    console.log('button clicked');
    console.log(e);
})
// click events
$('h1').on('click',function() {
    $(this).css('color','red');
})

$('div').on('click',function() {
    $(this).hide();
})

$('#inp').keypress(function(e) {
    if(e.which===13) {
        console.log('you hit the enter');
    }
    // console.log('key is pressed');
})