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
	studioArt = new component(115, 160, "", 300,220,'image','img/studioArtDead.png',true);
  tubPuddle = new component(700, 600, "", 0, 0, 'image', 'img/puddleFull.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3-2.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
  tubChangeLeft = new component(95, 50, "#ffcce6", -395, 275, 'image', 'img/tubTooFull.png',true);
  tubPuddleChangeLeft = new component(700, 600, "", -700, 0, 'image', 'img/puddleFull.png',true);
  jackieChangeLeft = new component(25, 67, "", -712, -17, 'image', 'img/jackieDead.png',true,'',2,0,0,0);

  // Right change
  treehornBackgroundChangeRight = new component(700, 600, '', 700, 0, 'image', 'img/treehorn3.jpg','');
	topBorderChangeRight = new component(700, 45, "", 700, 0, 'image', 'img/treehornTop.png','');
	leftCurtainChangeRight = new component(10, 600, "", 700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeRight = new component(10, 600, "", 1390, 0, 'image', 'img/treehornRight.png','');
  tubPuddleChangeRight = new component(700, 600, "", 700, 0, 'image', 'img/puddleFull.png',true);
  studioArtChangeRight = new component(115, 160, "", 1000, 220,'image','img/studioArtDead.png',true);

	// Characters
	dude.x = dudeHoldX;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = dudeDirection;
	dude.currentFrame = dudeFrame;

  setPieces = [treehornBackground, tubPuddle, studioArt, leftBorder, rightBorder, topBorder, bottomBorder, studioArt, treehornBackgroundChangeLeft, tubPuddleChangeLeft, topBorderChangeLeft, tubChangeLeft, jackieChangeLeft, treehornBackgroundChangeRight, tubPuddleChangeRight, topBorderChangeRight, studioArtChangeRight];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, studioArt];

  movingSet = [treehornBackground, leftCurtain, rightCurtain, tubPuddle, topBorder, studioArt, treehornBackgroundChangeLeft, topBorderChangeLeft, tubPuddleChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, tubChangeLeft, jackieChangeLeft, treehornBackgroundChangeRight, tubPuddleChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, studioArtChangeRight, dude];

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
	window.dudeDirection = 'dr';
	window.dudeFrame = 4;
  loadLevel("scripts/treehornPaint2.js");
}

function correctRoom() {
  window.dudeHoldY = dude.y;
  loadLevel("scripts/treehorn3-2.js");
}

// Running game

function updateGameArea() {

  // Dude movement mechanics
  if(!setChanging) {
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
  rightCurtainChangeRight.update();
	flickering(3);
	flicker.update();
}

// Start game on load
startGame();
