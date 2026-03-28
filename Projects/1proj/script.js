let upbutton=document.querySelector(".fa-chevron-up");
let downbutton=document.querySelector(".fa-chevron-down");
let bgimage=document.querySelector(".bgkimage");

let images=[
    "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_1.jpg?rnd=20200526195200",
    "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_4.jpg?rnd=20200526195200",
    "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_5.jpg?rnd=20200526195200",
    "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_2.jpg?rnd=20200526195200"
]

let index=0;



function changeImage(direction) {
  index += direction;

  // loop protection
  if (index >= images.length) {
    index = 0;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  
  bgimage.style.backgroundImage = `url('${images[index]}')`;
}

// event listeners
upbutton.addEventListener("click", () => changeImage(1));
downbutton.addEventListener("click", () => changeImage(-1));







let images1=document.querySelector(".images1");
let images2=document.querySelector(".images2");
let images3=document.querySelector(".images3");
let images4=document.querySelector(".images4");


images1.addEventListener("click",()=>{
    bgimage.style.backgroundImage = `url(${"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_3.jpg?rnd=20200526195200"})`;
})
images2.addEventListener("click",()=>{
    bgimage.style.backgroundImage = `url(${"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_2.jpg?rnd=20200526195200"})`;
    
})

images3.addEventListener("click",()=>{
    bgimage.style.backgroundImage = `url(${"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_4.jpg?rnd=20200526195200"})`;
})

images4.addEventListener("click",()=>{
    bgimage.style.backgroundImage=`url(${"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DV9858-084_5.jpg?rnd=20200526195200"})`;
})
