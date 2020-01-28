// Prevent scrolling with keypress
$(document).bind('keydown keypress', function(e) {
  if(e.keyCode > 36 && e.keyCode < 41) e.preventDefault();
});

// Universal Components
let box = document.getElementById("dudeBox");
let setPieces = [];
let obstacles = [];
let obstacleCount = 0;
let setPieceCount = 0;
let phraseArray = '';
let globalID;
let setChanging = false;
let movingSetCount = 0;
let pixelsMoved = 0;
let changeLeft = false;
let changeRight = false;

// studio to change
let i = 0;
let a = 0;
let j = 1;
let k = '';
let m = '';
let n = 7;
let h = 0;

// text boxes
textBox = new component(150, 60, "", 30, 30,'image','img/textBox.png','');
textBoxRight = new component(160, 54, "", 30, 30,'image','img/textBoxWideRight.png','');
textBoxLeft = new component(160, 54, "", 30, 30,'image','img/textBoxWide.png','');
textBoxInstructions = new component(150, 60, "", 30, 30,'image','img/textBoxInstructions.png','');

// Talk Show
let t1Show = false;
let t2Show = false;
let t3Show = false;
let t4Show = false;
let t5Show = false;
let t6Show = false;
let t7Show = false;
let t8Show = false;
let t9Show = false;
let t10Show = false;
let t11Show = false;
let t12Show = false;
let t13Show = false;
let t16Show = false;

let t1 = false;
let t2 = false;
let t3 = false;
let t4 = false;
let t5 = false;
let t6 = false;
let t7 = false;
let t8 = false;
let t9 = false;
let t10 = false;
let t11 = false;
let t12 = false;
let t13 = false;
let t14 = false;

let restart = false;

let dark = false;
let bdMove1 = true;
let bdMove2 = false;
let sandUp = false;
let dudeFallStart = false;
let dudeFalling = false;
let dudeFallen = false;
let fall = false;

// for testing falling character direction
let dudeGotHit = false;
testBox = new component(110, 58, 0, 0, 0, 'testBox');
let horizontalFall = false;
let verticalFall = false;

// Dude
dude = new component(42, 68, '', 647, 450, 'spriteFour', 'img/dude.png','dl','',16,0,0,0,0,0,40);
dudeFallingLeft = new component(130, 70, 10, 0, 0, 'fixedSprite', 'img/dudeFallLeft.png','','',3,0);
dudeFallingRight = new component(100, 70, 10, 0, 0, 'fixedSprite', 'img/dudeFallRight.png','','',3,0);
dudeFallHorizontal = new component(112, 44, 0, 0, 0, 'fixedSprite', 'img/dudeFallHorizontal.png','','',2,0);
dudeFallVertical = new component(42, 112, 0, 0, 0, 'fixedSprite', 'img/dudeFallVertical.png','','',2,0);
walter = new component(48, 77, "", 88, 360, 'spriteFour', 'img/walter.png',true,'walter',16,0,0,0,0,0,30);
badDude = new component(42, 68, "", 335, 297, 'spriteFour', 'img/badDude.png','dl','',16,0,0,0,0,0,40);

// Canvas setup
let myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 700;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    box.appendChild(this.canvas);
		cancelAnimationFrame(globalID);
		this.frameNo = 0;
    function animate() {
        globalID = requestAnimationFrame(animate);
        updateGameArea();
    };
    globalID = requestAnimationFrame(animate);
		myGameArea.keys = (myGameArea.keys || []);
		window.addEventListener('keydown', function (e) {
      myGameArea.keys[e.keyCode] = true;
    })
    window.addEventListener('keyup', function (e) {
			myGameArea.keys[e.keyCode] = false;
    })
		document.getElementById("instructions").innerHTML = '<button type="button" class="button" onclick="myGameArea.stop();myGameArea.clear();startGame();">Restart Level</button>';
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
	stop : function() {
    cancelAnimationFrame(globalID);
		document.getElementById("instructions").innerHTML = '';
  },
	resume : function() {
    globalID = requestAnimationFrame(animate);
  }
}

// Count Frames
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}

// Component attributes
function component(width, height, fillStyle, x, y, type, source, direction, name, frames, currentFrame, touchH, touchV, speedX, speedY, negativeHeight) {
  this.width = width;
  this.height = height;
	this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.fillStyle = fillStyle;
	this.type = type;
	this.source = source;
	this.image = new Image();
	if (this.type != 'text') {
		this.image.src = source;
	}
	this.name = name;
	this.frames = frames;
	this.currentFrame = currentFrame;
  this.touchH = touchH;
  this.touchV = touchV;
  this.direction = direction;
	this.negativeHeight = negativeHeight;
  this.left = this.x + 3;
	this.right = this.x + (this.width) - 3;
	if (this.negativeHeight != null) {
		this.top = this.y + this.negativeHeight + 2;
	} else {
		this.top = this.y + 2;
	}
	this.bottom = this.y + (this.height) - 0;
	this.xCenter = (this.x + (this.width / 2));
	this.yCenter = (this.y + (this.height / 2));

	// Update context
	this.update = function() {
		ctx = myGameArea.context;

		// Set object boundaries
    if (this.type == 'spriteFour') {
      this.left = this.x + 3;
  	  this.right = this.x + (this.width) - 3;
    } else {
      this.left = this.x;
  	  this.right = this.x + (this.width);
    }

		if (this.negativeHeight != null) {
			this.top = this.y + this.negativeHeight + 2;
		} else {
			this.top = this.y + 2;
		}
	  this.bottom = this.y + (this.height) - 0;
		this.xCenter = (this.x + (this.width / 2));
		this.yCenter = (this.y + (this.height / 2));

		if (type == 'image') {
		  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		} else if (type == 'text') {
			if (this.direction == 'left') {
				this.x = textBoxLeft.x + 6;
				this.y = textBoxLeft.y + 15;
			} else if (this.direction == 'right') {
				this.x = textBoxRight.x + 18;
				this.y = textBoxRight.y + 15;
			} else if (this.direction == 'instructions') {
        this.x = textBoxInstructions.x + 6;
				this.y = textBoxInstructions.y + 19;
			} else {
				this.x = textBox.x + 6;
				this.y = textBox.y + 15;
			}

			// Alternate fonts
			if (this.width == '') {
				ctx.font = '12px Arial';
			} else {
				ctx.font = this.width;
			}

			// Alternate Colors
			if (this.height == '') {
				ctx.fillStyle = 'black';
			} else {
				ctx.fillStyle = this.height;
			}

			for (line in this.source) {
				ctx.fillText(this.source[line], this.x, this.y);
				this.y += 15;
			}
		} else if (type == 'sprite') {
			srcX = this.currentFrame * this.width;
			if ((this.speedX != 0) || (this.speedY != 0)) {
				if (everyinterval(10)){
					this.currentFrame = ++this.currentFrame % this.frames;
				}
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      this.touchH = 0;
      this.touchV = 0;
		} else if (type == 'spriteSwim') {
			srcX = this.currentFrame * this.width;
			if (myGameArea.keys[37] || myGameArea.keys[38] || myGameArea.keys[39] || myGameArea.keys[40]) {
				if (everyinterval(13)){
          if ((this.currentFrame == this.frames-1) || (this.currentFrame == (this.frames/2)-1)) {
            this.currentFrame = ++this.currentFrame -(this.frames/2);
          } else {
		        this.currentFrame = ++this.currentFrame % this.frames;
          }
				}
			} else {
				this.currentFrame = 0;
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      this.touchH = 0;
      this.touchV = 0;
		} else if (type == 'spriteLong') {
			srcX = this.currentFrame * this.width;
			if ((this.speedX != 0) || (this.speedY != 0)) {
				if (everyinterval(10)){
          if ((this.currentFrame == this.frames-1) || (this.currentFrame == (this.frames/2)-1)) {
            this.currentFrame = ++this.currentFrame -(this.frames/2);
          } else {
		        this.currentFrame = ++this.currentFrame % this.frames;
          }
				}
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      this.touchH = 0;
      this.touchV = 0;
		} else if (type == 'spritePin') {
			srcX = this.currentFrame * this.width;
			if (myGameArea.keys[37] || myGameArea.keys[38] || myGameArea.keys[39] || myGameArea.keys[40]) {
				if (everyinterval(8)){
          if ((this.currentFrame == 1) || (this.currentFrame == 3) || (this.currentFrame == 5)  || (this.currentFrame == 7)) {
            this.currentFrame = ++this.currentFrame -(this.frames/4);
          } else {
		        this.currentFrame = ++this.currentFrame % this.frames;
          }
				}
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      this.touchH = 0;
      this.touchV = 0;
		} else if (type == 'spriteFour') {
			srcX = this.currentFrame * this.width;
			if ((this.speedX != 0) || (this.speedY != 0)) {
				if (everyinterval(13)) {
          if ((this.currentFrame == 3) || (this.currentFrame == 7) || (this.currentFrame == 11)  || (this.currentFrame == 15)) {
            this.currentFrame = ++this.currentFrame -(this.frames/4);
          } else {
		        this.currentFrame = ++this.currentFrame % this.frames;
          }
				}
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
      this.touchH = 0;
      this.touchV = 0;
		} else if (type == 'fixedSprite') {
			srcX = this.currentFrame * this.width;
			if (everyinterval(this.fillStyle)) {
				this.currentFrame = ++this.currentFrame % this.frames;
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		} else if (type == 'rodentSprite') {
			srcX = this.currentFrame * this.width;
			if (this.touchH < 0) {
				this.speedX = this.touchH;
			} else {
				this.speedX = this.touchH;
			}

			if (this.touchY < 0) {
				this.speedY = this.touchV;
			} else {
				this.speedY = this.touchV;
			}


			if (everyinterval(10)){
				this.currentFrame = ++this.currentFrame % this.frames;
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
		} else if (type == 'trampolineSprite') {
			srcX = this.currentFrame * this.width;
			ctx.save();
			ctx.translate(398,165);
			ctx.scale(scale[a],scale[a]);
			if (everyinterval(this.fillStyle)){
				this.currentFrame = ++this.currentFrame % this.frames;
				if (a == 3){
					a = 0;
				} else {
					a++;
				}
			}
			ctx.drawImage(this.image, srcX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
			ctx.restore();
		} else if (this.type == 'testBox') {
			// for testing dude fall
		} else {
			ctx.fillStyle = this.fillStyle;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}

  // Component Functions

	// if character is behind a 3d object redraw that object over the character.
	this.behindObject = function (theseObstacles = obstacles){
		obstacleCount = 0;
    while (obstacleCount < theseObstacles.length) {
      if (this.borderlessCrashWith(theseObstacles[obstacleCount]) && theseObstacles[obstacleCount].negativeHeight != null && this.bottom < (obstacles[obstacleCount].y + obstacles[obstacleCount].height)) {
				theseObstacles[obstacleCount].update();
				let newObstacles = theseObstacles.slice();
				newObstacles.splice(obstacleCount,1);
        let o2 = 0;
    		while (o2 < newObstacles.length) {
    			if (theseObstacles[obstacleCount].borderlessCrashWith(newObstacles[o2]) && theseObstacles[obstacleCount].top < newObstacles[o2].top) {
    				newObstacles[o2].update();
            let newObstacles2 = newObstacles.slice();
            newObstacles2.splice(o2,1);
            let o3 = 0;
        		while (o3 < newObstacles2.length) {
        			if (newObstacles[o2].borderlessCrashWith(newObstacles2[o3]) && newObstacles[o2].top < newObstacles2[o3].top) {
        				newObstacles2[o3].update();
        				//newOldObstacle = newObstacles[o2];
        				//objectsBehindObjects(newOldObstacle, newObstacles, o2);
        			}
        			o3++
        		}
    			}
    			o2++
    		}
			}
      obstacleCount++;
    }
	}

	objectsBehindObjects = function(oldObstacle,newObstacles,oldo2) {
		if (oldo2 != null) {
			newObstacles.splice(oldo2,1);
		}

		let o2 = 0;
		while (o2 < newObstacles.length) {
			if (oldObstacle.crashWith(newObstacles[o2]) && oldObstacle.top < newObstacles[o2].top) {
				newObstacles[o2].update();
				newOldObstacle = newObstacles[o2];
				objectsBehindObjects(newOldObstacle, newObstacles, o2);
			}
			o2++
		}
	}

  this.bowl = function (bowlerBall, startFrame, interval, speed) {
    // Bowler moving
    if (myGameArea.frameNo == startFrame || everyinterval(interval) && !setChanging) {
      this.going = 'up';
    }

    if (this.going == 'up' && !setChanging) {
      if (this.x < 442) {
        this.speedX = 2.5;
      } else {
        this.going = 'down';
      }
    }

    if (this.going == 'down') {
      if (this.x > 352) {
        this.speedX = -1;
      } else {
        this.speedX = 0;
      }
    }

		if (setChanging) {
			this.speedX = 0;
		}

    this.pieceMoveFourWays();
    this.update();
    this.behindObject();

    // Ball
    if (bowlerBall.x >= 440) {
      bowlerBall.speedX = speed;
    } else {
      if (this.speedX == 0) {
        bowlerBall.x = this.x + 4;
    		bowlerBall.y = this.y + 42;
      } else {
        bowlerBall.speedX = 2.2;
      }
    }

    if (bowlerBall.x >= 1170) {
      bowlerBall.speedX = 0;
      bowlerBall.x = this.x + 4;
  		bowlerBall.y = this.y + 42;
    }
    bowlerBall.pieceMove();
		bowlerBall.update();
  }

  // Charge prep
  this.chargePrep = function(otherobj) {
    dudeLockY = (otherobj.y + (otherobj.height / 2));

    if (otherobj.x < this.x){
      this.image.src = "img/"+this.name+"Left.png";
    } else if (otherobj.x > this.x){
      this.image.src = "img/"+this.name+"Right.png";
    }

    if (otherobj.xCenter > this.xCenter){
      dudeLockX = (otherobj.x + (otherobj.width / 2) + 80);
    } else {
      dudeLockX = (otherobj.x + (otherobj.width / 2) - 80);
    }
  }

  // Charge check
  this.chargeCheck = function(){

    // Movement
    if (dudeLockY > (this.yCenter + 3)) {
      bl.speedY = 4.5;
    } else if (dudeLockY < (this.yCenter - 3)) {
      bl.speedY = -4.5;
    }
    if (dudeLockX > (this.xCenter + 3)) {
      bl.speedX = 4.5;
    } else if (dudeLockX < (this.xCenter - 3)) {
      bl.speedX = -4.5;
    }

    smoke = false;
    // Checking
    if ((this.speedY > 0 && this.yCenter >= dudeLockY) || (this.speedY < 0 && this.yCenter <= dudeLockY)) {
      this.speedY = 0;
      targetY = true;
    }
    if ((this.speedX > 0 && this.xCenter >= dudeLockX) || (this.speedX < 0 && this.xCenter <= dudeLockX)) {
      this.speedX = 0;
      targetX = true;
    }
    if ((targetX) && (targetY)){
      let talk = Math.floor((Math.random() * 2) + 1);
      if (talk == 1) {
        t6Show = true;
        setTimeout('t6Show=false;', 1500);
      };
      setTimeout("blCharging=false;targetOn=false",2000);
      targetX = false;
      targetY = false;

      return [blCharging,t6Show];
    }
  }

  // Come near
	this.comeNearTo = function(otherobj, distance) {
		let otherleft = otherobj.x - distance;
		let otherright = otherobj.x + (otherobj.width) + distance;
		let othertop = otherobj.y - distance;
		let otherbottom = otherobj.y + (otherobj.height) + distance;
		let comeNear = true;
		if ((this.bottom < othertop) ||
		(this.top > otherbottom) ||
		(this.right < otherleft) ||
		(this.left > otherright)) {
			comeNear = false;
		}
		return comeNear;
	}

  // Crash
	this.crashWith = function(otherobj) {
		crash = true;
		if (otherobj.type == 'rodentSprite') {
			otherobj.left += 30;
			otherobj.right -= 30;
			otherobj.top += 20;
			otherobj.bottom -= 20;
		}
		if ((this.bottom < otherobj.top) ||
		(this.top > otherobj.bottom) ||
		(this.right < otherobj.left) ||
		(this.left > otherobj.right)) {
		  crash = false;
		}
		return crash;
	}

  this.borderlessCrashWith = function(otherobj) {
    let topBorderless = this.y;
		let otherTopBorderless = otherobj.y;
    let crash = true;
    if ((this.bottom < otherTopBorderless) ||
    (topBorderless > otherobj.bottom) ||
    (this.right < otherobj.left) ||
    (this.left > otherobj.right)) {
      crash = false;
    }
    return crash;
  }

  this.crashWindow = function() {
    let crashWithGlass = true;
    if ((this.bottom < glass.top) ||
    (this.top > glass.bottom) ||
    (this.right < glass.left) ||
    (this.left > glass.right)) {
     crashWithGlass = false;
    }
    return crashWithGlass;
  }

  // darken & undarken
  this.darken = function(interval, rate) {
    if (everyinterval(interval)) {
      this.darkGrade = this.darkGrade + rate;
      this.fillStyle = 'rgba(0, 0, 0,' + this.darkGrade + ')';
    }
  	if (this.darkGrade >= 1) {
  		this.dark = true;
    }
	}

  this.undarken = function(interval, rate) {
    if (everyinterval(interval)) {
      this.darkGrade = this.darkGrade - rate;
      this.fillStyle = 'rgba(0, 0, 0,' + this.darkGrade + ')';
    }
  	if (this.darkGrade <= 0.01) {
  		this.dark = false;
    }
	}

	this.fallDown = function (baddie,restart,horizontalImage,verticalImage) {
		if (this == dude) {
			horizontalImage = dudeFallHorizontal;
			verticalImage = dudeFallVertical;
		}
		let baddieXCenter = (baddie.x + (baddie.width / 2));

		if (baddieXCenter < this.xCenter) {

			// Fall right test
			testBox.width = 120;
			testBox.height = 42;
			testBox.x = this.x + 10;
			testBox.y = this.y + 25;
			testBox.update();

			// Check for obstacles
			obstacleCount = 0;
			crash = false;
	    while (obstacleCount < obstacles.length && !crash) {
	      testBox.crashWith(obstacles[obstacleCount]);
	      obstacleCount++;
	    }

			// If no obstacles fall right
			if (!crash) {
				horizontalImage.x = this.x + 10;
				horizontalImage.y = this.y + 25;
				horizontalImage.currentFrame = 1;
				horizontalImage.update();
				horizontalImage.fall = true;

			// Otherwise fall vertical
			} else {
				testBox.width = 42;
				testBox.height = 120;
				testBox.x = this.x + 1;
				testBox.y = this.y + 45;
				testBox.update();

				// Check for obstacles falling downward
				obstacleCount = 0;
				crash = false;
		    while (obstacleCount < obstacles.length && !crash) {
		      testBox.crashWith(obstacles[obstacleCount]);
		      obstacleCount++;
		    }

				// If no obstacles and baddie above dude, then fall down
				if (!crash && baddie.y < this.y + 20) {
					verticalImage.x = this.x -2;
					verticalImage.y = this.y + 40;
					verticalImage.currentFrame = 1;
					verticalImage.update();
					verticalImage.fall = true;

				// Otherwise fall up
				} else {
					verticalImage.x = this.x -2;
					verticalImage.y = this.y - 10;
					verticalImage.currentFrame = 0;
					verticalImage.update();
					verticalImage.fall = true;
				}
			}

		// Fall left test
		} else if (baddieXCenter >= this.xCenter) {
			testBox.width = 120;
			testBox.height = 42;
			testBox.x = this.x - 70;
			testBox.y = this.y + 25;
			testBox.update();

			// Check for obstacles
			obstacleCount = 0;
			crash = false;
	    while (obstacleCount < obstacles.length && !crash) {
	      testBox.crashWith(obstacles[obstacleCount]);
	      obstacleCount++;
	    }

			// If no obstacles fall left
			if (!crash) {
				horizontalImage.x = this.x - 70;
				horizontalImage.y = this.y + 25;
				horizontalImage.currentFrame = 0;
				horizontalImage.update();
				horizontalImage.fall = true;

			// Otherwise fall vertical
			} else {
				testBox.width = 42;
				testBox.height = 120;
				testBox.x = this.x + 1;
				testBox.y = this.y + 45;
				testBox.update();

				// Check for obstacles falling downward
				obstacleCount = 0;
				crash = false;
		    while (obstacleCount < obstacles.length && !crash) {
		      testBox.crashWith(obstacles[obstacleCount]);
		      obstacleCount++;
		    }

				// If no obstacles and baddie above then fall down
				if (!crash && baddie.y < this.y + 20) {
					verticalImage.x = this.x -2;
					verticalImage.y = this.y + 40;
					verticalImage.currentFrame = 1;
					verticalImage.update();
					verticalImage.fall = true;

				// Otherwise fall up
				} else {
					verticalImage.x = this.x -2;
					verticalImage.y = this.y - 10;
					verticalImage.currentFrame = 0;
					verticalImage.update();
					verticalImage.fall = true;
				}
			}
		}

		if (this == dude) {
			dudeGotHit = true;
			if (restart == 'restart') {
				myGameArea.stop();
				setTimeout("myGameArea.clear();restartGame();",2000);
			} else if (restart == 'dontRestart') {
				//horizontalImage.update();
				//verticalImage.update();
			} else {
				myGameArea.stop();
				setTimeout("myGameArea.clear();startGame();",2000);
			}
		}
	}

	// follow
	this.follow = function (otherobj,speed,xBuff,yBuff) {
		// X
		if (this.xCenter < otherobj.xCenter - 1 - xBuff) {
			this.speedX = speed;
		} else if (this.xCenter > otherobj.xCenter + 1 + xBuff) {
			this.speedX = -speed;
		} else {
			this.speedX = 0;
		}

		// Y
		if (this.yCenter < otherobj.yCenter - 1 - yBuff) {
			this.speedY = speed;
		} else if (this.yCenter > otherobj.yCenter + 1 + yBuff) {
			this.speedY = -speed;
		} else {
			this.speedY = 0;
		}
	}

  // Into hole
	this.inHole = function (otherobj,x,y) {

		if (otherobj.yCenter > this.yCenter){
			this.y += 4;
		} else {
			this.y += -4;
		}
		if (otherobj.xCenter > this.xCenter){
			this.x += 4;
		} else {
			this.x += -4;
		}
		if (this.width > 0) {
			this.width += -x;
		}
		if (this.height > 0) {
			this.height += -y;
		}
		this.pieceMove();
	}

	this.inOcean = function (speed, originalHeight) {
		if (this.right > 615 && this.speedX == speed && this.height >= (originalHeight - 20) && this.y < 500) {
			this.height -= 0.3;
		} else if (this.right > 615 && this.speedX == -speed && this.height <= originalHeight) {
			this.height += 0.3;
		} else if (this.right < 615 && this.height != originalHeight) {
			this.height = originalHeight;
		}

		// Make sure dude doesn't fall below border
		if (dude.y > 530 && dude.x > 580) {
			dude.y = 530;
		}
	}

  // Meet with
	this.meetWith = function(otherobj, buffer) {
		this.leftMeetBuffer = this.x - buffer;
		this.rightMeetBuffer = this.x + (this.width) + buffer;
		this.topMeetBuffer = this.y - buffer;
		this.bottomMeetBuffer = this.y + (this.height) + buffer;
		let meet = true;
		if ((this.bottomMeetBuffer < otherobj.top) ||
		(this.topMeetBuffer > otherobj.bottom) ||
		(this.rightMeetBuffer < otherobj.left) ||
		(this.leftMeetBuffer > otherobj.right)) {
		  meet = false;
		}
		return meet;
	}

  // Morphing objects
  this.morphInto = function(otherobj) {
    this.morphPercent += .01;
		let morphChance = Math.random();
      if (morphChance > this.morphPercent) {
        this.update();
      } else {
        otherobj.update();
      }
    if (this.morphPercent >= 1) {
      this.morphComplete = true;
    }
  }

  // Obstacle check
  this.obstacleCheck = function() {
    obstacleCount = 0;
    while (obstacleCount < obstacles.length) {
      this.touch(obstacles[obstacleCount]);
      obstacleCount++;
    }
    if ((this.touchH == 1) && (this.speedX < 0)) {
      this.x -= this.speedX;
    }
    if ((this.touchH == 2) && (this.speedX > 0)) {
      this.x -= this.speedX;
    }
    if ((this.touchV == 1) && (this.speedY < 0)) {
      this.y -= this.speedY;
    }
    if ((this.touchV == 2) && (this.speedY >0)) {
      this.y -= this.speedY;
    }
	}

	// Obstacle check
  this.dudeSwimObstacleCheck = function() {
    obstacleCount = 0;
    while (obstacleCount < obstacles.length) {
      this.blTouch(obstacles[obstacleCount]);
      obstacleCount++;
    }
		if (this.touchH == 1 && this.speedX < 0) {
			this.speedX = 0;
    }
    if ((this.touchH == 2) && (this.speedX > 0)) {
      this.speedX = 0;
    }
    if ((this.touchV == 1) && (this.speedY < 0)) {
      this.speedY = 0;
    }
    if ((this.touchV == 2) && (this.speedY >0)) {
      this.speedY = 0;
    }
	}

  // Jackie Obstacle check
  this.jackieObstacleCheck = function() {
    obstacleCount = 0;
    while (obstacleCount < jackieObstacles.length) {
      this.touch(jackieObstacles[obstacleCount]);
      obstacleCount++;
    }
    if (this.touchH == 1){
      this.x += 1;
    }
    if (this.touchH == 2){
      this.x += -1;
    }
    if (this.touchV == 1){
      this.y += 1;
    }
    if (this.touchV == 2){
      this.y += -1;
    }
  }

  // Image updates
  this.pieceMove = function() {
    this.x += this.speedX;
		this.y += this.speedY;
    if ((this.type != 'rodentSprite') && (this.type != 'image') && (this.type != 'fixedSprite')) {
    	if (this.speedX < 0){
    		this.image.src = "img/"+this.name+"Left.png";
    	} else if (this.speedX > 0){
    		this.image.src = "img/"+this.name+"Right.png";
    	}
    }
  }

  this.pieceMoveSprite = function() {
    this.x += this.speedX;
		this.y += this.speedY;
    if ((this.type != 'rodentSprite') && (this.type != 'image')) {
    	if ((this.speedX < 0) && (this.direction != 'l')){
    		this.currentFrame = 0;
        this.direction = 'l';
    	} else if ((this.speedX > 0) && (this.direction != 'r')){
    		this.currentFrame = this.frames/2;
        this.direction = 'r';
    	}
    }
  }

	this.pieceMovePin = function() {
    this.x += this.speedX;
		this.y += this.speedY;
  	if (myGameArea.keys[37] && this.direction != 'l') {
  		this.currentFrame = 0;
      this.direction = 'l';
  	} else if (myGameArea.keys[39] && this.direction != 'r') {
  		this.currentFrame = 2;
      this.direction = 'r';
  	} else if (myGameArea.keys[38] || myGameArea.keys[40]) {
			if (this.direction == 'sl') {
				this.currentFrame = 0;
	      this.direction = 'l';
			} else if (this.direction == 'sr') {
				this.currentFrame = 2;
	      this.direction = 'r';
			}
		} else if (!myGameArea.keys[37] && !myGameArea.keys[38] && !myGameArea.keys[39] && !myGameArea.keys[40]) {
			if (this.direction == 'r') {
				this.currentFrame = 6;
				this.direction = 'sr';
			} else if (this.direction == 'l') {
				this.currentFrame = 4;
				this.direction = 'sl';
			}
		}
  }

  this.pieceMoveSwim = function() {
	  this.x += this.speedX;
	  this.y += this.speedY;
		if ((this.speedY < 0) && (this.direction != 'u')) {
			this.currentFrame = 0;
			this.direction = 'u';
		} else if ((this.speedY > 0) && (this.direction != 'd')) {
			this.currentFrame = 4;
			this.direction = 'd';
		}
	}

  this.pieceMoveFourWays = function() {
	  this.x += this.speedX;
	  this.y += this.speedY;

		// Going up
	  if (this.speedY < 0) {

			// Up & left
      if (this.speedX < 0 && this.direction != 'ul') {
				this.direction = 'ul';
    		this.currentFrame = 8;

			// Up & right
    	} else if (this.speedX > 0 && this.direction != 'ur') {
				this.direction = 'ur';
    		this.currentFrame = 12;

			// Straight up from down left
    	} else if (this.direction == 'dl') {
				this.direction = 'ul';
    		this.currentFrame = 8;

			// Straight up from down right
			} else if (this.direction == 'dr') {
				this.direction = 'ur';
    		this.currentFrame = 12;
			}

	// Going down
	} else if (this.speedY > 0) {

		// Down & left
    if (this.speedX < 0 && this.direction != 'dl') {
			this.direction = 'dl';
  		this.currentFrame = 0;

		// Down & right
  	} else if (this.speedX > 0 && this.direction != 'dr') {
			this.direction = 'dr';
  		this.currentFrame = 4;

		// Straight down from up
		} else if (this.speedX == 0) {

			// From up & right
			if (this.direction == 'ur') {
				this.direction = 'dr';
    		this.currentFrame = 4;

			// From up & left
			} else if (this.direction == 'ul') {
				this.direction = 'dl';
    		this.currentFrame = 0;
			}
		}

	// Left & right with no speedY
	} else if (this.speedY == 0) {

			// Going left
			if (this.speedX < 0) {

				// From down & right
				if (this.direction == 'dr') {
					this.direction = 'dl';
	    		this.currentFrame = 0;

				// From up & right
				} else if (this.direction == 'ur') {
					this.direction = 'ul';
	    		this.currentFrame = 8;
				}

			// Going right
			} else if (this.speedX > 0) {

				// From down & left
				if (this.direction == 'dl') {
					this.direction = 'dr';
	    		this.currentFrame = 4;

				// From up & right
				} else if (this.direction == 'ul') {
					this.direction = 'ur';
	    		this.currentFrame = 12;
				}
			}
		}
	}

	// Push
  this.shove = function(otherobj) {
    this.touch(otherobj);

    if ((this.crashWith(otherobj) && this.touchH == 1) && (this.speedX < 0)) {
      otherobj.x += this.speedX;
    }
    if ((this.crashWith(otherobj) && this.touchH == 2) && (this.speedX > 0)) {
      otherobj.x += this.speedX;
    }
    if ((this.crashWith(otherobj) && this.touchV == 1) && (this.speedY < 0)) {
      otherobj.y += this.speedY;
    }
    if ((this.crashWith(otherobj) && this.touchV == 2) && (this.speedY >0)) {
      otherobj.y += this.speedY;
    }
	}

  // BL Roam
  this.roam = function() {
    if (roaming) {
      if ((this.x > spotX - 2) && (this.x < spotX + 2)) {
        this.speedX = 0;
      } else if (this.x < spotX - 2) {
        this.speedX = 1.5;
      } else if (this.x > spotX + 2) {
        this.speedX = -1.5;
      }

      if ((this.y > spotY - 2) && (this.y < spotY + 2)) {
        this.speedY = 0;
      } else if (this.y < spotY - 2) {
        this.speedY = 1.5;
      } else if (this.y > spotY + 2) {
        this.speedY = -1.5;
      }

      if ((this.speedX == 0) && (this.speedY == 0)) {
        roaming = false;
      }
    } else if (!roaming) {
      spotX = Math.floor(Math.random() * 300 + 150);
      spotY = Math.floor(Math.random() * 300 + 150);
      roaming = true;
    }
    return roaming;
  }

	// Seen by thugs
	this.seenBy1 = function(otherobj, distance) {
    let otherLeftSight = otherobj.x - (distance / 2);
		let otherRightSight = otherobj.x + (otherobj.width) + (distance /2);
		let otherTopSight = otherobj.y - distance;
		let otherBottomSight = otherobj.y + (otherobj.height) + distance;
		if(t1down){
			if ((this.top < otherBottomSight) && (this.top > otherobj.bottom) && ((this.left < otherRightSight) && (this.right > otherLeftSight))) {
			  seenBy1 = true;
			}
		} else {
			if ((this.bottom > otherTopSight) && (this.bottom < otherobj.top) && ((this.left < otherRightSight) && (this.right > otherLeftSight)) && this.y > 100) {
			  seenBy1 = true;
			}
		}
		return seenBy1;
	}

	this.seenBy2 = function(otherobj, distance) {
		let otherLeftSight = otherobj.x - distance;
		let otherRightSight = otherobj.x + (otherobj.width) + distance;
		if(t2down){
			if ((this.left < otherRightSight) && (this.right > otherobj.left) && (this.top < otherobj.bottom) && (this.bottom > otherobj.top)) {
			  seenBy2 = true;
			}
		} else {
			if ((this.right > otherLeftSight) && (this.left < otherobj.right) && (this.top < otherobj.bottom) && (this.bottom > otherobj.top)) {
			  seenBy2 = true;
			}
		}
		return seenBy2;
	}

	this.talk = function(talkName,xOffset,yOffset,wide) {
    if (talkName.width == '') {
      talkName.width = '12px Arial'
    }
		if (Array.isArray(talkName.source)) {
		} else {
			getLines(talkName,talkName.source,140,talkName.width);
		}
		if (wide == 'l') {
			textBoxLeft.x = this.x - xOffset;
			textBoxLeft.y = this.y + yOffset;
			textBoxLeft.update();
			talkName.direction = 'left';
		} else if (wide == 'r') {
			textBoxRight.x = this.x + xOffset;
			textBoxRight.y = this.y + yOffset;
			textBoxRight.update();
			talkName.direction = 'right';
		} else if (wide == 'instructions') {
			textBoxInstructions.x = 40;
			textBoxInstructions.y = 40;
			textBoxInstructions.update();
			talkName.direction = 'instructions';
		} else {
			textBox.x = this.x - xOffset;
			textBox.y = this.y - yOffset;
			textBox.update();
			talkName.direction = 'normal';
		}
		talkName.update();
  }

  // Target prep
  this.targetPrep = function(start,end) {
    this.x = start.x;
    this.y = start.y;
    targetLockY = (end.y + (end.height / 2));
    targetLockX = (end.x + (end.width / 2));
  }

  // Target move
  this.targetMove = function() {

    // Movement
    if (this.yCenter > (targetLockY + 3)) {
      this.speedY = -4;
    } else if (this.yCenter < (targetLockY - 3)) {
      this.speedY = 4;
    } else {
      this.speedY = 0;
    }

    if (this.xCenter > (targetLockX + 3)) {
      this.speedX = -4;
    } else if (this.xCenter < (targetLockX - 3)) {
      this.speedX = 4;
    } else {
      this.speedX = 0;
    }
  }

	// Touch
	this.touch = function(otherobj) {
    let otherLeftBuffer = otherobj.left + 2;
    let otherRightBuffer = otherobj.right - 2;
    let otherTopBuffer = otherobj.top + 2;
    let otherBottomBuffer = otherobj.bottom -2;

		// This left
		if ((this.left <= otherobj.right && this.left >= otherRightBuffer) && ((this.bottom >= otherTopBuffer) && (this.top <= otherBottomBuffer))) {
		  this.touchH = 1;
		}

		// This right
		if ((this.right >= otherobj.left && this.right <= otherLeftBuffer) && ((this.bottom >= otherTopBuffer) && (this.top <= otherBottomBuffer))) {
		  this.touchH = 2;
		}

		// This top
		if ((this.top <= otherobj.bottom && this.top >= otherBottomBuffer) && ((this.right >= otherLeftBuffer) && (this.left <= otherRightBuffer))) {
		  this.touchV = 1;
		}

		// This bottom
		if ((this.bottom >= otherobj.top && this.bottom <= otherTopBuffer) && ((this.right >= otherLeftBuffer) && (this.left <= otherRightBuffer))) {
			this.touchV = 2;
		}
		return [this.touchV, this.touchH];
	}

  this.blTouch = function(otherobj) {
		this.topBuffer = this.y;

		let otherLeftBuffer = otherobj.left + 4;
    let otherRightBuffer = otherobj.right - 4;
    let otherTopBuffer = otherobj.top + 4;
    let otherBottomBuffer = otherobj.bottom -4;

		// Right side
		if ((this.left <= otherobj.right && this.left >= otherRightBuffer) && ((this.bottom >= otherTopBuffer) && (this.topBuffer <= otherBottomBuffer))) {
		 this.touchH = 1;
		}

		// Left side
		if ((this.right >= otherobj.left && this.right <= otherLeftBuffer) && ((this.bottom >= otherTopBuffer) && (this.topBuffer <= otherBottomBuffer))) {
		 this.touchH = 2;
		}

		// Bottom
		if ((this.topBuffer <= otherobj.bottom && this.topBuffer >= otherBottomBuffer) && ((this.right >= otherLeftBuffer) && (this.left <= otherRightBuffer))) {
		 this.touchV = 1;
		}

		// Top
		if ((this.bottom >= otherobj.top && this.bottom <= otherTopBuffer) && ((this.right >= otherLeftBuffer) && (this.left <= otherRightBuffer))) {
		 this.touchV = 2;
		}
		return [this.touchV, this.touchH];
	}

	// Thug routes
	this.thugRouteY = function(start,stop) {
		if (t1down) {
			this.speedY = 1;
			if (this.y == stop) {
				t1down = false;
			}
		} else if (!t1down) {
			this.speedY = -1;
			if (this.y == start) {
				t1down = true;
			}
		}
	}
	this.thugRouteX = function(start,stop) {
		if (t2down) {
			this.speedX = 1;
			if (this.x == stop) {
				t2down = false;
			}
		} else if (!t2down) {
			this.speedX = -1;
			if (this.x == start) {
				t2down = true;
			}
		}
	}
}

// Other Functions
function dudeSwitch() {
  if (badDudePercent > Math.random()) {
    dude.image.src = 'img/badDude.png';
  } else {
    dude.image.src = 'img/dude.png';
  }
}

// Flicker
function flickering(interval){
	if (everyinterval(interval)){
		k = ((Math.random() * .5) + .3);
		flicker.fillStyle = "rgba(0, 0, 0, " + k + ")";
	}
}

/*
 * Divide an entire phrase in an array of phrases, all with the max pixel length given.
 * The words are initially separated by the space char.
 * @param phrase
 * @param length
 * @return
 */
function getLines(talkName,phrase,maxPxLength,textStyle) {
	let wa=phrase.split(" "),
		phraseArray=[],
		lastPhrase=wa[0],
		measure=0,
		splitChar=" ";
	if (wa.length <= 1) {
		return wa
	}
	ctx.font = textStyle;
	for (i=1;i<wa.length;i++) {
		let w=wa[i];
		measure=ctx.measureText(lastPhrase+splitChar+w).width;
		if (measure<maxPxLength) {
			lastPhrase+=(splitChar+w);
		} else {
			phraseArray.push(lastPhrase);
			lastPhrase=w;
		}
		if (i===wa.length-1) {
			phraseArray.push(lastPhrase);
			break;
		}
	}
	talkName.source = phraseArray;
	return talkName.source;
}

// Dude movement mechanics
function loadDudeMechanics() {

	dude.speedX = 0;
	dude.speedY = 0;

	// Left
	if (myGameArea.keys[37]) {
		dude.speedX = -2;
	}

	// Right
	if (myGameArea.keys[39]) {
		dude.speedX = 2;
	}

	// Bottom
	if (myGameArea.keys[38]) {
		dude.speedY = -2;
	}

	// Top
	if (myGameArea.keys[40]) {
		dude.speedY = 2;
	}
	dude.obstacleCheck();
	}


// Swimming
function loadDudeSwimMechanics(character,speed,acceleration) {

	// Left
	if (myGameArea.keys[37]) {
		if(character.speedX > -speed) {
			character.speedX += -acceleration;
		}
	}

	// Right
	if (myGameArea.keys[39]) {
			if(character.speedX < speed) {
				character.speedX += acceleration;
			}
	}

	// Bottom
	if (myGameArea.keys[38]) {
	 	if (character.speedY > -speed) {
			character.speedY += -acceleration;
		}
	}

	// Top
	if (myGameArea.keys[40]) {
		if (character.speedY < speed) {
			character.speedY += acceleration;
		}
	}
	character.dudeSwimObstacleCheck();
}

// Next levels
function loadLevel(levelName){
  myGameArea.stop();
	myGameArea.clear();
	$('canvas').remove();
  $.ajax({
  url: levelName,
  crossDomain:true,
  dataType: "script"
});
}

// Load set Pieces
function loadSetPieces() {
  myGameArea.clear();
	myGameArea.frameNo += 1;
  setPieceCount = 0;
  while (setPieceCount < setPieces.length) {
		setPieces[setPieceCount].update();
		setPieceCount++;
  }
}

// for moving to new set
function setChange(direction, speed) {

  // Moving left
  if (direction == 'left' && pixelsMoved < 700) {
    for (movingSetCount=0; movingSetCount<movingSet.length; movingSetCount++) {
      movingSet[movingSetCount].x += speed;
    }
  }

  // Moving right
  if (direction == 'right') {
    for (movingSetCount=0; movingSetCount<movingSet.length; movingSetCount++) {
      movingSet[movingSetCount].x -= speed;
    }
  }

  // Moving up
  if (direction == 'up' && pixelsMoved < 600) {
    for (movingSetCount=0; movingSetCount<movingSet.length; movingSetCount++) {
      movingSet[movingSetCount].y += speed;
    }
  }

  // Moving down
  if (direction == 'down' && pixelsMoved < 600) {
    for (movingSetCount=0; movingSetCount<movingSet.length; movingSetCount++) {
      movingSet[movingSetCount].y -= speed;
    }
  }

  pixelsMoved += speed;
}
