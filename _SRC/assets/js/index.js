// UI JS
$(document).ready(function () {
  $(window).on("load", function () {
    $("#loaderPage").fadeOut(500, function () {
      this.remove();
    });
    $('#title').addClass('title-animate');
  });

  new WOW().init();

  let screenHeight = $(window).height();
  $(window).scroll(function () {
    let currentPos = $(this).scrollTop();
  });

  $("#navBurger").click(function () {
    $("#smNav").toggleClass("smNav-origin");
    $("#smNav").toggleClass("smNav-active");
    $("#navBurger").toggleClass("navBurger-active");
  });
  $(".nav-link").click(function () {
    $("#smNav").toggleClass("smNav-origin");
    $("#smNav").toggleClass("smNav-active");
    $("#navBurger").removeClass("navBurger-active");
  });

  function navActive(current) {
    $(`.nav-link`).removeClass("nav-active");
    $(`.nav-link[href='#${current}']`).addClass("nav-active");
  }
  function navScroll() {
    let currentSec = $("section[id]");
    currentSec.waypoint(
      function (direction) {
        if (direction == "down") {
          let currentId = $(this.element).attr("id");
          // console.log(currentId);
          navActive(currentId);
        }
      },
      { offset: "10px" }
    );
    currentSec.waypoint(
      function (direction) {
        if (direction == "up") {
          let currentId = $(this.element).attr("id");
          // console.log(currentId);
          navActive(currentId);
        }
      },
      { offset: "-10px" }
    );
  }

  navScroll();
});
