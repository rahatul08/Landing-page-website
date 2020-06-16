// Stiky
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };


  // slider

  $('.responsive').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(document).ready(function(){
    $(".slick-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
    $(".slick-next").html('<i class="fas fa-long-arrow-alt-right"></i>')
  })

  // toogle area

  $(document).ready(function(){

    $("#minus").hide()
   
  $(".faq-1").click(function(){
    $("#plus1").hide()
  });
  $(".faq-1").click(function(){
    $("#minus").show();
  });
  $(".faq-2").click(function(){
    $("#plus1").css("display", "block");
    
  });
  $("#minus").click(function(){
    $(this).hide();
    
  });


  $("#minus1").hide()

  $(".faq-3").click(function(){
    $("#plus2").hide()
  });
  $(".faq-3").click(function(){
    $("#minus1").show();
  });
  $(".faq-4").click(function(){
    $("#plus2").css("display", "block");
    
  });
  $("#minus1").click(function(){
    $(this).hide();
    
  });


  $("#minus2").show();
  $("#plus3").hide();

  $(".faq-5").click(function(){
    $("#plus3").hide()
  });
  $(".faq-5").click(function(){
    $("#minus2").show();
  });
  $(".faq-6").click(function(){
    $("#plus3").css("display", "block");
    
  });
  $("#minus2").click(function(){
    $(this).hide();
    
  });


  $("#minus3").hide()

  $(".faq-7").click(function(){
    $("#plus4").hide()
  });
  $(".faq-7").click(function(){
    $("#minus3").show();
  });
  $(".faq-8").click(function(){
    $("#plus4").css("display", "block");
    
  });
  $("#minus3").click(function(){
    $(this).hide();
    
  });


  })

  // sponcer slider

  
  $('.sponcer').slick({
    autoplay: true,
    autoplaySpeed : 3000,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // back to top

  
  scroller.init();
