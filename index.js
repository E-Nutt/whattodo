gsap.registerPlugin(Observer, ScrollTrigger);

let mmIndex = gsap.matchMedia();

mmIndex.add("(min-width: 1024px)", ()=>{
    const destinationWrapper = gsap.utils.toArray('.destination_content-wrapper');

    destinationWrapper.forEach(element => {
        const destinationContent = element.querySelectorAll('.destination_content *');
        const tl = gsap.timeline({paused:true});
        tl.from(destinationContent, {
            autoAlpha:0,
            stagger:0.1
        });
        ScrollTrigger.observe({
            target:element,
            type:'pointer',
            onHover:()=> tl.play(),
            onHoverEnd:()=> tl.reverse()
        })
    });

    gsap.to('#recommendation_logo', {
        scrollTrigger: { 
            trigger: '#recommendation',
            start: "10% 30%",
            end: "bottom 90%",
            pin : "#recommendation_logo",
            pinSpacing:true
          }
    });
});

gsap.from('.trivia_content-wrapper',{
    y:100,
    autoAlpha:0,
    stagger:0.2,
    scrollTrigger:{
        trigger: '.trivia_content-wrapper',
        start:'top bottom',
        end:'bottom 300px',
        toggleActions:'play none none reverse'
    }
});

function toPage(para){
    if (para === 1){
        window.location.href = "diving.html"
    } else if (para === 2){ window.location.href = "mountain.html"}
   
}





