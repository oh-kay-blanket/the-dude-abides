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
  tubPuddle = new component(700, 600, "", 0, 0, 'image', 'img/puddleFull.png',true);
	barPiece = new component(60, 151, "#993300", 15, 40,'image','img/barAlley.png','');
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
  tubPuddleChangeLeft = new component(700, 600, "", -700, 0, 'image', 'img/puddleFull.png',true);
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
  studioArtChangeLeft = new component(115, 160, "", -400, 220,'image','img/studioArtDead.png',true);

  // Right change
  treehornBackgroundChangeRight = new component(700, 600, '', 700, 0, 'image', 'img/treehorn3.jpg','');
	topBorderChangeRight = new component(700, 45, "", 700, 0, 'image', 'img/treehornTop.png','');
	leftCurtainChangeRight = new component(10, 600, "", 700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeRight = new component(10, 600, "", 1390, 0, 'image', 'img/treehornRight.png','');
  tubPuddleChangeRight = new component(700, 600, "", 700, 0, 'image', 'img/puddleFull.png',true);
  barPieceChangeRight = new component(60, 151, "#993300", 715, 40,'image','img/barAlley.png','');
  strangerChangeRight = new component(225, 86, "#9966ff", 805, 100, 'image', 'img/strangerDead.png','');

  // Make sure dude isn't over bar
  if (dudeHoldY < 200 && dudeHoldX < 300) {
    dudeHoldY = 200;
  }

	// Characters
	dude.x = dudeHoldX;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = dudeDirection;
	dude.currentFrame = dudeFrame;
	stranger = new component(225, 86, "#9966ff", 105, 100, 'image', 'img/strangerDead.png','');

  setPieces = [treehornBackground, tubPuddle, leftBorder, rightBorder, topBorder, bottomBorder, barPiece, stranger, treehornBackgroundChangeLeft, tubPuddleChangeLeft, topBorderChangeLeft, studioArtChangeLeft, treehornBackgroundChangeRight, tubPuddleChangeRight, topBorderChangeRight, barPieceChangeRight, strangerChangeRight];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, barPiece, stranger];

  movingSet = [treehornBackground, leftCurtain, rightCurtain, tubPuddle, topBorder, barPiece, stranger, treehornBackgroundChangeLeft, topBorderChangeLeft, tubPuddleChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, studioArtChangeLeft, treehornBackgroundChangeRight, tubPuddleChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, barPieceChangeRight, strangerChangeRight, dude];

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
  window.dudeHoldX = 10;
  window.dudeDirection = dude.direction;
  window.dudeFrame = dude.currentFrame;
  loadLevel("scripts/treehornStranger2.js");
}

function correctRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = 650;
	window.dudeDirection = 'dl';
	window.dudeFrame = 0;
  loadLevel("scripts/treehornPaint2.js");
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

	// Curtains
  leftCurtain.update();
  leftCurtainChangeLeft.update();
  leftCurtainChangeRight.update();
  rightCurtain.update();
	rightCurtainChangeLeft.update();
  rightCurtainChangeRight.update();;
	flickering(3);
	flicker.update();
}

// Start game on load
startGame();
