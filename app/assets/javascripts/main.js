$(document).ready(function() {


    $(".navbar").show();

    $(function() {
        $(window).scroll(function() {

            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeOut();
            } else {
                $('.navbar').fadeIn();
            }
        });


    });
    $('.dropdown-toggle').dropdown();

    setTimeout(function() {
        var s = skrollr.init({
            forceHeight: false
        });

        skrollr.menu.init(s, {
            change: function(hash, top) {
                console.log(hash, top);
            }
        });
    }, 500);


    var header = document.getElementsByClassName('title');
    var intro = document.getElementsByClassName('intro1');
    var butt = document.getElementsByClassName('butt');

    var s = skrollr.init({



        render: function(data) {
            $('.offset').text(data.curTop);

        }

    });


    //init scrollMagic
    var controller = new ScrollMagic.Controller();

    // Scene 1 - pin the second selection
    var pinScene01 = new ScrollMagic.Scene({
            triggerElement: '#slide00',
            triggerHook: 0,
            duration: '400%'
        })
        .setPin('#slide01 .pin-wrapper')
        .addTo(controller);

    // Scene 2 - Jakub
    var pinScene02 = new ScrollMagic.Scene({
            triggerElement: '#slide01',
            triggerHook: 0,
            duration: '200%'
        })
        .setPin('#slide02 .pin-wrapper')
        .addTo(controller);

    // Scene 3 - Megyn
    var pinScene03 = new ScrollMagic.Scene({
            triggerElement: '#slide02',
            triggerHook: 0,
            duration: '200%'
        })
        .setPin('#slide03 .pin-wrapper')
        .addTo(controller);


    TweenLite.from(header, 2, {
        opacity: 0,
        y: -60
    });
    TweenLite.from(intro, 1.5, {
        delay: 1.25,
        opacity: 0
    });
    TweenLite.from(butt, 1, {
        delay: 1.35,
        opacity: 0
    });

    var s = skrollr.init();

    skrollr.menu.init(s, {

        animate: true,

        easing: 'sqrt',

        scale: 2,

        duration: function(currentTop, targetTop) {

            return 500;


        },

        complexLinks: false,

        change: function(newHash, newTopPosition) {},

        updateUrl: false
    });

});
