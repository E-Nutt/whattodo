gsap.registerPlugin(Observer, ScrollTrigger);

const navButton = document.querySelector('#navigation-button');
const nav = document.querySelector("#primary-navigation");

let mm = gsap.matchMedia();


mm.add("(max-width: 845px)",()=>{
    let navTl = gsap.timeline({paused:true});

function openNav(){
    animateOpenNav();
    navButton.onclick = function (){
        navTl.reversed(!navTl.reversed());
    }
}

function animateOpenNav(){
    navTl.from(nav,{height:0})
    .from('#primary-navigation li',{y:300},'<')
    .reverse();
}

openNav()
});
