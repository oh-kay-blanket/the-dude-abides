// let setup
let dudeDone = false;

// Components
function startGame() {

	// Set
	treehornBackground = new component(700, 600, '', 0, 0, 'image', 'img/treehorn3-2.jpg','');
	leftBorder = new component(1, 600, "", 0, 0, '', '','');
	rightBorder = new component(1, 600, "", 700, 0, '', '','');
	topBorder = new component(700, 45, "", 0, 0, 'image', 'img/treehornTopWet.png','');
	bottomBorder = new component(700, 1, "", 0, 600, '', '','');
	leftCurtain = new component(10, 600, "", 0, 0, 'image', 'img/treehornLeft.png','');
	rightCurtain = new component(10, 600, "", 690, 0, 'image', 'img/treehornRight.png','');
	rug = new component(200, 200, "", 250, 200, 'image', 'img/rug4.png','');
	center = new component(1, 1, "", 350, 300, 'image', 'img/sofa1.png','');
  tub = new component(95, 50, "#ffcce6", 305, 275, 'image', 'img/tubTooFull.png',true);
  tubPuddle = new component(700, 600, "", 0, 0, 'image', 'img/puddleFull.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');
  darkness = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');

	// Characters
	dude.x = 620;
	dude.y = dudeHoldY;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dl';
	dude.currentFrame = 0;

  badDude.speedX = 0;
  badDude.speedY = 0;
  badDude.x = -160;
  badDude.y = 110;
  badDude.direction = 'dr';
  badDude.currentFrame = 4;
	badDude.image.src = 'img/dudeTransparent.png';
	jackie = new component(25, 67, "", -12, -17, 'image', 'img/jackieDead.png',true,'',2,0,0,0);

	setPieces = [darkness, treehornBackground, rug, tubPuddle, leftBorder, rightBorder, topBorder, bottomBorder, tub];

	obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, tub];

	o = 0;
	bdMove1 = true;
	bdMove2 = false;
	k = '';
	dudeDone = false;
  setChanging = false;
  movingSetCount = 0;
  pixelsMoved = 0;
  changeLeft = false;
  changeRight = false;

	myGameArea.start();
	dude.update();
  badDude.update();
}

function correctRoom() {
  loadLevel("scripts/parkingLot.js");
}

// Running game

function updateGameArea() {

  // Dude movement mechanics
  if (!setChanging) {
    loadDudeMechanics();
  }

  // Add set Pieces
  loadSetPieces();

	// Treehorn sliding
	if (jackie.y > -42) {
		jackie.speedY = -0.2;
	} else {
		jackie.speedY = 0;
	}

	// Bad Dude
	if (bdMove1) {
		if (badDude.x < 50) {
			badDude.speedX = 0.7;
		} else {
			badDude.speedX = 0;
			bdMove1 = false;
			setTimeout("bdMove2 = true;", 2000);
		}
	}

	if (bdMove2) {
		badDude.follow(dude,2,0,0);
	}

	// Jackie

	ctx.save();
	ctx.translate(8,200);
	ctx.rotate(290*Math.PI/180);
	jackie.pieceMove();
	jackie.update();
	ctx.restore();

  if (dude.crashWith(tub) && bdMove2 && badDude.crashWith(tub) && !dudeDone) {
    dudeDone = true;
    tub.image.src = "img/tubBadDude.png";
    setTimeout("loadLevel(`scripts/parkingLot.js`);",6000);
  }

  if (!dudeDone) {
		dude.pieceMoveFourWays();
		dude.update();
		dude.behindObject();
		badDude.pieceMoveFourWays();
  	badDude.update();
  } else {
    setTimeout("tub.inHole(center,6,4);",1000);
    setTimeout("rug.inHole(center,4,4);jackie.inHole(center,6,6);",2000);
    setTimeout("leftCurtain.x = -100;rightCurtain.x = 800;topBorder.y = -50;",4000);
    setTimeout("treehornBackground.inHole(center,8,8);tubPuddle.inHole(center,8,8);flicker.inHole(center,8,8);",4000);
  }

	// Curtains
  leftCurtain.update();
  rightCurtain.update();
	flickering(3);
	flicker.update();
}

// Start game on load
startGame();
