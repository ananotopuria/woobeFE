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
