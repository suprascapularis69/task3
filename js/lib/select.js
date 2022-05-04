const elSelectLocation = document.getElementsByClassName("js-selectLocation")[0];
const elSelectLocationValue = elSelectLocation.children[0];
const elSelectLocationOptions = elSelectLocation.children[1];
const locationLabel = elSelectLocationValue.getAttribute("data-value");

const elSelectProperty = document.getElementsByClassName("js-selectProperty")[0];
const elSelectPropertyValue = elSelectProperty.children[0];
const elSelectPropertyOptions = elSelectProperty.children[1];
const propertyLabel = elSelectPropertyValue.getAttribute("data-value");

const elSelectPrice = document.getElementsByClassName("js-selectPrice")[0];
const elSelectPriceValue = elSelectPrice.children[0];
const elSelectPriceOptions = elSelectPrice.children[1];
const priceLabel = elSelectPriceValue.getAttribute("data-value");


    Array.from(elSelectLocationOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectLocationValue.textContent = e.target.textContent;
        // Close select
        elSelectLocation.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectLocationValue.addEventListener("click", (e) => {
      elSelectLocation.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectLocation.contains(event.target);
      if (didClickedOutside) {
        elSelectLocation.classList.remove("isActive");
      }
    });




    Array.from(elSelectPropertyOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPropertyValue.textContent = e.target.textContent;
        // Close select
        elSelectProperty.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPropertyValue.addEventListener("click", (e) => {
      elSelectProperty.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectProperty.contains(event.target);
      if (didClickedOutside) {
        elSelectProperty.classList.remove("isActive");
      }
    });



    Array.from(elSelectPriceOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
       
        elSelectPriceValue.textContent = e.target.textContent;
        // Close select
        elSelectPrice.classList.remove("isActive");
      });
    });

    
    // Toggle select on label click
    elSelectPriceValue.addEventListener("click", (e) => {
      elSelectPrice.classList.toggle("isActive");
    });

 
    document.addEventListener("click", (e) => {
      const didClickedOutside = !elSelectPrice.contains(event.target);
      if (didClickedOutside) {
        elSelectPrice.classList.remove("isActive");
      }
    });