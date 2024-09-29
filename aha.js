
  document.addEventListener("DOMContentLoaded", function() {
  let scrollContainer = document.querySelector(".section1");
  let backBtn = document.querySelector(".btn-back");
  let nextBtn = document.querySelector(".btn-next");

 

  nextBtn.addEventListener("click", ()=>{
      scrollContainer.scrollLeft += 300;
  });
  backBtn.addEventListener("click", ()=>{
      scrollContainer.scrollLeft -= 300;
  });
})