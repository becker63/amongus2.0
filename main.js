
      var renderer = PIXI.autoDetectRenderer(660, 660, {backgroundColor: 0x34495e, antialias: true});
      document.body.appendChild(renderer.view);

      // Create the stage
      var stage = new PIXI.Container();

      let playerBox = PIXI.Sprite.from('https://media.tenor.com/gQV5VzHLWQIAAAAd/among-us-sus.gif');

      // Set the width and height of our boxes
      var boxWidth = renderer.width / 10;
      var boxHeight = renderer.height / 10;


      playerBox.height = boxWidth
      playerBox.width = boxHeight

      stage.addChild(playerBox);




      // Add the 'keydown' event listener to our document
      document.addEventListener('keydown', onKeyDown);

      animate();

      function animate() {
          // Render the stage
          renderer.render(stage);

          requestAnimationFrame(animate);
      }






      function onKeyDown(key) {
          // W Key is 87
          // Up arrow is 87
          if (key.keyCode === 87 || key.keyCode === 38) {
              // If the W key or the Up arrow is pressed, move the player up.
              if (playerBox.position.y != 0) {
                  // Don't move up if the player is at the top of the stage
                  playerBox.position.y -= boxHeight;
              }
          }

          // S Key is 83
          // Down arrow is 40
          if (key.keyCode === 83 || key.keyCode === 40) {
              // If the S key or the Down arrow is pressed, move the player down.
              if (playerBox.position.y != renderer.height - boxHeight) {
                  // Don't move down if the player is at the bottom of the stage
                  playerBox.position.y += boxHeight;
              }
          }

          // A Key is 65
          // Left arrow is 37
          if (key.keyCode === 65 || key.keyCode === 37) {
              // If the A key or the Left arrow is pressed, move the player to the left.
              if (playerBox.position.x != 0) {
                  // Don't move to the left if the player is at the left side of the stage
                  playerBox.position.x -= boxWidth;
              }
          }

          // D Key is 68
          // Right arrow is 39
          if (key.keyCode === 68 || key.keyCode === 39) {
              // If the D key or the Right arrow is pressed, move the player to the right.
              if (playerBox.position.x != renderer.width - boxWidth) {
                  // Don't move to the right if the player is at the right side of the stage
                  playerBox.position.x += boxWidth;
              }
          }
      }
  


