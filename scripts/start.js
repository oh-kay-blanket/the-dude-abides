// Var setup
let seeDoor = false;

// Components
function startGame() {

	// Set
	dudeEntranceBackground = new component(700, 600, '', 0, 0, 'image', 'img/dudeEntrance.jpg','');
	leftBorderEntrance = new component(15, 600, '', 0, 0, 'image', 'img/dudeEntranceLeftBorder.png','');
  leftBorderEntranceSecret = new component(15, 600, '', 0, 0, 'image', 'img/dudeEntranceLeftBorderSecret.png','');
	rightBorderEntrance = new component(7, 600, "black", 700, 0, '', '','');
	topBorderEntrance = new component(700, 0, "black", 0, -1, '', '','');
	bottomBorderEntrance = new component(700, 1, 'black', 0, 600, '', '','');
	entryDoor = new component(1, 25, 'white', 17, 500,'','','');
  openDoor = new component(26, 88, '', 8, 512,'image','img/dudeEntranceDoor.png','');
	seeDoorLine = new component(1, 600, 'green', 300, 0,'','','');
	car = new component(210, 210, '', 410, -80,'image','img/car.png','');
	fauxCar1 = new component(50, 60, '', 460, 0,'','','');
	fauxCar2 = new component(100, 125, '', 510, 0,'','','');

  // Set change left
  homeBackground = new component(700, 600, '', -700, 0, 'image', 'img/dudeHome.jpg','');
	leftBorder = new component(9, 600, "", -700, 0, 'image', 'img/dudeHomeLeftSide.png','');
	rightBorder = new component(9, 600, "", -9, 0, 'image', 'img/dudeHomeRightSide.png','');
  rightBorderSecret = new component(9, 600, "", -9, 0, 'image', 'img/dudeHomeRightSideSecret.png','');
	topBorder = new component(700, 45, "", -700, 0, 'image', 'img/dudeHomeTop.png','');
	bottomBorder = new component(700, 1, '', -700, 600, '', '','');
	barPiece = new component(80, 59, '', -220, 25,'image','img/barHouseWide.png');
	wallPiece1 = new component(470, 65, '', -470, 155,'image','img/homeWall.png');
	wallPiece2 = new component(21, 85, '', -487, 0,'image','img/wallPiece2.png','','','','','','','','',45);
	wallPiece3 = new component(21, 224, '', -487, 135,'image','img/wallPiece3.png','','','','','','','','',45);
	wallPiece4 = new component(21, 160, '', -487, 440,'image','img/wallPiece4.png','','','','','','','','',45);
	wallPiece5 = new component(120, 65, '', -700, 155,'image','img/homeWall2.png','','','','','','','','',45);
	exitDoor = new component(63, 45, '', -110, 0,'image','img/dudeHomeExitDoor.png','');
	entryDoorHome = new component(8, 122, '', -9, 430,'image','img/dudeHomeEntryDoor.png','');
	rug = new component(190, 145, '', -390, 340,'image','img/rug7.png','');
	couch = new component(144, 65, '', -350, 210,'image','img/couch.png','');
	table = new component(41, 45, '', -180, 225,'image','img/tableHouse.png');
	table2 = new component(60, 105, 0, -64, 266,'image','img/table2NoCream.png',true,'','','','','','','',18);
	table3 = new component(120, 70, '', -400, 530,'image','img/table3.png','','','','','','','','',18);
	counterTop = new component(198, 59, '', -450, 25,'image','img/counterTop.png','');
	counterBottom = new component(360, 9, '', -360, 146,'image','img/counterBottom.png','','','','','','','','',6);
	fridge = new component(87, 20, '', -460, 135,'image','img/fridge.png','','','','','','','','',17);
	bed = new component(120, 144, '', -692, 460,'image','img/bed.png','','','','','','','','',9);
	dresser = new component(66, 120, '', -695, 280,'image','img/dresser.png','','','','','','','','',18);
	ball = new component(15, 15, '', 20, -562, 'image', 'img/blackBall.png','');
	ballBag = new component(30, 25, 0, -50, 110, 'fixedSprite', 'img/ballBagOpen.png','','',2,0);
	toilet = new component(46, 40, '', -700, 90, 'image', 'img/toilet.png','','','','','','','','',8);
	sink = new component(45, 50, '', -685, 20, 'image', 'img/sink.png',true);
	tub = new component(95, 50, '', -605, 35, 'image', 'img/tubFull.png',true);
  thug1 = new component(42, 68, '', -327, 362, 'spriteFour', 'img/thug1.png','dl','',16,0,0,0);
	thug2 = new component(42, 68, '', -331, 55, 'spriteFour', 'img/thug2.png','dr','',16,4,0,0);
	dark1 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
	dark1.dark = true;
  dark1.darkGrade = 1;

	// Characters
	dude.x = 370;
	dude.y = 30;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dl';
	dude.currentFrame = 0;

	// Talk
	talk1 = new component(``, ``, ``, ``, ``,`text`,`Why is my door open?`);

	// Reset var
  setPieces = [dudeEntranceBackground, leftBorderEntrance, openDoor, car, homeBackground, leftBorder, rightBorder, topBorder, bottomBorder, barPiece, wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, exitDoor, entryDoorHome, rug, couch, table, table2, table3, counterTop, counterBottom, fridge, bed, dresser, ball, ballBag, toilet, sink, tub, thug1, thug2, dark1];

  obstacles = [leftBorderEntrance, rightBorderEntrance, topBorderEntrance, bottomBorderEntrance, fauxCar1, fauxCar2, entryDoor];

  movingSet = [dudeEntranceBackground, leftBorderEntrance, leftBorderEntranceSecret, openDoor, car, homeBackground, leftBorder, rightBorder, rightBorderSecret, topBorder, bottomBorder, barPiece, wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, exitDoor, entryDoorHome, rug, couch, table, table2, table3, counterTop, counterBottom, fridge, bed, dresser, ball, ballBag, toilet, sink, tub, thug1, thug2, dude, dark1];

	o = 0;
  i = 0;
	seeDoor = false;
  setChanging = false;
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

	if (dude.crashWith(seeDoorLine) && !seeDoor) {
		seeDoor = true;
		t1Show = true;
		setTimeout('t1Show=false;',2000);
	}

	// Enter door
	if (dude.crashWith(entryDoor)) {
		setChanging = true;
	}

  // Move dude
  if (setChanging) {
    dude.speedX = -1;
    dude.speedY = 0;
  }

	// Dude
	dude.pieceMoveFourWays();
	dude.update();
	dude.behindObject();

  if (setChanging) {
    leftBorderEntranceSecret.update();
    rightBorderSecret.update();
  }

  // Set change
  if (setChanging) {
    setChange('left',6);
    if (pixelsMoved >= 700) {
      setChanging = false;
      loadLevel("scripts/dudeHome.js");
    }
  }

	// Talk
	if (t1Show){
    dude.talk(talk1,50,60);
	}

	if (dark1.darkGrade > 0) {
		setTimeout(() => {
			dark1.undarken(4,0.02);
		},2000);
		dark1.update();
	}
}
// Game Intro
(function() {
	// Begin box
	box.innerHTML = `<div class='pop'><button id='start1' class='button' onclick='popup2()'>Begin</button></div>`;

	// Title display flicker
	setTimeout(() => {
		document.getElementById("title").style.display = 'block';
	}, 600);
	setTimeout(() => {
		document.getElementById("title").style.display = 'none';
	}, 620);
	setTimeout(() => {
		document.getElementById("title").style.display = 'block';
	}, 1600);
	setTimeout(() => {
		document.getElementById("title").style.display = 'none';
	}, 1620);
	setTimeout(() => {
		document.getElementById("title").style.display = 'block';
	}, 1800);

	// Begin button
	setTimeout(() => {
		document.getElementById("start1").style.display = 'block';
	}, 4000);
})();


function popup2() {
  box.innerHTML = `<div class='pop'><p>The Dude needs his bowling gear for the big game tonight.<br>Use the arrow keys to help him get his stuff.</p>`;

	setTimeout(() => {
		beginGame();
	}, 4500);
}

function beginGame() {
  box.innerHTML = '';
	startGame();
}
