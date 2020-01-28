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
	tub = new component(95, 50, "#ffcce6", 305, 275, 'image', 'img/tubFull.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');

  // Left change
  treehornBackgroundChangeLeft = new component(700, 600, '', -700, 0, 'image', 'img/treehorn3.jpg','');
  topBorderChangeLeft = new component(700, 45, "", -700, 0, 'image', 'img/treehornTop.png','');
  leftCurtainChangeLeft = new component(10, 600, "", -700, 0, 'image', 'img/treehornLeft.png','');
	rightCurtainChangeLeft = new component(10, 600, "", -10, 0, 'image', 'img/treehornRight.png','');
  tubPuddleChangeLeft = new component(300, 300, "", -500, 180, 'image', 'img/tubPuddle.png',true);
	barPieceChangeLeft = new component(60, 100, '', -380, 245,'image','img/barHouse.png','');

	// Characters
	dude.x = 40;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dr';
	dude.currentFrame = 4;

	badDude.x = 335;
	badDude.y = 297;
	badDude.speedX = 0;
	badDude.speedY = 0;
	badDude.direction = 'dl';
	badDude.currentFrame = 0;


	setPieces = [treehornBackground, leftBorder, rightBorder, topBorder, bottomBorder, tub, treehornBackgroundChangeLeft, topBorderChangeLeft, tubPuddleChangeLeft, barPieceChangeLeft];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, tub];

  movingSet = [treehornBackground, topBorder, leftCurtain, rightCurtain, treehornBackgroundChangeLeft, topBorderChangeLeft, leftCurtainChangeLeft, rightCurtainChangeLeft, tubPuddleChangeLeft, barPieceChangeLeft, tub, badDude, dude];

  o = 0;
	k = '';
	bdMove1 = true;
	bdMove2 = false;
	dudeGotHit = false;
  setChanging = false;
  movingSetCount = 0;
  pixelsMoved = 0;
  changeLeft = false;

	myGameArea.start();
	dude.update();
  badDude.update();
}

// Load lodge
function wrongRoom() {
  window.dudeHoldY = dude.y;
  window.dudeHoldX = 10;
	window.dudeDirection = 'dl';
	window.dudeFrame = 0;
	loadLevel("scripts/treehornStranger.js");
}

function correctRoom() {
  window.dudeHoldY = dude.y;
	loadLevel("scripts/treehornBadDude2.js");
}

// Running game

function updateGameArea() {

	// Dude movement mechanics
  if(!dudeGotHit && !setChanging) {
		loadDudeMechanics();
	}

	// Add set Pieces
	loadSetPieces();

	// Bad Dude
	if (bdMove1) {
		if (badDude.x < 50) {
			badDude.speedX = 0.3;
		} else {
			badDude.speedX = 0;
			bdMove1 = false;
			setTimeout("bdMove2 = true;", 2000);
		}
	}

	if (bdMove2 && !setChanging) {
		badDude.follow(dude,3.5,0,0);
	}

	if (dude.crashWith(badDude)) {
		dude.fallDown(badDude);
	}

	// Dude leave
	if (bdMove2 && dude.crashWith(leftBorder) && !setChanging) {
		setChanging = true;
	}

  if (setChanging) {
    dude.speedX = -1;
    dude.speedY = 0;
    badDude.speedY = 0;
    badDude.speedX = 0;
    setChange('left',10);
    if (pixelsMoved >= 700) {
      setChanging = false;
      correctRoom();
    }
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
  leftCurtainChangeLeft.update();
  rightCurtain.update();
	rightCurtainChangeLeft.update();
	flickering(3);
	flicker.update();
}

// Start game on load
startGame();
