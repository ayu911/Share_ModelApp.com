const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const model_2 = document.querySelector(".model_2");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  model.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  model.classList.remove("active");
  overlay.classList.remove("overlayactive");
};


const openModal_2 = () => {
    console.log("Modal is Open");
    model_2.classList.add("active");
    overlay.classList.add("overlayactive");
  };
  
  const closeModal_2 = () => {
    model_2.classList.remove("active");
    overlay.classList.remove("overlayactive");
  };
  
  



