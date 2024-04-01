users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    name: "manisha",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    displaypic:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    name: "nilima",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    displaypic:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    name: "minati",
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    displaypic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    name: "nurren",
  },
];

function select(params) {
  return document.querySelector(params);
}
let curr = 0;
let isAnimating = false;


function setData(index){
  select(".name").innerText = users[index]?.name;

}

console.log(users[curr].displaypic);
(function initialAddition() {
  console.log(select(".maincard img"));
  select(".maincard img").src = users[curr]?.displaypic;
  select(".incomingcard img").src = users[curr + 1]?.displaypic;
setData(curr);
  curr = 2;
})();

const deny = select(".deny");
const allow = select(".allow");

deny.addEventListener("click", function () {
  console.log("hey");
 
    gsap.from(".element", {
      y: "100%",
      stagger: 0.06,
      ease: Power4.caseInOut,
      duration: 1.5,
    });
     setData(curr - 1);
  showImage();

});
allow.addEventListener("click", function () {
  console.log("hey");

  gsap.from(".element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.caseInOut,
    duration: 1.5,
  });
  setData(curr - 1);
  showImage();
});


function showImage() {
  if (!isAnimating) {
    isAnimating = true;

    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        //   alert("nice");
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        console.log(`me ${incoming}`);
        incoming.classList.remove("z-10");
        incoming.classList.add("z-20");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-20");
        main.classList.add("z-10");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr == users.length) curr = 0;

        select(".maincard img").src = users[curr].displaypic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).form(
      ".incomingcard",
      {
        scale: 0.5,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

(function containercreater() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden", "h-fit", "mb-1");
    console.log(div);
    div.appendChild(element);

    select(".details").appendChild(div);
  });
})();


