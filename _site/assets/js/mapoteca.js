$(document).ready(function(){

  //1.ABOUT: cambiar textos
  $('.about__content_list ul li').children('a').click(function(event){
    event.preventDefault();
    event.stopPropagation();
    $('.about__content').children('.active').removeClass('active');

    var activar = $(this).attr('href');
    $(activar).addClass('active aparece');
    $('.btn-secundario.active').removeClass('active aparece');
    //desactiva clase active en a
    $('[href="'+activar+'"]').addClass('active');
    var laimagen = activar.substring(1,activar.length);
    //cambiar imagen (chan)
    var imgSelec = $('[value='+laimagen+']');
    var antesDe = $(imgSelec).prevAll();
    $(imgSelec).prevAll().remove();

    $(antesDe).each(function(i){
    		i = antesDe.length - 1- i
        $(".panel").last().after(antesDe[i]).addClass('aparece');
      });

  });

  //2.TEAM: activar nombres al hacer hover
  $('.integrante').hover(function(){
    $(this).children('div').toggleClass('oculto subir');
  })

  //3.Smooth scroll
  //Smooth scroll
      //antes: $('nav a').click(function(event){
      $('a[href*="#"]').click(function(event){

      if (this.hash !== ""){
        event.preventDefault();

        var opc = this.hash;

        $('html, body').animate({
          scrollTop: $(opc).offset().top
        }, 1000, function(){
          window.location.hash = opc;
        })
      }
    });

    function onScroll(event){
      var scrollPos = $(document).scrollTop() + 150;
      $('#menu_op li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top < scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu_op ul li a').removeClass("active");
          currLink.addClass("active");
        }
        else{
          currLink.removeClass("active");
        }
      });
    }

/// menu mobile
  if ($(document).width() < 1023){
    $('#menu_op > li').toggleClass('ocultar_menu')
    //desplegar menu con click
    $('#hamburguesa').on('click', function(ev){
      ev.preventDefault();
      $('#menu_op > li').toggleClass('ocultar_menu')
    })

    $(document).on('scroll', function(ev){
      //ev.preventDefault();
      $('#menu_op > li').addClass('ocultar_menu')
    })

  }






  $(document).on("scroll", onScroll);
}); //fin de todo
