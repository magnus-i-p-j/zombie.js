var Client = IgeClass.extend({
	classId: 'Client',
	init: function () {

		// Load our textures
		var self = this,
			gameTexture = [];

		this.obj = [];

		ige.input.debug(true);

		// Load the fairy texture and store it in the gameTexture array
		gameTexture[0] = new IgeTexture('../../libs/ige_prototype/examples/assets/textures/sprites/fairy.png');
    //gameTexture[2] = new IgeCellSheet('../../libs/ige_prototype/examples/assets/textures/tiles/grassSheet.png', 4, 1);
    gameTexture[1] = new IgeCellSheet('../../libs/ige_prototype/examples/assets/textures/tiles/tilea5b.png', 8, 16);

		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			// Create the HTML canvas
			ige.createFrontBuffer(true);

			// Start the engine
			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Create the scene
					self.mainScene = new IgeScene2d()
						.id('mainScene')
            .translateTo(0, 0, 0)
            .drawBounds(false);

					// Create the main viewport and set the scene
					// it will "look" at as the new scene1 we just
					// created above
					self.vp1 = new IgeViewport()
						.id('vp1')
						.autoSize(true)
						.scene(self.mainScene)
						.drawBounds(true)
						.mount(ige);

          // Create the texture maps
          self.textureMap = new IgeTextureMap()
              .depth(0)
              .tileWidth(80)
              .tileHeight(80)
            //.drawGrid(3)
              .drawMouse(true)
              .translateTo(0, 0, 0)
              .drawBounds(false)
              .autoSection(10)
              .drawSectionBounds(true)
              .mount(self.mainScene);

          self.textureMap.addTexture(gameTexture[0]);
          self.textureMap.addTexture(gameTexture[1]);

          // Paint the 2d texture map
          // Paint some pointless fairy tiles
          // paintTile takes the arguments:
          // +---- paintTile(x, y, textureIndex, textureCell)
          self.textureMap.paintTile(0, 0, 0, 1);
          self.textureMap.paintTile(1, 0, 0, 1);
          self.textureMap.paintTile(2, 0, 0, 1);

          self.textureMap.paintTile(0, 1, 1, 1);
          self.textureMap.paintTile(1, 1, 1, 1);
          self.textureMap.paintTile(2, 1, 1, 1);
          self.textureMap.paintTile(0, 2, 1, 2);
          self.textureMap.paintTile(1, 2, 1, 2);
          self.textureMap.paintTile(2, 2, 1, 2);
          self.textureMap.paintTile(0, 3, 1, 3);
          self.textureMap.paintTile(1, 3, 1, 3);
          self.textureMap.paintTile(2, 3, 1, 3);
          self.textureMap.paintTile(2, 3, 0, 1);

          self.vp1.addComponent(IgeMousePanComponent).mousePan.enabled(true);

				}
			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }