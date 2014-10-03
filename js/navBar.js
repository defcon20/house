/**
 * Created by davidliou on 10/1/14.
 */
var mainModule = {
    //Handles scrolling down and up on the nav menu
    scrollLinkClick: $('.mainNavTop .scroll-link').on('click', function (event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        mainModule.scrollToID('#' + sectionID, 400);
    }),
    //function called by above function
    scrollToID: function (id, speed){
        var offSet = 50;
        var targetOffset = $(id).offset().top - offSet;
        var mainNav = $('#main-nav');
        $('html,body').animate({scrollTop:targetOffset}, speed);
        if (mainNav.hasClass("open")) {
            mainNav.css("height", "1px").removeClass("in").addClass("collapse");
            mainNav.removeClass("open");
        }
    },
    //Handles mobile only menu toggles
    toggleMenu: $('.menuToggle a').on('click', function(e){
        e.preventDefault();
        $('.navbar-nav').slideToggle(500);
    })
};