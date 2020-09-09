const contenedorCategorias = document.querySelector(".catSliderContainer");

  function deslizeIzquierda() {
 
    if (screen.width <= 500){
      contenedorCategorias.scrollLeft -= 400;      
    } else {
      contenedorCategorias.scrollLeft -= 330;      
    }
  }

  function deslizeDerecha() {

    if (screen.width <= 500){
      contenedorCategorias.scrollLeft += 400;      
    } else {
      contenedorCategorias.scrollLeft += 330;      
    }
  }