// GSAP: Simple Animation (Move horizontally)
gsap.to("#gsap-box", {
  x: 300,
  duration: 2,
  ease: "power1.inOut",
  repeat: -1, 
  yoyo: true 
});
// GSAP: Complex Animation (Move, Scale, Rotate, and Fade)
gsap.to("#gsap-box2", {
  x: 300,
  scale: 1.5,
  rotation: 360,
  opacity: 0.5,
  duration: 3,
  ease: "elastic.out(1, 0.3)",
  repeat: -1, 
  yoyo: true 
});
// GSAP: Complex Timeline Animation
let gsapTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// Animasi pada elemen lingkaran (circle)
gsapTimeline
  .to("#gsap-container .circle", {
    x: 100,
    scale: 1.5,
    rotation: 360,
    duration: 1.5,
    ease: "power2.inOut",
  })
  .to("#gsap-container .circle", {
    scale: 0.5,
    backgroundColor: "purple",
    borderRadius: "0%",
    duration: 1,
    ease: "power3.inOut",
  });

// Animasi pada elemen kotak (square)
gsapTimeline
  .to(
    "#gsap-container .square",
    {
      y: 150,
      scale: 1.5,
      rotation: -360,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "-=1"
  ) // Mulai animasi kotak sebelum lingkaran selesai
  .to(
    "#gsap-container .square",
    {
      backgroundColor: "lime",
      borderRadius: "50%",
      scale: 0.7,
      duration: 1,
      ease: "power3.inOut",
    },
    "-=0.5"
  ); // Menjalankan sebagian animasi bersamaan dengan lingkaran

// Anime.js: Simple Animation (Move horizontally)
anime({
  targets: "#anime-box",
  translateX: 300,
  duration: 2000,
  easing: "easeInOutQuad",
  loop: true,           // Animasi akan berulang terus menerus
  direction: "alternate"
});


// Anime.js: Complex Animation (Move, Scale, Rotate, and Fade)
anime({
  targets: "#anime-box2",
  translateX: 300,
  scale: 1.5,
  rotate: "1turn",
  opacity: 0.5,
  duration: 3000,
  easing: "easeOutElastic(1, .3)",
  loop: true,           // Animasi akan berulang terus menerus
  direction: "alternate"
});


// Anime.js: Complex Timeline Animation
let animeTimeline = anime.timeline({
  easing: "easeInOutQuad",
  duration: 1500,
  loop: true,
});

// Animasi pada elemen lingkaran (circle)
animeTimeline
  .add({
    targets: "#anime-container .circle",
    translateX: 100,
    scale: 1.5,
    rotate: "1turn",
    easing: "easeInOutQuad",
  })
  .add({
    targets: "#anime-container .circle",
    scale: 0.5,
    backgroundColor: "purple",
    borderRadius: ["50%", "0%"],
    easing: "easeInOutQuart",
  });

// Animasi pada elemen kotak (square)
animeTimeline
  .add(
    {
      targets: "#anime-container .square",
      translateY: 150,
      scale: 1.5,
      rotate: "-1turn",
      easing: "easeInOutQuad",
    },
    "-=1000"
  ) // Memulai sebagian animasi lebih awal
  .add(
    {
      targets: "#anime-container .square",
      backgroundColor: "lime",
      borderRadius: ["0%", "50%"],
      scale: 0.7,
      easing: "easeInOutQuart",
    },
    "-=500"
  ); // Menjalankan sebagian animasi bersamaan dengan lingkaran
