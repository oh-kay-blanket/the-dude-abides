// let setup
let noMilk = false;
let falling = false;
let inPool = false;

// Components
function startGame() {

	// Set
	blPoolBackground = new component(700, 600, '', 0, 0, 'image', 'img/blPool.jpg','');
	leftBorder = new component(1, 600, "", -1, 0, '', '','');
	rightBorder = new component(18, 600, "", 682, 0, 'image','img/blPoolSide.png');
	topBorder = new component(700, 45, "", 0, 0, 'image', 'img/blPoolTop.png','');
	bottomBorder = new component(700, 1, "", 0, 600, '', '','');
	poolRightBorder = new component(350, 391, "black", 0, 109, '', '','');
	fallBorder = new component(1, 270, "red", 351, 180, '', '','');
	poolBar = new component(160, 83, "", 420, 30, 'image', 'img/poolBar.png','');
	brokenGlass = new component(8, 150, "", 691, 300,'image','img/blPoolWindow.png','');
	bushes1 = new component(70, 500, "", 615, -5, 'image','img/bushesVert.png','','','','','','','','',7);
	bushes2 = new component(400, 81, "", 5, 517, 'image','img/bushesHorizShort.png','','',0,0,0,0,0,0,8);
	dark1 = new component(700, 600, "rgba(0, 0, 0, 0)", 0, 0, '','');
  dark1.dark = false;
  dark1.darkGrade = 0;

	// Talk
	talk1 = new component(`12px cursive`, ``, ``, ``, ``,`text`,`Take any rug you like and fix yourself a drink.`);
	talk2 = new component(``, ``, ``, ``, ``,`text`,`No Kahlúa...`);
	talk3 = new component(``, ``, ``, ``, ``,`text`,`Fuck. `);

	// Characters
	dude.speedX = 0;
	dude.speedY = 0;
	fakeDude = new component(45, 65, 10, 615, 507, 'image', 'img/dudeTripLeft.png',true,'dude',8,0,0,0);
	bunnie = new component(43, 94, 70, 385, 150, 'fixedSprite', 'img/bunnieSprite.png',true,'bunnie', 2, 0,'','','','',7);
	blBody = new component(113, 56, "", 480, 395, 'image', 'img/blBody.png',true,'','','','','','','',7);
	blHead = new component(50, 60, "", 150, 400, 'image', 'img/blHead.png',true);

  setPieces = [fakeDude, blPoolBackground, leftBorder, rightBorder, topBorder, bottomBorder, poolBar, brokenGlass, bushes1, bushes2, bunnie, blBody];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, poolBar, bushes1, bushes2, poolRightBorder, bunnie, blBody];
  o = 0;
	t1Show = false;
	t2Show = false;
	t3Show = false;
	noMilk = false;
	falling = false;
	inPool = false;
	i = 0.1;

	myGameArea.start();
	dude.update();
  dark1.update();
}

// Dude fall
function dudeFall() {
	dudeFallingLeft.x -= 6;
	dudeFallingLeft.update();
	if (dudeFallingLeft.currentFrame == 2) {
		falling = false;
		inPool = true;
	}
}

// Running game

function updateGameArea() {

	// prevent dude movement while falling
	dude.speedX = 0;
	dude.speedY = 0;

	//Dude mechanics
	if (!falling && !inPool){
		loadDudeMechanics();
	}

	// Add set Pieces
	loadSetPieces();

	// BL
	if (dude.crashWith(blBody) && !noMilk) {
		t3Show = true;
		setTimeout("t3Show = false;",2000);
	}

	// Bunnie
	if (dude.crashWith(bunnie)) {
		t1Show = true;
		setTimeout("t1Show = false;",3000);
	}

// Gameplay

	// Milk & fall
	if (dude.crashWith(poolBar)){
		noMilk = true;
		t2Show = true;
		setTimeout("t2Show = false;",2000);
	}

	if (dude.crashWith(fallBorder) && noMilk && !falling && !inPool){
		falling = true;
    t1Show = false;
		dudeFallingLeft.x = dude.x - 30;
		dudeFallingLeft.y = dude.y;
		dudeFallingLeft.currentFrame = 0;
	}

	// Dude
	if (!falling && !inPool) {
		dude.pieceMoveFourWays();
		dude.update();
		dude.behindObject();
	} else if (!falling && inPool) {
		dudeFallingLeft.fillStyle = 0;
		dudeFallingLeft.currentFrame = 2;
		dudeFallingLeft.x -= 0.06;
		dudeFallingLeft.update();
	} else if (falling && !inPool) {
		dudeFall();
	}

	if (inPool){
    if (!dark1.dark) {
  		dark1.darken(4,0.01);
  		dark1.update();
  	} else {
      loadLevel(`scripts/studio.js`);
    }
	}

	// Talks
	if (t1Show){
    bunnie.talk(talk1,40,50);
	}
	if (t2Show){
		dude.talk(talk2,40,50);
	}
	if (t3Show){
		dude.talk(talk3,40,50)
	}
}

// Start game on load
startGame();
