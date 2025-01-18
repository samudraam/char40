const container = document.querySelector(".row");

//dynamically create and label 40 divs/circles
for (let i = 0; i < 40; i++) {
  const div = document.createElement("div");
  div.classList.add("col-lg-3", "col-md-4", "col-sm-6", "box");
  div.id = `box-${i + 1}`;

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.id = `circle-${i + 1}`;

  const textElement = document.createElement("p");
  textElement.textContent = `${i + 1}`;
  textElement.classList.add("text");

  div.appendChild(circle);
  div.appendChild(textElement);
  container.appendChild(div);
}

//page load animation
window.addEventListener("load", () => {
  gsap.fromTo(
    ".circle",
    {
      borderRadius: "0%",
      scale: 0.8,
      opacity: 0,
    },
    {
      borderRadius: "50%",
      opacity: 1,
      scale: 1,
      duration: 5,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)",
    }
  );
});

/**
 * Appends text to circle.
 * @param {text} circleId id of the circle.
 * @param {text} letterText text to append to circle.
 * @param {text} letterClass class of the letter.
 * @return {text} letter, circle, result of appending text to circle.
 */
function appendTextToCircle(circleId, letterText, letterClass) {
  const letter = document.createElement("p");
  letter.textContent = letterText;
  letter.classList.add(letterClass);
  letter.style.opacity = "0";

  const circle = document.getElementById(circleId);
  circle.appendChild(letter);

  return { letter, circle };
}

//circle-1
const { letter: letterM, circle: circle1 } = appendTextToCircle(
  "circle-1",
  "M",
  "letterM"
);
let isCircle1 = false;

circle1.addEventListener("mouseover", () => {
  if (!isCircle1) {
    gsap.to(circle1, {
      backgroundColor: "#ade9dd",
      duration: 1,
    });

    gsap.fromTo(
      letterM,
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "bounce.out",
      }
    );
    isCircle1 = true;
  }
});

//circle-2
const { letter: letterA, circle: circle2 } = appendTextToCircle(
  "circle-2",
  "A",
  "letterA"
);

let isCircle2 = false;

circle2.addEventListener("mouseover", () => {
  if (!isCircle2) {
    gsap.to(circle2, {
      backgroundColor: "#B5EECD",
      duration: 1,
    });

    gsap.fromTo(
      letterA,
      { scale: 0.1, opacity: 1 },
      { scale: 1, opacity: 1, duration: 5, ease: "elastic.out(1, 0.3)" }
    );
  }
  isCircle2 = true;
});

//circle-3
const { letter: letterK, circle: circle3 } = appendTextToCircle(
  "circle-3",
  "K",
  "letterK"
);

let isCircle3 = false;

circle3.addEventListener("mouseover", () => {
  if (!isCircle3) {
    gsap.to(circle3, {
      backgroundColor: "#B7DBF3",
      duration: 1,
    });
    gsap.fromTo(
      letterK,
      { skewX: "45deg", opacity: 0, scale: 0.8 },
      { skewX: "0deg", opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    );
  }
  isCircle3 = true;
});

//circle-4
const { letter: letterE, circle: circle4 } = appendTextToCircle(
  "circle-4",
  "E",
  "letterE"
);

let isCircle4 = false;

circle4.addEventListener("mouseover", () => {
  if (!isCircle4) {
    gsap.to(circle4, {
      backgroundColor: "#DDC5E7",
      duration: 1,
    });
    gsap.fromTo(
      letterE,
      { opacity: 0, rotation: 0, transformOrigin: "50% 50%" },
      { opacity: 1, rotation: 360, duration: 1.5, ease: "power2.out" }
    );
    isCircle4 = true;
  }
});

//circle-5
const { letter: letterI, circle: circle5 } = appendTextToCircle(
  "circle-5",
  "FUN",
  "letterI"
);

let isCircle5 = false;

circle5.addEventListener("mouseover", () => {
  if (!isCircle5) {
    gsap.to(circle5, {
      backgroundColor: "#FAEBA6",
      duration: 1,
    });
    gsap.set(".letterI", { opacity: 1 });
    gsap.to(".letterI", {
      duration: 1.5,
      text: "I",
      delay: 0.5,
    });
    isCircle5 = true;
  }
});

//circle-6
const { letter: letterT, circle: circle6 } = appendTextToCircle(
  "circle-6",
  "T",
  "letterT"
);

let isCircle6 = false;

circle6.addEventListener("mouseover", () => {
  if (!isCircle6) {
    gsap.to(circle6, {
      backgroundColor: "#F6D2AE",
      duration: 1,
    });
    gsap.set(".letterT", { opacity: 1 });
    gsap.fromTo(
      ".letterT",
      { fontWeight: 100 },
      {
        fontWeight: 900,
        duration: 1.5,
        ease: "bounce.out",
        repeat: 1,
        yoyo: true,
        onComplete: () => {
          gsap.to(".letterT", {
            fontWeight: 300,
            duration: 0.5,
          });
        },
      }
    );
    isCircle6 = true;
  }
});

//circle-7
const { letter: letterU, circle: circle7 } = appendTextToCircle(
  "circle-7",
  "U",
  "letterU"
);

let isCircle7 = false;

circle7.addEventListener("mouseover", () => {
  if (!isCircle7) {
    gsap.to(circle7, {
      backgroundColor: "#F8C1BC",
      duration: 1,
    });
    gsap.set(".letterU", { opacity: 1 });
    gsap.fromTo(
      ".letterU",
      { rotation: 0 },
      {
        rotation: -360,
        duration: 2,
        ease: "power2.inOut",
        repeat: 1,
        onComplete: () => {
          gsap.to(".letterU", {
            rotation: 0,
            duration: 0.5,
          });
        },
      }
    );
    isCircle7 = true;
  }
});

//circle-8
const { letter: letterP, circle: circle8 } = appendTextToCircle(
  "circle-8",
  "P",
  "letterP"
);
let isCircle8 = false;

circle8.addEventListener("mouseover", () => {
  if (!isCircle8) {
    gsap.to(circle8, {
      backgroundColor: "#C58FF8",
      duration: 1,
    });

    gsap.to(".letterP", {
      opacity: 1,
      duration: 1,
      delay: 1,
      onComplete: () => {
        gsap.to(".letterU, .letterP", {
          y: -50,
          duration: 1,
          ease: "power2.out",
        });
      },
    });

    isCircle8 = true;
  }
});

//circle-9
const icon = document.createElement("i");
icon.classList.add("fas", "fa-star"); // Add Font Awesome classes

// Append the icon to a circle
const circle9 = document.getElementById("circle9");
circle9.appendChild(icon);

let isCircle9 = false;

circle9.addEventListener("mouseover", () => {
  gsap.to(circle9, {
    backgroundColor: "#ACDED5",
    duration: 1,
  });
  isCircle9 = true;
  gsap.to(click, {
    opacity: 1,
  });
});

const allCircles = document.querySelectorAll(".circle");

circle9.addEventListener("click", () => {
  gsap.to(circle9, {
    backgroundColor: "yellow",
    boxShadow: "0 0 50px 50px rgba(255, 255, 0, 1)",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  allCircles.forEach((circle) => {
    if (circle != circle9) {
      gsap.to(circle, {
        opacity: 0,
        duration: 5,
      });
    }
  });
  gsap.to(".maincontainer", { duration: 5, backgroundColor: "#82CAFF" });
  gsap.to("html", { duration: 5, backgroundColor: "#82CAFF" });

  setTimeout(() => {
    allCircles.forEach((circle) => {
      if (circle != circle9) {
        gsap.to(circle, {
          opacity: 1,
          duration: 1,
        });
      }
    });
    gsap.to(".maincontainer", { duration: 2, backgroundColor: "#000000" });
    gsap.to("html", { duration: 2, backgroundColor: "#000000" });

    gsap.killTweensOf(circle9);
    gsap.to(circle9, {
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      duration: 0.5,
      backgroundColor: "#ACDED5",
    });
  }, 5000);
});

//circle 10
const circle10 = document.getElementById("circle-10");

circle10.addEventListener("mouseover", () => {
  gsap.to(circle10, {
    backgroundColor: "#A7D1B8",
    duration: 1,
  });
});

circle10.addEventListener("click", () => {
  gsap.to(circle10, {
    duration: 3,
    scale: 30,
    ease: "power2.out",
    origin: "center",
    transformOrigin: "center",
  });
});

//circle 11
gsap.registerPlugin(Draggable);

const circle11 = document.getElementById("circle-11");

circle11.addEventListener("mouseover", () => {
  gsap.to(circle11, {
    backgroundColor: "#AAC7DA",
    duration: 1,
  });
});

circle11.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    Draggable.create(circle, {
      type: "x,y",
      bounds: document.body,
    });
    TweenMax.to(circle, 0.1, { x: "+=25", yoyo: true, repeat: -1 }); //ig this is outdated bt whatever man
    TweenMax.to(circle, 0.1, { x: "-=25", yoyo: true, repeat: -1 });
  });
});

//circle 12
const circle12 = document.getElementById("circle-12");

circle12.addEventListener("mouseover", () => {
  gsap.to(circle12, {
    backgroundColor: "#AAC7DA",
    duration: 1,
  });
});
