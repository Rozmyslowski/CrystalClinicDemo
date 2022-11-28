const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const socialItem = document.querySelector(".social-box__item");
const socialItemTwo = document.querySelector(".social-box__item-two");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");


const handleNav = () => {
	nav.classList.toggle("nav--active");

	navBtnBars.classList.remove("black-bars-color");
    socialItem.classList.remove("social-box-color");
    socialItemTwo.classList.remove("social-box-color");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
		nav.classList.remove("nav--active");
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color");

		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove("black-bars-color");
              
		}
	});
};

const handleObserverSocial = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 100
		) {
			
            socialItem.classList.add("social-box-color");
            socialItemTwo.classList.add("social-box-color");
           
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 100
		) {
			
            socialItem.classList.remove("social-box-color");
            socialItemTwo.classList.remove("social-box-color");
            
		}
	});
};




const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleObserver);
window.addEventListener("scroll", handleObserverSocial);
