// Components
function startGame() {

	// Set
	blEntranceBackground = new component(700, 600, '', 0, 0, 'image', 'img/blEntrance.jpg','');
	leftBorder = new component(9, 600, "", 0, 0);
	leftBorderLong = new component(412, 400, "", 0, 200, 'image', 'img/blEntranceLeftBorderLong.png','','',0,0,0,0,0,0,30);
	leftBorderShort = new component(9, 200, "", 0, 0, 'image', 'img/blEntranceLeftBorderShort.png','');
	rightBorder = new component(9, 600, "", 691, 0, 'image', 'img/blEntranceRightBorder.png','');
	topBorder = new component(700, 45, "", 0, 0, 'image', 'img/blEntranceTopBorder.png','');
	bottomBorderShort = new component(300, 7, "", 400, 594, 'image', 'img/blEntranceBottomBorderShort.png','');
	rug = new component(250, 150, "", 100, 70, 'image', 'img/rug2.png','');
	table = new component(50, 50, "", 625, 55, 'image', 'img/blTable.png','');
	doorLine = new component(70, 1, "", 515, 593, '', '','');
	achievers = new component(1, 1, "", 689, 400, '', '','');
  //brandt = new component(42, 68, "", 140, 60, 'spriteFour', 'img/brandt.png','dl','brandt',16,0,0,0,0,0,40);

	// Talk
	talk1 = new component(``, ``, ``, ``, ``,`text`,`Welcome uh...Dude.`);
	talk2 = new component(``, ``, ``, ``, ``,`text`,`Ah, yes. Those are our Little Achievers.`);
	talk3 = new component(``, ``, ``, ``, ``,`text`,`He is, um, waiting Dude. Maybe we should proceed.`);

	// Characters
	dude.speedX = 0;
	dude.speedY = 0;

  // Changing setPieces
  blBackground = new component(700, 600, '', 0, 600, 'image', 'img/blHome.jpg','');
  leftBorderChange = new component(9, 600, "", 0, 600, 'image', 'img/blsideBorderLeft.png','');
  rightBorderChange = new component(9, 600, "", 691, 600, 'image', 'img/blsideBorderRight.png','');
  topBorderChange = new component(700, 45, "", 0, 600, 'image', 'img/bltopBorderEntrance.png','');
  bottomBorderChange = new component(700, 1, "", 0, 1200, '', '','');
  bottomDoor = new component(8, 126, "", 1, 1074, 'image', 'img/bottomDoorClosed.png','');
  bl = new component(60, 56, "", 330, 1058, 'sprite', 'img/blRight.png',true,'bl', 1, 0,0,0);
  glass = new component(15, 150, "", 0, 900,'image','img/window.png','','',0,0,0,0,0,0,10);

  setPieces = [blEntranceBackground, rug, leftBorderLong, leftBorderShort, rightBorder, topBorder, bottomBorderShort, achievers, table, blBackground, rightBorderChange, leftBorderChange, topBorderChange, bottomBorderChange, bl, glass];

  obstacles = [leftBorderLong, leftBorder, rightBorder, topBorder, bottomBorderShort, table, brandt];

  movingSet = [blEntranceBackground, leftBorderLong, leftBorderShort, rightBorder, topBorder, bottomBorderShort, achievers, rug, table, brandt, dude, blBackground, rightBorderChange, leftBorderChange, topBorderChange, bottomBorderChange, glass, bl];

  movingSetCount = 0;
  pixelsMoved = 0;
  setChanging = false;
  o = 0;
	t1 = false;
	t1Show = false;
	t2 = false;
	t2Show = false;
	t3 = false;
	t3Show = false;
	dudeLockX = 0;
	dudeLockY = 0;

	myGameArea.start();
	dude.update();
}

// Running game

function updateGameArea() {


		// Dude movement mechanics
    if (!setChanging) {
      loadDudeMechanics();
    }

		// Add set Pieces
		loadSetPieces();

	// Welcome
	if (!t1) {
		t1Show = true;
		talk1.x = brandt.x - 50;
		talk1.y = brandt.y - 50;
		setTimeout("t1Show = false;t1 = true;",2500);
	}

	// Achievers
	if (dude.comeNearTo(achievers,20)) {
		t2Show = true;
		setTimeout("t2Show = false",1000);
	}

	// Move along
	if (everyinterval(2500)){
		if (!t1Show){
			t3Show = true;
			setTimeout("t3Show = false;",3000);
		}
	}

  // Characters
	brandt.follow(dude,1.5,60,80);
  if (!dudeGotHit) {
    brandt.pieceMoveFourWays();
  }
	brandt.obstacleCheck();
	brandt.update();
	brandt.behindObject();
	dude.pieceMoveFourWays();
	dude.update();
	dude.behindObject();

  // Door
	if (dude.crashWith(doorLine) && !dudeGotHit) {
    setChanging = true;
	}

  // Set change
  if (setChanging) {
    dude.speedX = 0;
    dude.speedY = 1;
    setChange('down',6);
    if (pixelsMoved >= 600) {
      setChanging = false;
      loadLevel("scripts/blHome.js");
    }
    topBorderChange.update();
    bottomBorderShort.update();
  }

	// Talks
	if (t1Show){
		brandt.talk(talk1,50,60);
	}
	if (t2Show){
		brandt.talk(talk2,50,60);
	}
	if (t3Show){
		brandt.talk(talk3,50,60);
	}
}
startGame();
