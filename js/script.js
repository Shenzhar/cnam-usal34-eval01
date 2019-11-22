(() => {
  let buttonA = document.querySelector(".button-a"); //Cela permet de trouver la classe 'button-a'
  let buttonB = document.querySelector(".button-b");
  let keyCodeA = 65; //Cela correspond au bouton 'A' du clavier. Cela permet au code de savoir quel touche du clavier est appuyée.
  let keyCodeB = 66; //Cela correspond a la position du 'B'

  function pressOnA() {
    //Il s'agit de la fonction qui est utilisée pour l'evenement 'keyup'
    console.log("A"); //On affiche quelle touche est appuyée.
  }

  function pressOnB() {
    //On affiche quelle touche est appuyée.
    console.log("B");
  }

  document.addEventListener("keyup", e => {
    //Lorsque que le bouton n'est pas appuyé alors la classlist n'est pas 'pressed'
    if (e.keyCode === keyCodeA) {
      buttonA.classList.remove("pressed");
      pressOnA();
    }

    if (e.keyCode === keyCodeB) {
      buttonB.classList.remove("pressed");
      pressOnB();
    }
  });

  document.addEventListener("keydown", e => {
    //Ceci correspond au mouvements des bouttons lorsqu'il sont appuyés.
    if (e.keyCode === keyCodeA) buttonA.classList.add("pressed"); //si le bouton a est appuyé alors on lui ajoute la classe 'pressed'
    if (e.keyCode === keyCodeB) buttonB.classList.add("pressed");
  });
})();
