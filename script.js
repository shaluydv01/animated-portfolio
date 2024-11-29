function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locoScroll();

function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
  });

  page1Content.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect();

function page2Animation() {
  var tl = gsap.timeline();
  tl.from("#page2 h1", {
    y: 100,
    duration: 2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      scrub: 4,
      // markers: true,
      start: "top 60%",
      end: "top 40%",
      pinSpacing: false,
    },
  });
}

page2Animation();

function page3Animation() {
  gsap.from("#project2", {
    y: -1400,
    rotate: 360,
    duration: 5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      scrub: 4,
      start: "top 80%",
      end: " top 40%",
    },
  });

  gsap.from("#project1", {
    scale: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      scrub: 4,
      start: "top 40%",
      end: " top 37%",
    },
  });

  gsap.from("#project3", {
    scale: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      scrub: 4,
      start: "top 40%",
      end: " top 37%",
    },
  });
}

page3Animation();

function page4Animation() {
  const page4cursor = document.querySelector("#page4Cursor");
  const page4 = document.querySelector("#page4");

  page4.addEventListener("mousemove", (dets) => {
    page4cursor.style.left = dets.x + "px";
    page4cursor.style.top = dets.y + "px";
  });

  page4.addEventListener("mouseenter", (dets) => {
    gsap.to(page4cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page4.addEventListener("mouseleave", (dets) => {
    gsap.to(page4cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

page4Animation();

function page5Animation() {
  gsap.to("#page5-skills", {
    transform: "translate(-100%)",
    duration: 10,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top -0%",
      end: "top -200%",
      scrub: 5,
      pin: true,
      // pinSpacing: false,
    },
  });
}

page5Animation();

function page6Animation() {
  gsap.to("#page6Box2 h1", {
    y: 200,
    // duration: 2,
    scrollTrigger: {
      trigger: "#page6Box2 h1",
      scroller: "#main",
      start: "top 47%",
      end: "top 17%",
      scrub: 4,
    },
  });
}

page6Animation();

function menuOpen() {
  const menu = document.querySelector("#menu");

  const hiddenNav = document.querySelector("#hiddenNav");

  menu.addEventListener("click", () => {
    hiddenNav.style.display = "flex";
  });
}

menuOpen();

function menuClose(){
  const closeTag = document.querySelector("#closeTag");

  const hiddenNav = document.querySelector("#hiddenNav");

  closeTag.addEventListener("click", () => {
    hiddenNav.style.display ="none";
  })
}

menuClose();





