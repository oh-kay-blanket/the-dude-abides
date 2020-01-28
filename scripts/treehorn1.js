// let setup
let jackiePos1 = true;
let jackiePos2 = false;
let jackieGone = false;

// Components
function startGame() {

	// Set
	treehornBackground = new component(700, 600, '', 0, 0, 'image', 'img/treehorn3.jpg','');
	leftBorder = new component(1, 600, "", 0, 0, '', '','');
	rightBorder = new component(1, 600, "", 700, 0, '', '','');
	topBorder = new component(700, 45, "", 0, 0, 'image', 'img/treehornTop.png','');
	bottomBorder = new component(700, 1, "", 0, 600, '', '','');
	leftCurtain = new component(10, 600, "", 0, 0, 'image', 'img/treehornLeft.png','');
	rightCurtain = new component(10, 600, "", 690, 0, 'image', 'img/treehornRight.png','');
	rug = new component(200, 200, "", 250, 200, 'image', 'img/rug4.png','');
	sofa1 = new component(150, 63, "", 275, 130, 'image', 'img/sofa1.png','','','','','','','','',7);
	tubPuddle = new component(700, 600, "", -420, 250, 'image', 'img/tubPuddle4.png',true);

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
	rugChangeLeft = new component(200, 200, "", -450, 200, 'image', 'img/rug4.png','');
	sofa1ChangeLeft = new component(150, 63, "", -425, 130, 'image', 'img/sofa1.png','','','','','','','','',7);

  // Right change
  treehornBackgroundChangeRight = new component(700, 600, '', 700, 0, 'image', 'img/treehorn3.jpg','');
	topBorderChangeRight = new component(700, 45, "", 700, 0, 'image', 'img/treehornTop.png','');
	leftCurtainChangeRight = new component(10, 600, "", 700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeRight = new component(10, 600, "", 1390, 0, 'image', 'img/treehornRight.png','');
	studioArt = new component(58, 100, "", 1023,250,'image','img/studioArt6.png',true);

	// Talk
	talk1 = new component(``, ``, ``, ``, ``,`text`,`Welcome to my lodge.`);
	talk2 = new component(``, ``, ``, ``, ``,`text`,`Make yourself comfortable.`);
	talk3 = new component(``, ``, ``, ``, ``,`text`,`Wait here. I'll go fix you a drink.`);

	// Characters
	dude.x = 20;
	dude.y = 525;
	dude.height = 68;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dr';
	dude.currentFrame = 4;
	jackie = new component(42, 68, "", 70, 525, 'spriteFour', 'img/jackie.png','ur','',16,12,0,0,0,0,40);

  setPieces = [treehornBackground, tubPuddle, leftBorder, rightBorder, topBorder, bottomBorder, rug, sofa1, treehornBackgroundChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, rugChangeLeft, sofa1ChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, studioArt];

  obstacles = [leftBorder, rightBorder, topBorder, topBorderChangeLeft, bottomBorder, sofa1, jackie];

  movingSet = [treehornBackground, tubPuddle, topBorder, leftCurtain, rightCurtain, rug, sofa1, treehornBackgroundChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, rugChangeLeft, sofa1ChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, studioArt, dude, jackie];

  o = 0;
  t1 = false;
	t1Show = false;
	t2 = false;
	t2Show = false;
	t3 = false;
	t3Show = false;
	jackiePos1 = true;
	jackiePos2 = false;
	jackieGone = false;
  setChanging = false;
  movingSetCount = 0;
  pixelsMoved = 0;
  changeLeft = false;
  changeRight = false;

	myGameArea.start();
	dude.update();
}

function restartGame() {
  // Set
	treehornBackground = new component(700, 600, '', 0, 0, 'image', 'img/treehorn3.jpg','');
	leftBorder = new component(1, 600, "", 0, 0, '', '','');
	rightBorder = new component(1, 600, "", 700, 0, '', '','');
	topBorder = new component(700, 45, "", 0, 0, 'image', 'img/treehornTop.png','');
	bottomBorder = new component(700, 1, "", 0, 600, '', '','');
	leftCurtain = new component(10, 600, "", 0, 0, 'image', 'img/treehornLeft.png','');
	rightCurtain = new component(10, 600, "", 690, 0, 'image', 'img/treehornRight.png','');
	rug = new component(200, 200, "", 250, 200, 'image', 'img/rug4.png','');
	sofa1 = new component(150, 63, "", 275, 130, 'image', 'img/sofa1.png','','','','','','','','',7);
	tubPuddle = new component(700, 600, "", -420, 250, 'image', 'img/tubPuddle4.png',true);

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
	rugChangeLeft = new component(200, 200, "", -450, 200, 'image', 'img/rug4.png','');
	sofa1ChangeLeft = new component(150, 63, "", -425, 130, 'image', 'img/sofa1.png','','','','','','','','',7);

  // Right change
  treehornBackgroundChangeRight = new component(700, 600, '', 700, 0, 'image', 'img/treehorn3.jpg','');
	topBorderChangeRight = new component(700, 45, "", 700, 0, 'image', 'img/treehornTop.png','');
	leftCurtainChangeRight = new component(10, 600, "", 700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeRight = new component(10, 600, "", 1390, 0, 'image', 'img/treehornRight.png','');
	studioArt = new component(58, 100, "", 1023,250,'image','img/studioArt6.png',true);

  // Character
  jackie = new component(42, 68, "", 70, 525, 'spriteFour', 'img/jackie.png','ur','',16,12,0,0,0,0,40);

  setPieces = [treehornBackground, tubPuddle, leftBorder, rightBorder, topBorder, bottomBorder, rug, sofa1, treehornBackgroundChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, rugChangeLeft, sofa1ChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, studioArt];

  obstacles = [leftBorder, rightBorder, topBorder, topBorderChangeLeft, bottomBorder, sofa1, jackie];

  movingSet = [treehornBackground, tubPuddle, topBorder, leftCurtain, rightCurtain, rug, sofa1, treehornBackgroundChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, rugChangeLeft, sofa1ChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, studioArt, dude, jackie];

  o = 0;
  t1 = false;
	t1Show = false;
	t2 = false;
	t2Show = false;
	t3 = false;
	t3Show = false;
	jackiePos1 = true;
	jackiePos2 = false;
	jackieGone = false;
  setChanging = false;
  movingSetCount = 0;
  pixelsMoved = 0;
  changeLeft = false;
  changeRight = false;
  dude.speedX = 0;
  dude.speedY = 0;
  dude.update();
  myGameArea.start();
}

// Load lodge
function wrongRoom() {
  restartGame();
}

function correctRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = dude.x;
  window.dudeDirection = dude.direction;
	window.dudeFrame = dude.currentFrame;
  loadLevel("scripts/treehornPaint.js");
}

// Running game
function updateGameArea() {

	// Dude movement mechanics
  if (!setChanging) {
    loadDudeMechanics();
  }

	// Add set Pieces
	loadSetPieces();

	// Jackie Move
	if (jackiePos1) {
		if (jackie.x < 400){
			jackie.speedX = 1;
			t1Show = true;
		} else {
			jackie.speedX = 0;
		}

		if (jackie.y > 360) {
			jackie.speedY = -0.6;
		} else {
			jackie.speedY = 0;
		}

		if (jackie.speedX == 0 && jackie.speedY == 0 && !t2Show) {
			t1Show = false;
			if (jackie.x > dude.x) {
				jackie.direction = 'dl';
				jackie.currentFrame = 0;
			} else {
				jackie.direction = 'dr';
				jackie.currentFrame = 4;
			}
			t2Show = true;
			setTimeout("jackiePos1 = false;t2Show = false;jackiePos2 = true;t3Show = true;",2500);
      setTimeout('t3Show = false;', 4500)
		}
	}

	if (jackiePos2) {

		if (jackie.y < 520) {
			jackie.speedY = 0.3;
		} else {
			jackie.speedY = 0;
		}

		if (jackie.x < 700){
			jackie.speedX = 1;
      t3 = true;
		} else {
			jackie.speedX = 0;
			jackie.speedY = 0;
		}

		if (jackie.speedX == 0 && jackie.speedY == 0) {
			jackie.x = -1800;
			jackie.update();
			jackieGone = true;
			jackiePos2 = false;
		}
	}

	// Dude leave
	if (jackieGone && dude.crashWith(leftBorder) && !setChanging) {
    jackie.x = -630;
    jackie.y = 525;
    setChanging = true;
    changeLeft = true;
	}

  if (setChanging && changeLeft) {
    dude.speedX = -1;
    dude.speedY = 0;
    setChange('left',10);
    if (pixelsMoved >= 700) {
      setChanging = false;
      wrongRoom();
    }
  }

  if (jackieGone && dude.crashWith(rightBorder) && !setChanging) {
    setChanging = true;
    changeRight = true;
	}

  if (setChanging && changeRight) {
    dude.speedX = 1;
    dude.speedY = 0;
    setChange('right',10);
    if (pixelsMoved >= 700) {
      setChanging = false;
      correctRoom();
    }
  }

  // Characters
  if (!jackieGone) {
  	jackie.pieceMoveFourWays();
  }
    //jackie.shove(dude);
  	jackie.update();

  dude.pieceMoveFourWays();
  dude.update();
  dude.behindObject();

  // Talks
	if (t1Show){
		jackie.talk(talk1,50,70);
	}
	if (t2Show){
		jackie.talk(talk2,50,70);
	}
	if (t3Show){
		jackie.talk(talk3,50,70);
	}

	// Curtains
	leftCurtain.update();
  leftCurtainChangeLeft.update();
  leftCurtainChangeRight.update();
  rightCurtain.update();
	rightCurtainChangeLeft.update();
  rightCurtainChangeRight.update();
}
startGame();
