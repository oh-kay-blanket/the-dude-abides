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
	studioArt = new component(58, 100, "", 323,250,'image','img/studioArt6.png',true);
	flicker = new component(58, 100, "rgba(0, 0, 0, " + k + ")", 323, 250, '','');

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
	studioArtChangeLeft = new component(58, 100, "", -423,250,'image','img/studioArt6.png',true);

  // Right change
  treehornBackgroundChangeRight = new component(700, 600, '', 700, 0, 'image', 'img/treehorn3.jpg','');
	topBorderChangeRight = new component(700, 45, "", 700, 0, 'image', 'img/treehornTop.png','');
	leftCurtainChangeRight = new component(10, 600, "", 700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeRight = new component(10, 600, "", 1390, 0, 'image', 'img/treehornRight.png','');
  barPieceChangeRight = new component(60, 151, "#993300", 715, 40,'image','img/barAlley.png','');
  strangerChangeRight = new component(63, 62, "", 778, 110, 'image', 'img/stranger.png','');

	// Talk
	talk1 = new component(``, ``, ``, ``, ``,`text`,`?em nettogrof uoy evaH`);

	// Characters
	dude.x = dudeHoldX;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = dudeDirection;
	dude.currentFrame = dudeFrame;

	setPieces = [treehornBackground, leftBorder, rightBorder, topBorder, bottomBorder, studioArt, treehornBackgroundChangeLeft, topBorderChangeLeft, studioArtChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, barPieceChangeRight, strangerChangeRight];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, studioArt];

  movingSet = [treehornBackground, topBorder, studioArt, leftCurtain, rightCurtain, treehornBackgroundChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, studioArtChangeLeft, treehornBackgroundChangeRight, topBorderChangeRight, leftCurtainChangeRight, rightCurtainChangeRight, barPieceChangeRight, strangerChangeRight, dude];

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

function restartGame() {

}

// Flicker
function artFlicker(){
	if (everyinterval(4)){
		k = ((Math.random() * .2) + .4);
		flicker.fillStyle = "rgba(0, 0, 0, " + k + ")";
	}
}

// Load lodge
function wrongRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = dude.x;
	window.dudeDirection = dude.direction;
	window.dudeFrame = dude.currentFrame;
  loadLevel("scripts/treehornPaint.js");
}

function correctRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = 10;
	window.dudeDirection = dude.direction;
	window.dudeFrame = dude.currentFrame;
  loadLevel("scripts/treehornStranger.js");
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
	if (dude.crashWith(studioArt)) {
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

	artFlicker();

	dude.pieceMoveFourWays();
	dude.update();
	dude.behindObject();

// Talks
	if (t1Show){
    //studioArt.talk(talk1,40,70);
	}

	// Curtains
	leftCurtain.update();
  leftCurtainChangeLeft.update();
  leftCurtainChangeRight.update();
  rightCurtain.update();
	rightCurtainChangeLeft.update();
  rightCurtainChangeRight.update();
}

// Start game on load
startGame();
