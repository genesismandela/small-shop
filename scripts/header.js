const btnShopCart = document.querySelector(".shop-cart");
const resumeShopCart = document.querySelector(".cart-resume");

const closeShopCart = document.querySelector(".cart-resume__close");

btnShopCart.addEventListener("click", function () {
	if ((resumeShopCart.style.display = "none")) {
		resumeShopCart.style.display = "flex";
		console.log("open");
	}
});

closeShopCart.addEventListener("click", function () {
	resumeShopCart.style.display = "none";
});
