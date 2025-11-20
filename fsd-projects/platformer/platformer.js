$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
    //
    



    // TODO 2 - Create Platforms
  
createPlatform(300,600,200,10,"black"); 
   createPlatform(0,700,200,10,"blue");
   createPlatform(500,500,200,10,"red");
   createPlatform(700,600,200,10,"pink");
   createPlatform(900,700,200,10,"yellow");
   createPlatform(1200,700,200,10,"green");




    // TODO 3 - Create Collectables
createCollectable("database",200,660);
    createCollectable("database",600,460);
    createCollectable("database",1000,660);



    
    // TODO 4 - Create Cannons
createCannon("top", 300,2000);
        createCannon("bottom", 545,1350);
            createCannon("bottom", 900,2300);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
