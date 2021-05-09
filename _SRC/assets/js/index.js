// UI JS
$(function(){
    new WOW().init(); 
  });


document.getElementById('navBurger').onclick=function(){
    document.getElementById('smNav').classList.toggle('smNav-origin');
    document.getElementById('smNav').classList.toggle('smNav-active');
    document.getElementById('navBurger').classList.toggle('navBurger-active');
}

