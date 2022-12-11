// document.getElementById("create").onclick = function (e) {
// 	// e.preventDefault();
// 	console.log("🚀 ~ file: script.js:4 ~ createBtn.onclick");
// 	//
// };

// Sticky Navigation
const sectionHeroEl = document.querySelector(`.section-hero`);
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);
		if (ent.isIntersecting === false) {
			document.body.classList.add(`sticky`);
		}
		if (ent.isIntersecting) {
			document.body.classList.remove(`sticky`);
		}
	},

	{
		// in the viewport
		root: null,
		threshold: 0,
		rootMargin: `-80px`,
	}
);

obs.observe(sectionHeroEl);

// Hero Carousel

const imgs = document.getElementById(`imgs`);
const leftBtn = document.getElementById(`left`);
const rightBtn = document.getElementById(`right`);

const img = document.querySelectorAll(`#imgs img`);
console.log(img);
let idx = 0;

let interval = setInterval(run, 4000);
function run() {
	idx++;
	changeImage();
}

function changeImage() {
	if (idx > img.length - 1) {
		idx = 0;
	} else if (idx < 0) {
		idx = img.length - 1;
	}

	imgs.style.transform = `translateX(${-idx * 45.8}rem)`;
}

function reserInterval() {
	clearInterval(interval);
	interval = setInterval(run, 4000);
}

rightBtn.addEventListener(`click`, () => {
	idx++;
	changeImage();
	reserInterval();
});

leftBtn.addEventListener(`click`, () => {
	idx--;
	changeImage();
	reserInterval();
});
