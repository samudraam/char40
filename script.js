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
    overwrite: "auto",
  });
  allCircles.forEach((circle) => {
    if (circle != circle9) {
      gsap.to(circle, {
        opacity: 0,
        duration: 5,
        overwrite: "auto",
      });
    }
  });
  gsap.to(".maincontainer", {
    duration: 5,
    backgroundColor: "#82CAFF",
    overwrite: "auto",
  });
  gsap.to("html", {
    duration: 5,
    backgroundColor: "#82CAFF",
    overwrite: "auto",
  });

  setTimeout(() => {
    allCircles.forEach((circle) => {
      if (circle != circle9) {
        gsap.to(circle, {
          opacity: 1,
          duration: 1,
          overwrite: "auto",
        });
      }
    });
    gsap.to(".maincontainer", {
      duration: 2,
      backgroundColor: "#000000",
      overwrite: "auto",
    });
    gsap.to("html", {
      duration: 2,
      backgroundColor: "#000000",
      overwrite: "auto",
    });

    gsap.killTweensOf(circle9);
    gsap.to(circle9, {
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      duration: 0.5,
      backgroundColor: "#ACDED5",
      overwrite: "auto",
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
    overwrite: "auto",
  });
  gsap.to(circle10, {
    duration: 3,
    scale: 30,
    ease: "power2.out",
    origin: "center",
    transformOrigin: "center",
    overwrite: "auto",
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
  TweenMax.to(allCircles, 0.4, {
    scale: 1.5,
    ease: Bounce.easeOut,
    overwrite: "auto",
  });
  TweenMax.to(allCircles, 0.2, { scale: 1, delay: 0.4, overwrite: "auto" });
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
    gsap.to(circle, {
      x: "+=25",
      yoyo: true,
      repeat: -1,
      duration: 0.1,
      overwrite: "auto",
    });
    gsap.to(circle, {
      x: "-=25",
      yoyo: true,
      repeat: -1,
      duration: 0.1,
      overwrite: "auto",
    });
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
    gsap.to(circle, {
      y: -50,
      ease: "power2.out",
      duration: duration / 4,
      overwrite: "auto",
    });
    gsap.to(circle, {
      y: 0,
      ease: "bounce.out",
      duration: duration / 2,
      delay: duration / 4,
      overwrite: "auto",
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
            overwrite: "auto",
          });
        },
        overwrite: "auto",
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
          overwrite: "auto",
        });
      },
      overwrite: "auto",
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
      overwrite: "auto",
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
        overwrite: "auto",
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
        overwrite: "auto",
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
        overwrite: "auto",
      });
      setTimeout(() => {
        gsap.to([circle19, circle17, circle18], {
          x: "-100vw",
          duration: 2,
          ease: "power1.inOut",
          overwrite: "auto",
        });
      }, 10000);
    },
    overwrite: "auto",
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

//circle 22
const { letter: iconText14, circle: circle22 } = appendTextToCircle(
  "circle-22",
  "blur",
  "iconText14"
);
circle22.addEventListener("mouseover", () => {
  gsap.to(circle22, {
    backgroundColor: "#CCA589",
    duration: 1,
  });
  gsap.to(iconText14, {
    opacity: 1,
  });
});
circle22.addEventListener("click", () => {
  gsap.to("body", {
    filter: "blur(10px)",
    duration: 1,
    overwrite: "auto",
  });
});

//circle 23
const { letter: iconText15, circle: circle23 } = appendTextToCircle(
  "circle-23",
  "invert",
  "iconText15"
);
circle23.addEventListener("mouseover", () => {
  gsap.to(circle23, {
    backgroundColor: "#D7A9A5",
    duration: 1,
  });
  gsap.to(iconText15, {
    opacity: 1,
  });
});
circle23.addEventListener("click", () => {
  gsap.to(allCircles, {
    filter: "drop-shadow(16px 16px 20px red) invert(100%)",
    duration: 1,
    overwrite: "auto",
  });
});

//circle 24
const { letter: iconText16, circle: circle24 } = appendTextToCircle(
  "circle-24",
  "grey",
  "iconText16"
);
circle24.addEventListener("mouseover", () => {
  gsap.to(circle24, {
    backgroundColor: "#8C65B0",
    duration: 1,
  });
  gsap.to(iconText16, {
    opacity: 1,
  });
});
circle24.addEventListener("click", () => {
  gsap.to(allCircles, {
    filter: " grayscale(100%)",
    duration: 1,
    overwrite: "auto",
  });
});

//circle 25
const { letter: iconText17, circle: circle25 } = appendTextToCircle(
  "circle-25",
  "contrast",
  "iconText17"
);
circle25.addEventListener("mouseover", () => {
  gsap.to(circle25, {
    backgroundColor: "#90BAB2",
    duration: 1,
  });
  gsap.to(iconText17, {
    opacity: 1,
  });
});
circle25.addEventListener("click", () => {
  gsap.to(allCircles, {
    filter: "contrast(300%)",
    duration: 1,
    overwrite: "auto",
  });
});

//circle 26
const { letter: iconText18, circle: circle26 } = appendTextToCircle(
  "circle-26",
  "disappear",
  "iconText18"
);
circle26.addEventListener("mouseover", () => {
  gsap.to(circle26, {
    backgroundColor: "#8AAD98",
    duration: 1,
  });
  gsap.to(iconText18, {
    opacity: 1,
  });
});
circle26.addEventListener("click", () => {
  gsap.to(allCircles, {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    overwrite: "auto",
  });
});

//circle 27
const { letter: iconText19, circle: circle27 } = appendTextToCircle(
  "circle-27",
  "shrink",
  "iconText19"
);
circle27.addEventListener("mouseover", () => {
  gsap.to(circle27, {
    backgroundColor: "#8299A9",
    duration: 1,
  });
  gsap.to(iconText19, {
    opacity: 1,
  });
});

circle27.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    gsap.to(circle, {
      scale: 0.5,
      duration: 1,
      ease: "power2.inOut",
      overwrite: "auto",
    });
    const text = circle.querySelector("p");
    if (text) {
      gsap.to(text, {
        scale: 0.5,
        duration: 1,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    }
  });
});

//circle 28
const { letter: iconText20, circle: circle28 } = appendTextToCircle(
  "circle-28",
  "random color",
  "iconText20"
);
circle28.addEventListener("mouseover", () => {
  gsap.to(circle28, {
    backgroundColor: "#897690",
    duration: 1,
  });
  gsap.to(iconText20, {
    opacity: 1,
  });
});

circle28.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    gsap.to(circle, {
      backgroundColor: randomColor,
      duration: 1,
      overwrite: "auto",
    });
  });
});

//circle 29
const { letter: iconText21, circle: circle29 } = appendTextToCircle(
  "circle-29",
  "block",
  "iconText21"
);
circle29.addEventListener("mouseover", () => {
  gsap.to(circle29, {
    backgroundColor: "#B29C77",
    duration: 1,
  });
  gsap.to(iconText21, {
    opacity: 1,
  });
});

circle29.addEventListener("click", () => {
  const hugeCircle = document.createElement("div");
  hugeCircle.style.position = "fixed";
  hugeCircle.style.width = "100vw";
  hugeCircle.style.height = "100vh";
  hugeCircle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
  hugeCircle.style.borderRadius = "50%";
  hugeCircle.style.top = "50%";
  hugeCircle.style.left = "50%";
  hugeCircle.style.transform = "translate(-50%, -50%)";
  hugeCircle.style.zIndex = "1000";
  document.body.appendChild(hugeCircle);

  gsap.fromTo(
    hugeCircle,
    { scale: 0 },
    { scale: 1, duration: 1, ease: "power2.out" }
  );
});

//circle 30
const { letter: iconText22, circle: circle30 } = appendTextToCircle(
  "circle-30",
  "pop",
  "iconText22"
);
circle30.addEventListener("mouseover", () => {
  gsap.to(circle30, {
    backgroundColor: "#9B7E69",
    duration: 1,
  });
  gsap.to(iconText22, {
    opacity: 1,
  });
});

circle30.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    if (circle !== circle30) {
      gsap.to(circle, {
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          circle.style.display = "none";
        },
        overwrite: "auto",
      });
    }
  });
});

//circle 31
const { letter: iconText23, circle: circle31 } = appendTextToCircle(
  "circle-31",
  "grow",
  "iconText23"
);
circle31.addEventListener("mouseover", () => {
  gsap.to(circle31, {
    backgroundColor: "#A67E7A",
    duration: 1,
  });
  gsap.to(iconText23, {
    opacity: 1,
  });
});

circle31.addEventListener("click", () => {
  allCircles.forEach((circle) => {
    gsap.to(circle, {
      scale: 2,
      duration: 1,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  });
});

//circle 32
const { letter: iconText24, circle: circle32 } = appendTextToCircle(
  "circle-32",
  "top secret",
  "iconText24"
);
circle32.addEventListener("mouseover", () => {
  gsap.to(circle32, {
    backgroundColor: "#684B83",
    duration: 1,
  });
  gsap.to(iconText24, {
    opacity: 1,
  });
});

circle32.addEventListener("click", () => {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.width = "80vw";
  popup.style.height = "80vh";
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  popup.style.zIndex = "1000";
  popup.style.display = "flex";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";

  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.src =
    "https://www.youtube.com/embed/n1j_waIwr6A?si=e9S5ykqsRFC2rf1W%22%20title=%22YouTube%20video%20player";
  iframe.allow =
    "autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "";
  iframe.allowFullscreen = true;

  popup.appendChild(iframe);
  document.body.appendChild(popup);

  popup.addEventListener("click", () => {
    document.body.removeChild(popup);
  });
});

//circle 33
const { letter: iconText25, circle: circle33 } = appendTextToCircle(
  "circle-33",
  "border",
  "iconText25"
);

circle33.addEventListener("mouseover", () => {
  gsap.to(circle33, {
    backgroundColor: "#93BCB5",
    duration: 1,
  });
  gsap.to(iconText25, {
    opacity: 1,
  });
});
circle33.style.borderStyle = "solid";

circle33.addEventListener("click", () => {
  gsap.fromTo(
    circle33,
    { borderWidth: "0px", borderColor: "transparent" },
    {
      borderWidth: "80px",
      borderColor: "#FFF",
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(circle33, {
          borderWidth: "0px",
          borderColor: "transparent",
          duration: 1,
          ease: "power2.inOut",
        });
      },
      overwrite: "auto",
    }
  );
});
//circle 34
const { letter: iconText26, circle: circle34 } = appendTextToCircle(
  "circle-34",
  "flash",
  "iconText26"
);

circle34.addEventListener("mouseover", () => {
  gsap.to(circle34, {
    backgroundColor: "#6D8A79",
    duration: 1,
  });
  gsap.to(iconText26, {
    opacity: 1,
  });
});

circle34.addEventListener("click", () => {
  const flashColors = () => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    gsap.to(allCircles, {
      backgroundColor: randomColor,
      duration: 0.5,
      onComplete: flashColors,
      overwrite: "auto",
    });
  };
  flashColors();
});

//circle 35
const { letter: iconText27, circle: circle35 } = appendTextToCircle(
  "circle-35",
  "breathe",
  "iconText27"
);

circle35.addEventListener("mouseover", () => {
  gsap.to(circle35, {
    backgroundColor: "#70828F",
    duration: 1,
  });
  gsap.to(iconText27, {
    opacity: 1,
  });
});

circle35.addEventListener("click", () => {
  gsap.to(allCircles, {
    y: "-=25",
    duration: 1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    overwrite: "auto",
  });
});

//circle 36
const { letter: iconText28, circle: circle36 } = appendTextToCircle(
  "circle-36",
  "no",
  "iconText28"
);

circle36.addEventListener("mouseover", () => {
  gsap.to(circle36, {
    backgroundColor: "#87808A",
    duration: 1,
  });
  gsap.to(iconText28, {
    opacity: 1,
  });
});

circle36.addEventListener("click", () => {
  iconText28.textContent = iconText28.textContent === "no" ? "yes" : "no";
});

//circle 37
const { letter: iconText29, circle: circle37 } = appendTextToCircle(
  "circle-37",
  "boxed",
  "iconText29"
);

circle37.addEventListener("mouseover", () => {
  gsap.to(circle37, {
    backgroundColor: "#9E8968",
    duration: 1,
  });
  gsap.to(iconText29, {
    opacity: 1,
  });
});

circle37.addEventListener("click", () => {
  for (let i = 0; i < 700; i++) {
    const boxes = document.createElement("div");
    boxes.classList.add("boxes");
    const size = Math.random() * 50 + 20;
    boxes.style.width = `${size}px`;
    boxes.style.height = `${size}px`;

    const pageHeight = document.documentElement.scrollHeight;
    const pageWidth = document.documentElement.scrollWidth;

    boxes.style.position = "absolute";
    boxes.style.top = `${Math.random() * (pageHeight - size)}px`;
    boxes.style.left = `${Math.random() * (pageWidth - size)}px`;
    boxes.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    boxes.style.zIndex = "1000";

    document.body.appendChild(boxes);

    gsap.fromTo(
      boxes,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );

    setTimeout(() => {
      gsap.to(boxes, {
        opacity: 0,
        duration: 1,
        onComplete: () => boxes.remove(),
      });
    }, 5000);
  }
});
//circle 38
const { letter: iconText30, circle: circle38 } = appendTextToCircle(
  "circle-38",
  "pattern",
  "iconText30"
);

circle38.addEventListener("mouseover", () => {
  gsap.to(circle38, {
    backgroundColor: "#8F7460",
    duration: 1,
  });
  gsap.to(iconText30, {
    opacity: 1,
  });
});
circle38.addEventListener("click", () => {
  const patterns = ["pattern1", "pattern2", "pattern3"];
  const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  patterns.forEach((pattern) => document.body.classList.remove(pattern));
  document.body.classList.add(randomPattern);
});

//circle 39
const { letter: iconText31, circle: circle39 } = appendTextToCircle(
  "circle-39",
  "love you",
  "iconText31"
);

circle39.addEventListener("mouseover", () => {
  gsap.to(circle39, {
    backgroundColor: "#5F4441",
    duration: 1,
  });
  gsap.to(iconText31, {
    opacity: 1,
  });
});

const compliments = ["You're cute!", "You're so smart!", "You're the best!"];
let complimentIndex = 0;

circle39.addEventListener("click", () => {
  alert(compliments[complimentIndex]);
  complimentIndex = (complimentIndex + 1) % compliments.length;
});

//circle 40
const { letter: iconText32, circle: circle40 } = appendTextToCircle(
  "circle-40",
  "reload",
  "iconText32"
);

circle40.addEventListener("mouseover", () => {
  gsap.to(circle40, {
    backgroundColor: "#60556A",
    duration: 1,
  });
  gsap.to(iconText32, {
    opacity: 1,
  });
});

circle40.addEventListener("click", () => {
  location.reload();
});
