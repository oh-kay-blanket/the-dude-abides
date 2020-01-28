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
	tub = new component(95, 50, "#ffcce6", 305, 275, 'image', 'img/tubTooFull.png',true);
	tubPuddle = new component(300, 300, "", 200, 180, 'image', 'img/tubPuddle.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');
  barPiece = new component(60, 100, '', 320, 245,'image','img/barHouse.png','');

	// Characters
	dude.x = 640;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dl';
	dude.currentFrame = 0;
  
	badDude.x = 710;
  badDude.y = 225;
  badDude.speedX = 0;
  badDude.speedY = 0;
  badDude.direction = 'dl';
  badDude.currentFrame = 0;

	setPieces = [treehornBackground, tubPuddle, barPiece, leftBorder, rightBorder, topBorder, bottomBorder];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, barPiece];
  o = 0;
	k = '';
	bdMove1 = false;
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
  loadLevel("scripts/treehornBadDude3.js");
}

// Running game

function updateGameArea() {

  // Dude movement mechanics
  loadDudeMechanics();

  // Add set Pieces
  loadSetPieces();

  if (bdMove1) {
		badDude.follow(dude,3.5,0,0);
	} else {
    setTimeout("bdMove1 = true;", 2000);
  }

	if (dude.crashWith(badDude)) {
		dude.fallDown(badDude);
	}

	if (dude.crashWith(barPiece)) {
		correctRoom();
	}

	badDude.pieceMoveSprite();
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
