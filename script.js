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
function random(min, max) {
  return Math.random() * (max - min) + min;
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
const { letter: iconText1, circle: circle9 } = appendTextToCircle(
  "circle-9",
  "sunrise",
  "iconText1"
);

let isCircle9 = false;

circle9.addEventListener("mouseover", () => {
  gsap.to(circle9, {
    backgroundColor: "#ACDED5",
    duration: 1,
  });
  isCircle9 = true;
  gsap.to(iconText1, {
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
const { letter: iconText2, circle: circle10 } = appendTextToCircle(
  "circle-10",
  "absorb",
  "iconText2"
);

circle10.addEventListener("mouseover", () => {
  gsap.to(circle10, {
    backgroundColor: "#A7D1B8",
    duration: 1,
  });
  gsap.to(iconText2, {
    opacity: 1,
  });
});

circle10.addEventListener("click", () => {
  gsap.to(iconText2, {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      iconText2.style.display = "none";
    },
  });
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

const { letter: iconText3, circle: circle11 } = appendTextToCircle(
  "circle-11",
  "drag drop",
  "iconText3"
);
circle11.addEventListener("mouseover", () => {
  gsap.to(circle11, {
    backgroundColor: "#AAC7DA",
    duration: 1,
  });
  gsap.to(iconText3, {
    opacity: 1,
  });
});

circle11.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    Draggable.create(circle, {
      type: "x,y",
      bounds: document.body,
    });
  });
});

//circle 12
const { letter: iconText4, circle: circle12 } = appendTextToCircle(
  "circle-12",
  "spring",
  "iconText4"
);
circle12.addEventListener("mouseover", () => {
  gsap.to(circle12, {
    backgroundColor: "#C6AAD0",
    duration: 1,
  });
  gsap.to(iconText4, {
    opacity: 1,
  });
});

circle12.addEventListener("click", () => {
  TweenMax.to(allCircles, 0.4, { scale: 1.5, ease: Bounce.easeOut });
  TweenMax.to(allCircles, 0.2, { scale: 1, delay: 0.4 });
});

//circle 13
const { letter: iconText5, circle: circle13 } = appendTextToCircle(
  "circle-13",
  "shake",
  "iconText5"
);
circle13.addEventListener("mouseover", () => {
  gsap.to(circle13, {
    backgroundColor: "#FCDCA9",
    duration: 1,
  });
  gsap.to(iconText5, {
    opacity: 1,
  });
});

circle13.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    gsap.to(circle, { x: "+=25", yoyo: true, repeat: -1, duration: 0.1 });
    gsap.to(circle, { x: "-=25", yoyo: true, repeat: -1, duration: 0.1 });
  });
});

//circle 14
const { letter: iconText6, circle: circle14 } = appendTextToCircle(
  "circle-14",
  "jump",
  "iconText6"
);
circle14.addEventListener("mouseover", () => {
  gsap.to(circle14, {
    backgroundColor: "#F0C3A2",
    duration: 1,
  });
  gsap.to(iconText6, {
    opacity: 1,
  });
});

circle14.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    var duration = 1;
    gsap.to(circle, { y: -50, ease: "power2.out", duration: duration / 4 });
    gsap.to(circle, {
      y: 0,
      ease: "bounce.out",
      duration: duration / 2,
      delay: duration / 4,
    });
  });
});

//circle 15
const { letter: iconText7, circle: circle15 } = appendTextToCircle(
  "circle-15",
  "spin",
  "iconText7"
);
circle15.addEventListener("mouseover", () => {
  gsap.to(circle15, {
    backgroundColor: "#EBBAB5",
    duration: 1,
  });
  gsap.to(iconText7, {
    opacity: 1,
  });
});

circle15.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    gsap.fromTo(
      circle,
      { rotation: 0 },
      {
        rotation: 1080,
        duration: 3,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(circle, {
            rotation: 0,
            duration: 0.5,
            modifiers: {
              rotation: gsap.utils.wrap(0, 360),
            },
          });
        },
      }
    );
  });
});

//circle 16
const { letter: iconText8, circle: circle16 } = appendTextToCircle(
  "circle-16",
  "squared",
  "iconText8"
);
circle16.addEventListener("mouseover", () => {
  gsap.to(circle16, {
    backgroundColor: "#9D70C8",
    duration: 1,
  });
  gsap.to(iconText8, {
    opacity: 1,
  });
});

circle16.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    gsap.to(circle, {
      borderRadius: "15%",
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(circle, {
          borderRadius: "50%",
          duration: 1,
          delay: 1,
          ease: "power2.out",
        });
      },
    });
  });
});

//circle 17
const { letter: iconText9, circle: circle17 } = appendTextToCircle(
  "circle-17",
  "confetti",
  "iconText9"
);
circle17.addEventListener("mouseover", () => {
  gsap.to(circle17, {
    backgroundColor: "#9AC7BF",
    duration: 1,
  });
  gsap.to(iconText9, {
    opacity: 1,
  });
});

circle17.addEventListener("click", () => {
  for (let i = 0; i < 1000; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = `${random(5, 15)}px`;
    confetti.style.height = `${random(5, 15)}px`;
    confetti.style.backgroundColor = `hsl(${random(0, 360)}, 70%, 50%)`;
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "500";
    confetti.style.top = `${random(-50, 50)}px`;
    confetti.style.left = `${random(0, window.innerWidth)}px`;

    container.appendChild(confetti);

    gsap.to(confetti, {
      y: window.innerHeight + 1700,
      x: `+=${random(-500, 500)}`,
      rotation: random(0, 920),
      duration: random(10, 15),
      ease: "power1.out",
      onComplete: () => confetti.remove(),
    });
  }
});

//circle 18
const { letter: iconText10, circle: circle18 } = appendTextToCircle(
  "circle-18",
  "even",
  "iconText10"
);
circle18.addEventListener("mouseover", () => {
  gsap.to(circle18, {
    backgroundColor: "#96BDA6",
    duration: 1,
  });
  gsap.to(iconText10, {
    opacity: 1,
  });
});

circle18.addEventListener("click", () => {
  for (let i = 1; i <= 40; i++) {
    const isEven = i % 2 === 0;
    if (isEven) {
      gsap.to(`#circle-${i}`, {
        y: "+=100",
        rotation: 360,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }
});

//circle 19
const { letter: iconText11, circle: circle19 } = appendTextToCircle(
  "circle-19",
  "odd",
  "iconText11"
);
circle19.addEventListener("mouseover", () => {
  gsap.to(circle19, {
    backgroundColor: "#8DA6B7",
    duration: 1,
  });
  gsap.to(iconText11, {
    opacity: 1,
  });
});

circle19.addEventListener("click", () => {
  for (let i = 1; i <= 40; i++) {
    const isEven = i % 2 === 0;
    if (!isEven) {
      gsap.to(`#circle-${i}`, {
        backgroundColor: "#FF0000",
        duration: 1,
      });
    }
  }
});

//circle 20
const { letter: iconText12, circle: circle20 } = appendTextToCircle(
  "circle-20",
  "ballaya",
  "iconText12"
);

const warning = document.createElement("p");
warning.textContent = "may need to reload for full effect";
warning.classList.add("warning");
warning.style.opacity = "0";
circle20.appendChild(warning);

circle20.addEventListener("mouseover", () => {
  gsap.to(circle20, {
    backgroundColor: "#BFA7C7",
    duration: 1,
  });
  gsap.to([iconText12, warning], {
    opacity: 1,
  });
});
const video = document.createElement("video");
video.setAttribute("id", "circleVideo");
video.setAttribute("playsinline", true);
video.style.opacity = "0";

const source = document.createElement("source");
source.setAttribute("src", "clippedballa.mp4");
source.setAttribute("type", "video/mp4");
video.appendChild(source);

circle20.appendChild(video);

circle20.addEventListener("click", () => {
  gsap.to(iconText12, {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      gsap.to(video, {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          video.play();
        },
      });
      setTimeout(() => {
        gsap.to([circle19, circle17, circle18], {
          x: "-100vw",
          duration: 2,
          ease: "power1.inOut",
        });
      }, 10000);
    },
  });
});

//circle 21
const { letter: iconText13, circle: circle21 } = appendTextToCircle(
  "circle-21",
  "kaaram 🌶️",
  "iconText13"
);
circle21.addEventListener("mouseover", () => {
  gsap.to(circle21, {
    backgroundColor: "#E0C396",
    duration: 1,
  });
  gsap.to(iconText13, {
    opacity: 1,
  });
});
circle21.addEventListener("click", () => {
  window.location.href =
    "https://youtu.be/5yPO5lFeAIE?si=7J31pr7Fc7PnIQAR&t=130";
});

//circle 21
const { letter: iconText14, circle: circle22 } = appendTextToCircle(
  "circle-22",
  "kaaram 🌶️",
  "iconText13"
);
circle21.addEventListener("mouseover", () => {
  gsap.to(circle21, {
    backgroundColor: "#E0C396",
    duration: 1,
  });
  gsap.to(iconText13, {
    opacity: 1,
  });
});
circle21.addEventListener("click", () => {
  window.location.href =
    "https://youtu.be/5yPO5lFeAIE?si=7J31pr7Fc7PnIQAR&t=130";
});
