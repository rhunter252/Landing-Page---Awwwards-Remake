// Date
const date = new Date();

document.querySelector("#date-info").innerHTML =
  date.toLocaleString("en-US") + " north carolina";

//   GSAP
gsap.from(".text", 0.8, {
  y: 40,
  opacity: 0,
  ease: "power2.inOut",
  delay: 1,
});

gsap.from(".loader", 2, {
  width: 0,
  ease: "power4.inOut",
  delay: 2,
});

gsap.to(".pre-loader", 2, {
  top: "-100%",
  ease: "power4.inOut",
  delay: 4,
});

gsap.from(".row", 0.9, {
  y: 50,
  ease: "power4.inOut",
  delay: 4.5,
  stagger: {
    amount: 0.3,
  },
});
