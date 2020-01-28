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
	barPiece = new component(60, 151, "#993300", 15, 40,'image','img/barAlley.png','');

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
  barPieceChangeLeft = new component(60, 151, "#993300", -685, 40,'image','img/barAlley.png','');
  strangerChangeLeft = new component(63, 62, "", -622, 110, 'image', 'img/stranger.png','');

  // Right change
  treehornBackgroundChangeRight = new component(700, 600, '', 700, 0, 'image', 'img/treehorn3.jpg','');
	topBorderChangeRight = new component(700, 45, "", 700, 0, 'image', 'img/treehornTop.png','');
	leftCurtainChangeRight = new component(10, 600, "", 700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeRight = new component(10, 600, "", 1390, 0, 'image', 'img/treehornRight.png','');
  tubChangeRight = new component(95, 50, "#ffcce6", 1005, 275, 'image', 'img/tubFull.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 700, 0, '','');
  badDudeChangeRight = new component(45, 65, "", 1035, 297, 'spriteLong', 'img/badDude.png',true,'badDude',8,0,0,0);

	// Talk
	talk1 = new component(``, ``, ``, ``, ``,`text`,`.rof enod lla er'ew ro noos rehtegot ti teg retteb d'uoy ,eduD ydwoH`);

  // Make sure dude isn't over bar
  if (dudeHoldY < 200) {
    dudeHoldY = 200;
  }

	// Characters
	dude.x = dudeHoldX;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = dudeDirection;
	dude.currentFrame = dudeFrame;
	stranger = new component(63, 62, "", 78, 110, 'image', 'img/stranger.png','');

  setPieces = [treehornBackground, leftBorder, rightBorder, topBorder, bottomBorder, barPiece, stranger, treehornBackgroundChangeLeft, topBorderChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, barPieceChangeLeft, strangerChangeLeft, tubChangeRight, badDudeChangeRight];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, stranger, barPiece];

  movingSet = [treehornBackground, topBorder, leftCurtain, rightCurtain, barPiece, stranger, treehornBackgroundChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, barPieceChangeLeft, strangerChangeLeft, tubChangeRight, flicker, badDudeChangeRight, dude];

  o = 0;
	t1Show = false;
	k = '';
  setChanging = false;
  movingSetCount = 0;
  pixelsMoved = 0;
  changeLeft = false;
  changeRight = false;

	myGameArea.start();
	dude.update();
}

// Load lodge
function wrongRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = dude.x;
	window.dudeDirection = dude.direction;
	window.dudeFrame = dude.currentFrame;
  loadLevel("scripts/treehornStranger.js");
}

function correctRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = dude.x;
	window.dudeDirection = dude.direction;
	window.dudeFrame = dude.currentFrame;
  loadLevel("scripts/treehornBadDude.js");
}

// Running game

function updateGameArea() {

	// Dude movement mechanics
  if (!setChanging) {
    loadDudeMechanics();
  }

	// Add set Pieces
	loadSetPieces();

	// Hello
	if (dude.crashWith(stranger)) {
		t1Show = true;
	} else {
		t1Show = false;
	}

  // Dude leave
	if (dude.crashWith(leftBorder)) {
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

	if (dude.crashWith(rightBorder)) {
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

	dude.pieceMoveFourWays();
	dude.update();
	dude.behindObject();

// Talks
	if (t1Show){
    stranger.talk(talk1,50,70);
	}

	// Curtains
  leftCurtain.update();
  leftCurtainChangeLeft.update();
  leftCurtainChangeRight.update();
  rightCurtain.update();
	rightCurtainChangeLeft.update();
  rightCurtainChangeRight.update();
  flickering(3);
	flicker.update();
}

// Start game on load
startGame();
