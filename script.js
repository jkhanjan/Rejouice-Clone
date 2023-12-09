function crsrEffect(){
    var crsr = document.querySelector("#cursur");
    var page1content = document.querySelector("#page1-content");

    page1content.addEventListener('mousemove', function(dets){
        gsap.to(crsr,{
            x:dets.x,
            y:dets.y
        })
    })
    page1content.addEventListener('mouseenter', function(){
        gsap.to(crsr,{
            scale:1,
            opacity:1,
        })
    })
    page1content.addEventListener('mouseleave', function(){
        gsap.to(crsr,{
            zIndex:1,
            opacity:0
        })
    })
}
crsrEffect()

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
}
locomotive();

function page2animation(){
    gsap.from("#page2-para h1",{
        y:120,
        stagger:0.1,
        duration:5,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 80%",
            end:"top 65%",
            scrub:4
        }
    })
    gsap.from(".elem h2",{
        y:190,
        stagger:0.2,
        duration:5,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 80%",
            end:"top 65%",
            scrub:4,
        }
    })
    gsap.from("#page3 h2",{
        y:20,
        stagger:0.2,
        duration:5,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 48%",
            end:"top 46%",
            scrub:4,
        }
    })
    
}
page2animation()

function page4animation(){
    gsap.from("#page4-para h1",{
        y:120,
        stagger:0.1,
        duration:5,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 80%",
            end:"end 650%",
            scrub:4
        }
    })
    gsap.from(".elem2 h2",{
        y:190,
        stagger:0.2,
        duration:5,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 80%",
            end:"top 650%",
            scrub:4
        }
    })
}
page4animation()

function crsrEffect2(){
    var crsr2 = document.querySelector("#crsr");
    var page5content = document.querySelector("#page5");

    page5content.addEventListener('mousemove', function(e){
        gsap.to(crsr2,{
            x:e.x ,
            y:e.y 
        })
    })
    page5content.addEventListener('mouseenter', function(){
        gsap.to(crsr2,{
            scale:1,
            opacity:1,
        })
    })
    page5content.addEventListener('mouseleave', function(){
        gsap.to(crsr2,{
            zIndex:1,
            opacity:0
        })
    })
}
crsrEffect2()

function sliderAnim(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
      });
}
sliderAnim()

function loaderAnim(){
    var tl = gsap.timeline()
    tl.from("#loader h3",{
        x:50,
        opacity:0,
        duration:1,
        stagger:0.1,
    })
    tl.to("#loader h3",{
        opacity:0,
        x:-40,
        duration:1,
        stagger:0.1
    })
    tl.to("#loader",{
        opacity:0
    })
    tl.to("#loader",{
        display:'none'
    })
    tl.from("nav h3, h4",{
        opacity:0,
        x:100,
        delay:-0.1
    })
    tl.from("#page1-content h1 span",{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.2
    })
}
loaderAnim( )

function page7animation(){
    gsap.from("#page7-para h1",{
        y:120,
        stagger:0.1,
        duration:5,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 80%",
            end:"end 65%",
            scrub:4
        }
    })
    gsap.from(".elem7 h2",{
        y:190,
        stagger:0.2,
        duration:5,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 80%",
            end:"top 65%",
            scrub:4
        }
    })
}
page7animation()