const navbar = document.querySelector("nav")

function animation(){
    var controller = new ScrollMagic.Controller()

    const t1 = gsap.timeline({defaults: {ease: Expo.InOut} })

    t1.fromTo(navbar, 1, {y: "-10rem"}, {y: 0})
    t1.fromTo(".banner-text", 0.5, {x : "-2rem", opacity: 0}, {x : 0, opacity : 1})
}
animation()