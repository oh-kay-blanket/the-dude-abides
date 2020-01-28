// let setup
let lighterMessage = false;
let lighterMessageDone = false;

// Components
function startGame() {

	// Set
  background = new component(700, 600, '#9e988d', 0, 0, 'image', 'img/secretPassageBackground.jpg','');
	leftBorder = new component(9, 600, '#70644c', 0, 0, 'iamge', 'img/secretPassageSide.png','img/secretPassageSide.png');
	rightBorder = new component(9, 600, '#70644c', 691, 0, 'image', 'img/secretPassageSide.png','img/secretPassageSide.png');
	topBorder = new component(700, 45, '#70644c', 0, 0, 'image', 'img/secretPassageTop.png','img/secretPassageTop.png');
	bottomBorder = new component(700, 1, '', 0, 600, '', '','');
	wallPiece1 = new component(460, 95, 0, 0, 430,'fixedSprite','img/secretPassageW1.png','','',2,0,0,0,0,0,38);
	wallPiece2 = new component(180, 95, 0, 520, 430,'fixedSprite','img/secretPassageW2.png','','',2,0,0,0,0,0,38);
  wallPiece3 = new component(460, 95, 0, 240, 130,'fixedSprite','img/secretPassageW3.png','','',2,0,0,0,0,0,38);
	wallPiece4 = new component(60, 150, 'black', 520, 170,'','img/secretPassageW4.png','','');
  wallPiece5 = new component(210, 95, 0, 110, 290,'fixedSprite','img/secretPassageW5.png','','',2,0,0,0,0,0,38);
  wallPiece6 = new component(180, 95, 0, 400, 290,'fixedSprite','img/secretPassageW6.png','','',2,0,0,0,0,0,38);
  wallPiece7 = new component(60, 310, 'black', 110, 0,'','img/secretPassageW7.png','','');
  falseWall = new component(80, 95, '#70644c', 320, 290,'fixedSprite','img/falseWall.png', '','',2,0,0,0,0,0,40);
	falseWallTop = new component(80, 50, 'black', 320, 290,'','', '','',0,0,0,0,0,0,0);
  exitDoor = new component(9, 200, 'black', 691, 0,'image','img/secretPassageExitDoor.png','');
	exitLine = new component(1, 40, 'black', 691, 120,'','','');
	dark1 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  lighter = new component(2000, 2000, 8, 0, 0, 'fixedSprite','img/lighter.png','','', 2, 0);

  // Set change right
  blEntranceBackground = new component(700, 600, '', 700, 0, 'image', 'img/blEntrance.jpg','');
	leftBorderLong = new component(412, 400, "", 700, 200, 'image', 'img/blEntranceLeftBorderLong.png','');
	leftBorderShort = new component(9, 200, "", 700, 0, 'image', 'img/blEntranceDoor.png','');
	leftBorderShortChange = new component(9, 200, "", 700, 0, 'image', 'img/blEntranceDoorChange.png','');
	rightBorderEntrance = new component(9, 600, "", 1391, 0, 'image', 'img/blEntranceRightBorder.png','');
	topBorderEntrance = new component(700, 45, "", 700, 0, 'image', 'img/blEntranceTopBorder.png','');
	bottomBorderShort = new component(300, 7, "", 1100, 594, 'image', 'img/blEntranceBottomBorderShort.png','');
	rug = new component(250, 150, "", 800, 70, 'image', 'img/rug2.png','');
	table = new component(50, 50, "", 1325, 55, 'image', 'img/blTable.png','');
  brandt = new component(42, 68, "", 940, 60, 'spriteFour', 'img/brandt.png','dl','brandt',16,0,0,0,0,0,40);

	// Characters
	dude.x = 50;
	dude.y = 500;
	dude.speedX = 0;
	dude.speedY = 0;

	// Talk
	talk1 = new component(`italic 12px Arial`, ``, ``, ``, ``,`text`,`chhk...chhk `);

	// Reset let
  setPieces = [background, leftBorder, rightBorder, topBorder, bottomBorder, exitDoor, wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, wallPiece6, wallPiece7, falseWall];

  entranceSet = [blEntranceBackground, rug, leftBorderLong, leftBorderShort, rightBorderEntrance, topBorderEntrance, bottomBorderShort, table, brandt];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, wallPiece6, wallPiece7];

	blackPieces = [wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, wallPiece6, wallPiece7, falseWall];

  movingSet = [background, dark1, leftBorder, rightBorder, topBorder, bottomBorder, exitDoor, wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, wallPiece6, wallPiece7, falseWall, lighter, dude, blEntranceBackground, rug, leftBorderLong, leftBorderShort, leftBorderShortChange, rightBorderEntrance, topBorderEntrance, bottomBorderShort, table, brandt];

  i = 0;
	phraseArray = '';
  movingSetCount = 0;
  pixelsMoved = 0;
  setChanging = false;
  o = 0;

	myGameArea.start();
	dude.update();
  exitLine.update();
}

// Load set Pieces
function loadEntranceSetPieces() {
  setPieceCount = 0;
  while (setPieceCount < entranceSet.length) {
		entranceSet[setPieceCount].update();
		setPieceCount++;
  }
}

// convert to black
function convertToBlack() {
	for (p in blackPieces) {
		if (dude.bottom < blackPieces[p].y + 41) {
			blackPieces[p].currentFrame = 1;
			blackPieces[p].update();
		} else {
			blackPieces[p].currentFrame = 0;
			blackPieces[p].update();
		}
	}
}

function convertToBlackOld() {
	for (p in blackPieces) {
		if (dude.bottom < blackPieces[p].y + 41) {
			blackPieces[p].image.src = 'img/darkness.jpg';
			blackPieces[p].update();
		} else {
			blackPieces[p].image.src = blackPieces[p].direction;
			blackPieces[p].update();
		}
	}
}

// Gameplay
function updateGameArea() {

	// Dude movement mechanics
  if (!setChanging) {
    loadDudeMechanics();
  }

	// Add set Pieces
	convertToBlack();
	loadSetPieces();
  loadEntranceSetPieces();

	// Dude display
	dude.pieceMoveFourWays();
	dude.update();
	dude.behindObject();
	falseWallTop.update();

  if (lighterMessageDone && !setChanging) {
    lighter.x = dude.xCenter - 1000;
    lighter.y = dude.yCenter - 1000;
    lighter.update();
  } else {
    dark1.update();
  }

	// Exit house
	if (dude.crashWith(exitLine)) {
		setChanging = true;
	}

  // Set change
  if (setChanging) {
		leftBorderShortChange.update();
    dude.speedX = 1;
    dude.speedY = 0;
    setChange('right',6);
    if (pixelsMoved >= 700) {
      setChanging = false;
      loadLevel("scripts/blEntrance.js");
    }
  }

	// Talk
  if (lighterMessage && !lighterMessageDone && !setChanging) {
    dude.talk(talk1,35,-5,'r');
  } else {
    setTimeout('lighterMessage = true;', 3000);
		setTimeout('lighterMessage = false;lighterMessageDone = true;', 6000);
  }

}
startGame();
