// navigation function 
function OpenModal(){
    document.getElementById("Mob-Nav").style.display="flex";
}

function CloseModal(){
    document.getElementById("Mob-Nav").style.display="none ";
}


(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
  //      autoplay:false,
        margin:30,
        loop:true,
        dots:true
  //      nav:true,
  //      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
    });
  });