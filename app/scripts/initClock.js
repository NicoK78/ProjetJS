var clock = function () {
	var hour;
	var min;
	var halfDay;

	this.start = function(clockChoice) {
		this.hour = Math.floor((Math.random() * 24));
		this.min = Math.floor((Math.random() * 60) + 1);

		for(var i = 0, i < 4, i++) {
			if(this.min%5 != 0)
				this.min = this.min - 1;
		}

		if(this.hour < 12)
			this.halfDay = 'Matin';
		else
			this.halfDay = 'Après-midi';


		var stage = new Kinetic.Stage({
			container: 'canvas',
			width: 500,
			height: 500
		});
		
		var layer = new Kinetic.Layer();


		var clock = new Image();
		clock.src = 'images/clock'+clockChoice+'.png';

		clock.onload = function(){
			var background = new Kinetic.Image({
				x: 0,
	            y: 0,
	            image: clock,
	            draggable: false
			});

			layer.add(background);
	        layer.draw();
		}


		var minImg = new Image();
		minImg.src = 'images/firstHand.png';

		var minStickAngle = this.min * 6;
		minuteHand.onload = function() {
			var minStick = new Kinetic.Image({
				x: stage.getWidth()/2,
				y: stage.getHeight()/2 - 5,
				image: minImg,
				draggable: false
			});
			minStick.setScale({y:-1});
			minStick.rotate(minStickAngle);
			layer.add(minStick);
			layer.draw();
		}


		var hourImg = new Image();
		hourImg.src = 'images/secondHand.png';

		var hourStickAngle = this.hour * 30;
		hourHand.onload = function() {
			var hourStick = new Kinetic.Image({
				x: stage.getWidth() / 2,
	            y: stage.getHeight() / 2 - 5,
	            image: hourImg,
	            draggable: false
			});
			hourStick.setScale({y:-1});
			hourStick.rotate(hourStickAngle);
			layer.add(hourStick);
			layer.draw();
		}


		stage.add(layer);
	};
};
