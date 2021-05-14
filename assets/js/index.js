// UI JS
$(document).ready(function() {
    $(window).on("load", function() {
        $("#loaderPage").fadeOut(500, function() {
            this.remove();
        });
        $('#title').addClass('title-animate');
    });

    let screenHeight = $(window).height();
    $(window).scroll(function() {
        let currentPos = $(this).scrollTop();

        if (currentPos >= screenHeight - 600) {
            $('#navBar').removeClass('nav-none');
            $('#navBar').addClass('nav-income');
            $('#smNav').removeClass('nav-none');
            $('#smNav').addClass('nav-income');
        } else {
            $('#navBar').addClass('nav-none');
            $('#navBar').removeClass('nav-income');
            $('#smNav').addClass('nav-none');
            $('#smNav').removeClass('nav-income');
        }
    });


    // else{
    //     $('.site-nav').removeClass('site-nav-scroll');
    //     navActive('home');
    //     $("#up-link").removeClass('d-block');
    //     $("#up-link").addClass('d-none');
    // }

    new WOW().init();



    $("#navBurger").click(function() {
        $("#smNav").toggleClass("smNav-origin");
        $("#smNav").toggleClass("smNav-active");
        $("#navBurger").toggleClass("navBurger-active");
    });
    $(".nav-link").click(function() {
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
            function(direction) {
                if (direction == "down") {
                    let currentId = $(this.element).attr("id");
                    // console.log(currentId);
                    navActive(currentId);
                }
            }, { offset: "10px" }
        );
        currentSec.waypoint(
            function(direction) {
                if (direction == "up") {
                    let currentId = $(this.element).attr("id");
                    // console.log(currentId);
                    navActive(currentId);
                }
            }, { offset: "-10px" }
        );
    }
    navScroll();

    $('#dev').click(_ => window.open("https://play.google.com/store/apps/dev?id=5596247171368474827", "_blank"));
});