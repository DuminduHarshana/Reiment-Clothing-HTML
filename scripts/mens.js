
const shopNowBtn = document.getElementById("shop-now-btn");
const targetContainer = document.querySelector(".card-body");


shopNowBtn.addEventListener("click", () => {
  
  const targetPosition = targetContainer.getBoundingClientRect().top + window.pageYOffset;

  
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});
