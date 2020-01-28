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
	secretDoorLeft = new component(5, 70, "", 0, 530, '', '','');
	secretDoorRight = new component(5, 70, "", 695, 530, '', '','');
	tub = new component(95, 50, "#ffcce6", 305, 275, 'image', 'img/tubTooFull.png',true);
	tubPuddle = new component(300, 300, "", 200, 155, 'image', 'img/tubPuddle2.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');
  rug = new component(190, 145, '', 265, 240,'image','img/rug7.png','');
  bunnie = new component(43, 94, 70, 335, 250, 'fixedSprite', 'img/bunnieSprite.png',true,'bunnie', 2, 0);

	// Characters
	dude.x = 40;
	dude.y = 530;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dr';
	dude.currentFrame = 4;
  
  badDude.speedX = 0;
  badDude.speedY = 0;
  badDude.x = 10;
  badDude.y = 25;
  badDude.direction = 'dr';
  badDude.currentFrame = 4;

	setPieces = [treehornBackground, tubPuddle, bunnie, leftBorder, rightBorder, topBorder, bottomBorder];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, bunnie];
  o = 0;
	k = '';
	bdMove2 = false;
	dudeGotHit = false;

	myGameArea.start();
	dude.update();
  badDude.update();
}

// Load lodge
function wrongRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = 10;
	window.dudeDirection = 'dr';
	window.dudeFrame = 4;
  loadLevel("scripts/treehornStranger.js");
}

function correctRoom() {
  window.dudeHoldY = dude.y;
  loadLevel("scripts/treehornBadDude4.js")
}

// Running game

function updateGameArea() {

  // Dude movement mechanics
  loadDudeMechanics();

  // Add set Pieces
  loadSetPieces();

  if (bdMove2) {
		badDude.follow(dude,3.5,0,0);
	} else {
    setTimeout("bdMove2 = true;", 1800);
  }

	if (dude.crashWith(badDude)) {
		dude.fallDown(badDude);
	}

	if (dude.crashWith(bunnie)) {
		correctRoom();
	}

  badDude.pieceMoveFourWays();
  badDude.update();

	// Dude
	if (!dudeGotHit) {
		dude.pieceMoveFourWays();
		dude.update();
		dude.behindObject();
	}

	leftCurtain.update();
	rightCurtain.update();
	flickering(3);
	flicker.update();
}

// Start game on load
startGame();
