$(document).ready(function(){

  $('.navMenu > li').mouseenter(function(){
    $('.menu').removeClass('active')
    $(this).children('.menu').addClass('active')
  })

  $(document).click(function(event){
    $('.menu').removeClass('active')
  })

})
