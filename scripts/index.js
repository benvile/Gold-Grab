window.onload = function() {

        //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
        //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
        //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

        let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
		let logo;
		let gold;
		
        function preload () {

            game.load.image('logo', 'phaser.png');
			game.load.image('gold', 'Gold-Ingot.png');

        }

        function create () {			
			logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
			logo.scale.setTo(0.5,0.5);
			
			game.physics.enable(logo, Phaser.Physics.ARCADE);
			logo.enableBody = true;
			logo.body.collideWorldBounds = true;
			
			gold = game.add.sprite(750, 50, 'gold');
			gold.anchor.setTo(0.5, 0.5);
			gold.scale.setTo(0.2,0.2);

        }
		
		function update () {
			
			if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			{
				logo.x -= 8;
			}
			else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
			{
				logo.x += 8;
			}

			if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
			{
				logo.y -= 8;
			}
			else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
			{
				logo.y += 8;
			}
			
		}
		
    };