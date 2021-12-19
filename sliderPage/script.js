console.clear();

const { gsap, imagesLoaded } = window;
const requestURL = 'https://source.unsplash.com/1600x900/?ball';


const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");
let counter = 1;
const params = new URLSearchParams(document.location.search);
let category = params.get("category");
let backPath = params.get("backPath");
let imageToBeDisplayed =  "https://source.unsplash.com/160"+(counter%8)+"x900/?"+category;

const cardInfosContainerEl = document.querySelector(".info__wrapper");
const app__bg = document.querySelector(".backButton");

app__bg.onclick = function(){window.location.replace("../"+backPath +".html");}
// buttons.next.addEventListener("click", () => swapCards("right"));

// buttons.prev.addEventListener("click", () => swapCards("left"));
let image = new Image();
	image.src = "https://source.unsplash.com/160"+(counter%8)+"x900/?"+category;


function initCards(category){
	let image1 = new Image();
	
	image1.src = "https://source.unsplash.com/1600x900/?"+category;
	let image2 = new Image();
	let image3 = new Image();
	
	//image2.src = "https://source.unsplash.com/1611x900/?"+category;
	
	//setTimeout(() => {image3.src ="https://source.unsplash.com/1611x900/?"+category}, 500);
	//image3.src = "https://source.unsplash.com/1611x900/?"+category;
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");
	console.log(previousCardEl.classList);
	
	
	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");
	// currentBgImageEl.onclick = () => {
	// 	window.location.replace("../galleryPage/secondPage.html");
	// };
	// nextBgImageEl.onclick = () => {
	// 	window.location.replace("../galleryPage/secondPage.html");
	// };
	// previousBgImageEl.onclick = () => {
	// 	window.location.replace("../galleryPage/secondPage.html");
	// };
	currentCardEl.children[0].children[0].src = image1.src;
	currentBgImageEl.children[0].src = image1.src;
	setTimeout(() => {previousCardEl.children[0].children[0].src = "https://source.unsplash.com/1604x900/?"+category;
	
	previousBgImageEl.children[0].src = "https://source.unsplash.com/1604x900/?"+category;
}, 3000);
	//previousBgImageEl.children[0].src = "https://source.unsplash.com/1604x900/?"+category;
	//previousCardEl.children[0].children[0].src = image2.src;
	setTimeout(() => {nextCardEl.children[0].children[0].src ="https://source.unsplash.com/1602x900/?"+category;
	
	nextBgImageEl.children[0].src = "https://source.unsplash.com/1602x900/?"+category;
}, 1500);
	//nextBgImageEl.children[0].src = "https://source.unsplash.com/1602x900/?"+category;
	//nextCardEl.children[0].children[0].src = image3.src;
	//previousCardEl.children[0].children[0].src = image2.src;
	//nextCardEl.children[0].children[0].src = image3.src;
}	
initCards(category);
function initCategory(category){
	category = category;
}
function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

	currentCardEl.onclick = () => {};
	previousCardEl.onclick = () => {};
	nextCardEl.onclick = () => {};

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);
	
	function swapCardsClass() {
		//let image = new Image();
		//image.src = "https://source.unsplash.com/160"+(counter%8)+"x900/?football";
		//let imageToBeDisplayed = "https://source.unsplash.com/160"+(counter%8)+"x900/?football";
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");
		
		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");
			previousCardEl.onclick = () => {
				swapCards("right");
			}
			currentCardEl.onclick = () => {
				swapCards("left");
			}
			previousCardEl.children[0].children[0].src = image.src;
			
			currentBgImageEl.classList.add("previous--image");
			
			
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");
			previousBgImageEl.children[0].src= image.src;
			
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");
			currentCardEl.onclick = () => {
				swapCards("right");
			}
			nextCardEl.onclick = () => {
				swapCards("left");
			}
			nextCardEl.children[0].children[0].src = image.src;
			console.log("wsdffdsdsfdfsfds");
			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");
			nextBgImageEl.children[0].src = image.src;
		}
		counter++;
		image.src = "https://source.unsplash.com/160"+(counter%8)+"x900/?"+category;
	}
}
