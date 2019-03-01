
$(function(){
  $('td').on('click', function(event){
    event.preventDefault();
    $('.highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
  });
});
