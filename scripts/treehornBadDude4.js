// let setup
let bdMove3 = false;
let endFrame1 = false;
let endFrame2 = false;
let endFrame3 = false;

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
	secretDoorLeft = new component(5, 70, "", 0, 530, '', '','');
	secretDoorRight = new component(5, 70, "", 695, 530, '', '','');
	tub = new component(95, 50, "#ffcce6", 305, 275, 'image', 'img/tubTooFull.png',true);
	tubPuddle = new component(500, 500, "", 100, 80, 'image', 'img/tubPuddle3.png',true);
	flicker = new component(700, 600, "rgba(0, 0, 0, " + k + ")", 0, 0, '','');
	darkness = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
	nearDarkness = new component(700, 600, "rgba(0, 0, 0, .5)", 0, 0, '','');
  ball = new component(15, 15, '', 342, 293, 'image', 'img/underBall.png','');

	// Characters
	dude.x = 120;
	dude.y = 55;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dr';
	dude.currentFrame = 4;

  badDude.speedX = 0;
  badDude.speedY = 0;
  badDude.x = 445;
  badDude.y = 85;
  badDude.direction = 'dl';
  badDude.currentFrame = 0;

	setPieces = [treehornBackground, tubPuddle, leftBorder, rightBorder, topBorder, bottomBorder];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, tub];

  o = 0;
	k = '';
	i = 0;
	bdMove3 = false;
	k = '';
	dudeGotHit = false;
	endFrame1 = false;
	endFrame2 = false;
	endFrame3 = false;
	dark = false;

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
  //loadLevel("scripts/treehornStranger.js");
}

function correctRoom() {
  window.dudeHoldY = 200;
  window.dudeHoldX = 335;
	window.dudeDirection = 'dl';
	window.dudeFrame = 0;
  loadLevel("scripts/treehornSafe.js");
}

// Running game

function updateGameArea() {

  // Dude movement mechanics
  if(!dudeGotHit) {
		loadDudeMechanics();
	}

  // Add set Pieces
  loadSetPieces();

	if (dude.crashWith(badDude) && !dudeGotHit) {
		dude.fallDown(badDude,'dontRestart');
		dude.x = 1800;
		dude.update();
    badDude.speedX = 0;
    badDude.speedY = 0;
		setTimeout("dark = true;",1000);
		setTimeout("dark = false;endFrame1 = true",2500);
		setTimeout("dark = true;endFrame1 = false;tub.image.src = `img/tubDude.png`;",4000);
		setTimeout("dark = false;correctRoom();",5500);
	}

 	if (endFrame1) {
		tubPuddle.x = 0;
		tubPuddle.y = 0;
		tubPuddle.width = 700;
		tubPuddle.height = 600;
		tubPuddle.image.src = `img/tubPuddle5.png`;
		dudeFallHorizontal.currentFrame = 0;
		dudeFallHorizontal.x = 300;
		dudeFallHorizontal.y = 150;
		badDude.currentFrame = 0;
		badDude.x = 330;
		badDude.y = 110;
	}

	if (endFrame2) {
		tubPuddle.image.src = `img/tubPuddle5.png`;
		badDude.x = 335;
		badDude.y = 200;
	}

	if (endFrame3) {
		tubPuddle.image.src = `img/puddleFull.png`;
		tub.image.src = `img/tubDude.png`;
		badDude.x = -270;
	}

  if (!endFrame1 && !endFrame2 && !endFrame3) {
    ball.update();
  } else {
    tub.update();
  }

  if (bdMove3) {
    if (!dudeGotHit) {
      badDude.follow(dude,4,0,0);
    }
  } else {
    setTimeout("bdMove3 = true;", 1200);
  }

  badDude.pieceMoveFourWays();
  badDude.update();

  if (dudeGotHit && !endFrame3 && !endFrame2 && !dark) {
		if (dudeFallHorizontal.y < 45) {
			dudeFallVertical.update();
		} else {
			dudeFallHorizontal.currentFrame = 0;
	    dudeFallHorizontal.update();
		}
  }

	// Dude
	dude.pieceMoveFourWays();
	dude.update();
	dude.behindObject();

	leftCurtain.update();
	rightCurtain.update();
	flickering(4);

	if (dark) {
		darkness.update();
	}

	if (!dark) {
		flicker.update();
	} else {
		nearDarkness.update();
	}
}

// Start game on load
startGame();
