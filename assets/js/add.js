$(function(){

    var header = $("#header"),
        nav = $("#nav-toggle"),
        introH = $("#intro__title").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){

        if ( scrollOffset >= introH ) {
            header.addClass("fixed");
            nav.addClass("fixed");

        } else {
            header.removeClass("fixed");
            nav.removeClass("fixed");
        }
    }

    const testBtn=document.getElementById("btn");
    const scrollElement=document.getElementById('whatWeDo');

    testBtn.addEventListener("click", function(){

        const elementPosition = scrollElement.getBoundingClientRect().top;

        window.scrollTo({
            behavior: 'smooth',
            top: elementPosition
        });
    });

    /* Slider */

    $("[data-slider]").slick({
        infinite: true,
        speed: 500
    });

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - 50;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        navToggle();

        $("html, body").animate({  /* Smooth scroll*/
            scrollTop: blockOffset
        });

    });

    /* Collapse */

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();

    });

    /* Menu nav toggle */

    $("#nav-toggle").on("click", function(event){
        event.preventDefault();
        navToggle();
    });

    function navToggle() {
        $("#nav").toggleClass("active");
        $("#nav-toggle").toggleClass("active");
    }

});
