const clients = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Sophia Adams",
        img: "img/client1.png"
    },
    {
        text: "Amazing photographer! I really loved the experience.",
        name: "John Smith",
        img: "img/client2.png"
    },
];

let current = 0;

$(document).ready(function(){

    $("#next").click(function(){

            current = 0;

        if(current <=4){

            current++;
        }

        $(".box p, .client").animate({opacity:0},300,function(){

            $(".box p").text(clients[current].text);
            $(".client span").text(clients[current].name);
            $(".client img").attr("src", clients[current].img);

            $(".box p, .client").animate({opacity:1},300);
        });

    });

        $("#prev").click(function(){



        if(current >= 1){
                    current--;
        }

        $(".box p, .client").animate({opacity:0},300,function(){

            $(".box p").text(clients[current].text);
            $(".client span").text(clients[current].name);
            $(".client img").attr("src", clients[current].img);

            $(".box p, .client").animate({opacity:1},300);
        });

    });

    if ($(".portfolio-filter").length) {

    $(".portfolio-filter button").click(function () {

        $(".portfolio-filter button").removeClass("active");
        $(this).addClass("active");

        const filter = $(this).data("filter");

        if (filter === "all") {
            $(".portfolio-card").fadeIn(300);
        } else {
            $(".portfolio-card").hide();
            $("." + filter).fadeIn(300);
        }

    });

}
$(".mobile-list button").click(function () {
    $(".nav-links").toggleClass("active");
     $("body").toggleClass("no-scroll");
});
});



document.querySelectorAll(".numbers-card h3").forEach(num => {

    let counter = {
        value: 0
    };

    let target = Number(num.dataset.number);


    gsap.to(counter, {
        value: target,
        duration: 2,
        ease: "power2.out",

        scrollTrigger: {
            trigger: ".numbers",
            start: "top 80%",
            once: true
        },

        onUpdate: () => {
            num.innerHTML = "+" + Math.floor(counter.value);
        }
    });
gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll(".fill").forEach(bar => {

    gsap.to(bar, {
        width: bar.dataset.width,
        duration: 1.5,
        ease: "power2.out",

        scrollTrigger: {
            trigger: ".left",
            start: "top 80%",
            once: true
        }
    });

});

});