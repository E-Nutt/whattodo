gsap.registerPlugin(Observer, ScrollTrigger);


function hide(elem) { 
    gsap.set(elem, {autoAlpha: 0}); //set the opacity to 0
  }
  
/* REVEAL-HORIZONTAL*/

  document.addEventListener("DOMContentLoaded", function() {  
  
    gsap.utils.toArray(".gs_reveal_hor").forEach(elem => { //function to animate all elements, thats contain .gs_reveal
      hide(elem); //set the initial opacity of the elements to 0
  
      ScrollTrigger.create({ //create object from GSAP
        trigger: elem,
        onEnter: function() { animateHor(elem) }, //call the function when the elements enter the viewport
        onEnterBack: function() { animateHor(elem, -1) }, //call the function when the elements re-enter the viewport
        onLeave: function() { hide(elem) } //call the function when the elements leave the viewport
      });
    });
  });

  function animateHor(elem, direction) { //function to create enter animation from right or left
    direction = direction || 1; //initial direction
    var x = 0,
        y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) { //create enter animation from left
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) { //create enter animation from right
      x = 100;
      y = 0;
    }
  
/*     elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";  */
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, { 
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }


/* REVEAL-VERTICAL*/

  document.addEventListener("DOMContentLoaded", function() {  
  
    gsap.utils.toArray(".gs_reveal_ver").forEach(elem => { //function to animate all elements, thats contain .gs_reveal
      hide(elem); //set the initial opacity of the elements to 0
      ScrollTrigger.create({ //create object from GSAP
        trigger: elem,
        onEnter: function() {animateVer(elem)}, //call the function when the elements enter the viewport
        onEnterBack: function() { animateVer(elem, -1) }, //call the function when the elements re-enter the viewport
        onLeave: function() { hide(elem) } //call the function when the elements leave the viewport
      });
    });
  });
  
  function animateVer(elem, direction) { //function to create enter animation from right or left
    direction = direction || 1; //initial direction
    var x = direction*100,
        y = 0;
  if (elem.classList.contains("gs_reveal_fromTop")) { //create enter animation from left
      x = 0;
      y = -100;
    } else if (elem.classList.contains("gs_reveal_fromBottom")) { //create enter animation from right
      x = 0;
      y = 100;
    }
  
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }

/* REVEAL-SCALE*/

document.addEventListener("DOMContentLoaded", function() {  
  
    gsap.utils.toArray(".gs_reveal_scale").forEach(elem => { //function to animate all elements, thats contain .gs_reveal
      hide(elem); //set the initial opacity of the elements to 0
      ScrollTrigger.create({ //create object from GSAP
        trigger: elem,
        onEnter: function() {animateScale(elem)}, //call the function when the elements enter the viewport
        onEnterBack: function() { animateScale(elem)}, //call the function when the elements re-enter the viewport
        onLeave: function() { hide(elem) } //call the function when the elements leave the viewport
      });
    });
  });

  function animateScale(elem){
    gsap.fromTo(elem, {scale:0, autoAlpha:0},
        {scale:1, autoAlpha:1, duration:.6})
  }


