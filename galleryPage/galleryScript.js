let photos = ["nature","ball","stick","sick","usa","king","fitness","travel",
"art","cars","people","anime","calming","crazy","fun","angry","music","computer","biology",
"technology","astrology","gaming","kid","school","snow","mother","japan","autumn"
];
let imgs = [];
let photos_link = [];
let container = document.getElementsByClassName("container")[0];
for(let i = 0;i<photos.length;i++){
    let gallery_container = document.createElement("div");
    container.appendChild(gallery_container);
    gallery_container.classList.add("gallery-container"); 
    gallery_container.classList.add("h-"+ (Math.ceil(Math.random()*4)+1));
    gallery_container.classList.add("w-"+ (Math.ceil(Math.random()*4)+1));
    let gallery_item = document.createElement("div");
    gallery_item.classList.add("gallery-item");
    gallery_container.appendChild(gallery_item);
    let image = document.createElement("div");
    image.classList.add("image");
    gallery_item.appendChild(image);
    gallery_item.onclick = function(){
      window.location.href = "../sliderPage/sliderPage.html?category="+photos[i]+"&backPath=galleryPage/secondPage";
    }
    let img = document.createElement("img");
    img.src ="https://source.unsplash.com/1600x900/?"+photos[i];
   
    img.alt=photos[i];
    
    image.appendChild(img);
    let text = document.createElement("div");
    text.classList.add("text");
    text.textContent = photos[i].charAt(0).toUpperCase() + photos[i].slice(1);
    gallery_item.appendChild(text);
    
}

{/* <div class="gallery-container w-2">
                <div class="gallery-item">
                  <div class="image">
                    <img src="https://source.unsplash.com/1600x900/?fitness" alt="fitness">
                  </div>
                  <div class="text">Fitness</div>
                </div>
              </div> */}