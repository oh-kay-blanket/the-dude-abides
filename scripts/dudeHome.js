// let setup
let dudeCanMove = false;
let cream = false;
let ballUp = false;
let ballBagUp = false;
let seenBy1 = false;
let seenBy2 = false;
let t1down = true;
let startupConvo = true;
let t1Peeing = false;
let peeAlpha = 0;
let peed = false;
let t2down = false;
let t1Run = false;
let t2Run = false;
let t2Route = false;
let shout1 = false;
let shout2 = false;

// Components
function startGame() {

	// Set
	homeBackground = new component(700, 600, '', 0, 0, 'image', 'img/dudeHome.jpg','');
	leftBorder = new component(9, 600, "", 0, 0, 'image', 'img/dudeHomeLeftSide.png','');
	rightBorder = new component(9, 600, "", 691, 0, 'image', 'img/dudeHomeRightSide.png','');
	topBorder = new component(700, 45, "", 0, 0, 'image', 'img/dudeHomeTop.png','');
	bottomBorder = new component(700, 1, '', 0, 600, '', '','');
	barPiece = new component(80, 59, '', 480, 25,'image','img/barHouseWide.png');
	wallPiece1 = new component(470, 65, '', 230, 155,'image','img/homeWall.png');
	wallPiece2 = new component(21, 85, '', 213, 0,'image','img/wallPiece2.png','','','','','','','','',45);
	wallPiece3 = new component(21, 224, '', 213, 135,'image','img/wallPiece3.png','','','','','','','','',45);
	wallPiece4 = new component(21, 160, '', 213, 440,'image','img/wallPiece4.png','','','','','','','','',45);
	wallPiece5 = new component(120, 65, '', 0, 155,'image','img/homeWall2.png','','','','','','','','',45);
	exitDoor = new component(63, 45, '', 590, 0,'image','img/dudeHomeExitDoor.png','');
	entryDoorHome = new component(8, 130, '', 691, 415,'image','img/dudeHomeEntryDoor.png','');
	exitSign = new component(40, 50, 30, 610, 50, 'fixedSprite', 'img/dudeHomeExitSign.png','',true,2,0);
	rug = new component(190, 145, '', 310, 340,'image','img/rug7.png','');
	peeSpot = new component(75, 75, "rgba(0, 0, 0, 1)", 342, 390,'image','img/peeSpot.png','');
	pee = new component(20, 30, '', 370, 398,'image','img/pee.png','');
	couch = new component(144, 65, '', 350, 210,'image','img/couch.png','');
	table = new component(41, 45, '', 520, 225,'image','img/tableHouse.png');
	table2 = new component(60, 105, 0, 636, 266,'image','img/table2NoCream.png',true,'','','','','','','',18);
	table3 = new component(120, 70, '', 300, 530,'image','img/table3.png','','','','','','','','',18);
	counterTop = new component(198, 59, '', 250, 25,'image','img/counterTop.png','');
	counterBottom = new component(360, 9, '', 340, 146,'image','img/counterBottom.png','','','','','','','','',6);
	fridge = new component(87, 20, '', 240, 135,'image','img/fridge.png','','','','','','','','',17);
	bed = new component(120, 144, '', 8, 460,'image','img/bed.png','','','','','','','','',9);
	dresser = new component(66, 120, '', 5, 280,'image','img/dresser.png','','','','','','','','',18);
	ball = new component(15, 15, '', 20, 138, 'image', 'img/blackBall.png','');
	ballBag = new component(30, 25, 0, 650, 110, 'fixedSprite', 'img/ballBagOpen.png','','',2,0);
	toilet = new component(46, 40, '', 0, 90, 'image', 'img/toilet.png','','','','','','','','',8);
	sink = new component(45, 50, '', 15, 20, 'image', 'img/sink.png',true);
	tub = new component(95, 50, '', 95, 35, 'image', 'img/tubFull.png',true);

	// Characters

	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'ul';
	dude.currentFrame = 8;
	thug1 = new component(42, 68, '', 363, 362, 'spriteFour', 'img/thug1.png','dl','',16,0,0,0);
	thug2 = new component(42, 68, '', 369, 55, 'spriteFour', 'img/thug2.png','dr','',16,4,0,0);

	// Talk
	talk1 = new component(`italic 10px Arial`, ``, ``, ``, ``,`text`,`Are you sure this is the right guy?`);
	talk2 = new component(``, ``, ``, ``, ``,`text`,`I need my ball.`);
	talk3 = new component(`italic 10px Arial`, ``, ``, ``, ``,`text`,`Not on the rug, man.`);
	talk4 = new component(`12px "Lucida Sans Unicode"`, ``, ``, ``, ``,`text`,`THIS PIECE OF SHIT ISN'T HOME.`);
	talk5 = new component(`12px "Lucida Sans Unicode"`, ``, ``, ``, ``,`text`,`I'LL LET HIM KNOW WE WERE HERE.`);
	talk6 = new component(`12px "Lucida Sans Unicode"`, ``, ``, ``, ``,`text`,`GET HIM!`);
	talk7 = new component(`italic 12px Arial`, ``, ``, ``, ``,`text`,`How does he get around this dump in a wheelchair?`);

	// Reset let
  setPieces = [homeBackground, leftBorder, rightBorder, topBorder, bottomBorder, exitDoor, entryDoorHome, counterBottom, fridge, barPiece, wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, rug, couch, table, table2, table3, counterTop, bed, dresser, toilet, sink, tub];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, barPiece, wallPiece1, wallPiece2, wallPiece3, wallPiece4, wallPiece5, couch, table, table2, table3, counterTop, counterBottom, fridge, bed, dresser, toilet, sink, tub];

  i = 0;
  dudeGotHit = false;
	dudeCanMove = false;
	ballUp = false;
	ballBagUp = false;
  t1Show = false;
	t12Show = false;
	t2Show = false;
	t3Show = false;
	t4Show = false;
	t5Show = false;
	t6Show = false;
	t16Show = false;
	t7Show = false;
	cream = false;
	startupConvo = true;
	t1Peeing = false;
  peeAlpha = 0;
	peed = false;
	t1down = false;
	t1Run = false;
	t2down = false;
	t2Run = false;
	t2Route = false;
	seenBy1 = false;
	seenBy2 = false;
	shout1 = false;
	shout2 = false;
	phraseArray = '';
	ballBag.image.src = `img/ballBagOpen.png`;

	myGameArea.start();
	dude.update();
}

function restartGame() {
	restart = true;
	o = 0;
  i = 0;
  dudeGotHit = false;
	dudeCanMove = true;
	ballUp = false;
	ballBagUp = false;
  t1Show = false;
	t12Show = false;
	t2Show = false;
	t3Show = false;
	t4Show = false;
	t5Show = false;
	t6Show = false;
	t16Show = false;
	t7Show = false;
	cream = false;
	startupConvo = true;
	t1Peeing = false;
  pAlpha = 0;
	peed = true;
	t1down = false;
	t1Run = false;
	t2down = true;
	t2Run = false;
	t2Route = true;
	seenBy1 = false;
	seenBy2 = false;
	shout1 = false;
	shout2 = false;
	phraseArray = '';
	ball.x = 20;
	ball.y = 138;
	ballBag.image.src = `img/ballBagOpen.png`;
	ballBag.x = 650;
	ballBag.y = 110;
	dude.x = 647;
	dude.y = 450;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.currentFrame = 0;
	dude.direction = 'l';
	dude.update();
	thug1.x = 348;
	thug1.y = 370;
	thug1.speedX = 0;
	thug1.speedY = 0;
	thug1.currentFrame = 0;
	thug1.direction = 'dl';
	thug1.update();
	thug2.x = 369;
	thug2.y = 55;
	thug2.speedX = 0;
	thug2.speedY = 0;
	thug2.currentFrame = 4;
	thug2.direction = 'dr';
	thug2.update();
	myGameArea.start();
}

// Gameplay
function updateGameArea() {

	// Dude movement mechanics
	if (dudeCanMove) {
		loadDudeMechanics();
	}

	// Add set Pieces
	loadSetPieces();

	//Characters
	if (!t1Peeing && !peed && startupConvo) {
		startupConvo = false;
		setTimeout('t4Show=true;',1500);
		setTimeout('t4Show=false; t5Show=true',4000);
		setTimeout('t1Peeing=true',5500);
		setTimeout('t5Show=false;',6000);
		setTimeout('t2Route = true;',7000);
		setTimeout("t3Show=true;",7500);
		setTimeout("t1Peeing=false; t3Show=false;",10000);
		setTimeout("peed=true; dudeCanMove=true;",10000);
	}

	if (peed) {
		if (dude.seenBy1(thug1,60) && !shout1) {
			t1Run = true;
			t2Run = true;
			t2Route = false;
			shout1 = true;
			shout2 = true;
			t6Show = true;
			setTimeout('t6Show = false;', 1000);
		}

		if (shout1) {
			thug1.follow(dude,1.5,0,0);
	    thug1.obstacleCheck();
			thug2.follow(dude,1.5,0,0);
	    thug2.obstacleCheck();
		}

		if (!t1Run) {
			thug1.thugRouteY(235,450);
		}

		peeSpot.update();
	}

	// Dude knocked down. This needs to be before thug updates.
	if (dude.crashWith(thug1) || dude.crashWith(thug2)) {
		if (dude.crashWith(thug1)) {
			t6Show = false;
			t1Show = true;
			dude.fallDown(thug1,'restart');
		} else {
			t16Show = false;
			t12Show = true;
			dude.fallDown(thug2,'restart');
		}
	}

	if (t1Peeing) {
		// grow pee spot
		ctx.globalAlpha = peeAlpha;
		peeSpot.update();
    ctx.globalAlpha = 1;
		peeAlpha += 0.004;
	}

	// Thug 1 updates
	thug1.pieceMoveFourWays();
	thug1.update();
	thug1.behindObject();

	if (t1Peeing) {
		pee.update();
	}

	// Thug 2 movement
	if (t2Route && !t2Run) {
		thug2.thugRouteX(40,370);
	}

  thug2.pieceMoveFourWays();
	thug2.update();
	thug2.behindObject();
	if (dude.seenBy2(thug2,50) && !shout2) {
		t1Run = true;
		t2Run = true;
		t2Route = false;
		shout1 = true;
		shout2 = true;
		t16Show = true;
		setTimeout('t16Show = false;', 1000);
	}

  // Thug 2 sees dude
	if (shout2) {
		thug1.follow(dude,1.5,0,0);
		thug1.obstacleCheck();
		thug2.follow(dude,1.5,0,0);
    thug2.obstacleCheck();
	}

  // Show exit sign after picking up bag
	if (ballBagUp) {
		exitSign.update();
	}

  // Pick up ball
	if (dude.crashWith(ball) && !ballUp) {
		ballUp = true;
	}

  // Pick up ball bag or tell dude he need ball first
	if (dude.crashWith(ballBag) && ballUp && !ballBagUp) {
		ballBagUp = true;
		ballBag.currentFrame = 1;
	} else if (dude.crashWith(ballBag) && !ballUp) {
			t2Show = true;
			setTimeout('t2Show = false;', 2000);
	}

  // Show ball on ground or behind dude
	if (!ballUp && !ballBagUp) {
		ball.update();
	} else if (ballUp && !ballBagUp && dude.currentFrame > 7) {
    ball.x = dude.x + 22
		ball.y = dude.y + 34;
		ball.update();
		ball.behindObject();
  }

  // Show ball bag on ground or behind dude
  if (!ballBagUp) {
		ballBag.update();
	} else if (ballBagUp && dude.currentFrame > 7) {
		ballBag.x = dude.x + 17;
		ballBag.y = dude.y + 35;
    ballBag.update();
  	ballBag.behindObject();
	}

	// Dude display
	if (!dudeGotHit) {
		dude.pieceMoveFourWays();
		dude.update();
		dude.behindObject();
	}

  // Carry ball in front of dude when facing down
  if (ballUp && !ballBagUp && dude.currentFrame < 8) {
    ball.x = dude.x + 30;
		ball.y = dude.y + 38;
		ball.update();
		ball.behindObject();
  }

  // Carry ball bag in front of dude when facing down
	if (ballBagUp && dude.currentFrame < 8) {
		ballBag.x = dude.x + 17;
		ballBag.y = dude.y + 35;
    ballBag.update();
  	ballBag.behindObject();
	}

	// Exit house
	if (dude.crashWith(exitDoor)) {
		if (ballBagUp) {
			loadLevel(`scripts/bowlingAlley.js`);
		}
	}

	// Talk
	if (t2Show){
		dude.talk(talk2,150,5,'l');
	}
	if (t3Show){
		dude.talk(talk3,155,0,'l');
	}
	if (t4Show){
		thug2.talk(talk4,155,5,'l');
	}
	if (t5Show){
    thug1.talk(talk5,35,-5,'r');
	}
	if (t6Show){
    thug1.talk(talk6,50,60);
	}
	if (t16Show){
		thug2.talk(talk6,50,50);
	}
	if (t7Show){
		thug2.talk(talk7,50,50);
	}
	if (t1Show){
    thug1.talk(talk1,50,60);
	}
	if (t12Show){
		thug2.talk(talk1,160,5,'l');
	}
}
startGame();
