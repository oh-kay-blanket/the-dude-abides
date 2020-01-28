// Components
function startGame() {

	// Set
	treehornBackground = new component(700, 600, '', 0, 0, 'image', 'img/treehorn3.jpg','');
	leftBorder = new component(1, 600, "", 0, 0, '', '','');
	rightBorder = new component(1, 600, "", 700, 0, '', '','');
	topBorder = new component(700, 45, "", 0, 0, 'image', 'img/treehornTopWet.png','');
	bottomBorder = new component(700, 1, "", 0, 600, '', '','');
	leftCurtain = new component(10, 600, "", 0, 0, 'image', 'img/treehornLeft.png','');
	rightCurtain = new component(10, 600, "", 690, 0, 'image', 'img/treehornRight.png','');
	tub = new component(95, 50, "#ffcce6", 305, 275, 'image', 'img/tubDude.png',true);
  tubPuddle = new component(700, 600, "", 0, 0, 'image', 'img/puddleFull.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
  tubPuddleChangeLeft = new component(700, 600, "", -700, 0, 'image', 'img/puddleFull.png',true);
  barPieceChangeLeft = new component(60, 151, "#993300", -685, 40,'image','img/barAlley.png','');
  strangerChangeLeft = new component(225, 86, "#9966ff", -595, 100, 'image', 'img/strangerDead.png','');

  // Right change
  treehornBackgroundChangeRight = new component(700, 600, '', 700, 0, 'image', 'img/treehorn3.jpg','');
	topBorderChangeRight = new component(700, 45, "", 700, 0, 'image', 'img/treehornTop.png','');
	leftCurtainChangeRight = new component(10, 600, "", 700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeRight = new component(10, 600, "", 1390, 0, 'image', 'img/treehornRight.png','');
  tubChangeRight = new component(95, 50, "#ffcce6", 1005, 275, 'image', 'img/tubDude.png',true);
  tubPuddleChangeRight = new component(700, 600, "", 700, 0, 'image', 'img/puddleFull.png',true);

	// Characters
	dude.x = dudeHoldX;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = dudeDirection;
	dude.currentFrame = dudeFrame;
  dude.image.src = 'img/badDude.png';

  setPieces = [treehornBackground, tubPuddle, leftBorder, rightBorder, topBorder, bottomBorder, tub, treehornBackgroundChangeLeft, tubPuddleChangeLeft, topBorderChangeLeft, barPieceChangeLeft, strangerChangeLeft, treehornBackgroundChangeRight, tubPuddleChangeRight, topBorderChangeRight, tubChangeRight];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, tub];

  movingSet = [treehornBackground, leftCurtain, rightCurtain, tubPuddle, topBorder, tub, treehornBackgroundChangeLeft, tubPuddleChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, barPieceChangeLeft, strangerChangeLeft, treehornBackgroundChangeRight, tubPuddleChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, tubChangeRight, dude];

  o = 0;
	k = '';
  setChanging = false;
  movingSetCount = 0;
  pixelsMoved = 0;
  changeLeft = false;
  changeRight = false;

	myGameArea.start();
	dude.update();
}

// Load level
function wrongRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = 10;
	window.dudeDirection = 'dr';
	window.dudeFrame = 4;
  loadLevel("scripts/treehornSafe.js");
}

function correctRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = 650;
	window.dudeDirection = 'dl';
	window.dudeFrame = 0;
  loadLevel("scripts/treehornStranger2.js");
}

// Running game

function updateGameArea() {

  // Dude movement mechanics
  if (!setChanging) {
    loadDudeMechanics();
  }

  // Add set Pieces
  loadSetPieces();

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
      correctRoom();
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
      wrongRoom();
    }
  }

	dude.pieceMoveFourWays();
	dude.update();
	dude.behindObject();

  leftCurtain.update();
  leftCurtainChangeLeft.update();
  leftCurtainChangeRight.update();
  rightCurtain.update();
	rightCurtainChangeLeft.update();
  rightCurtainChangeRight.update();
	flickering(4);
	flicker.update();
}

// Start game on load
startGame();
