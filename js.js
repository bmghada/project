console.log(document)


function  submitMessage(){

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = `Merci ${name} pour votre message : "${message}"`;
 
  }
  


const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    
    backToTopButton.style.display = "block";
  } else {
    
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  
  window.scrollTo({ top: 0, behavior: "smooth" });
});
