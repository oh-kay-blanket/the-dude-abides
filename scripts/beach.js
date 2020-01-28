// let setup
let jackieShow = false;
let jackieLeave = false;

// Components
function startGame() {

	// Set
	beachBackground = new component(700, 600, '', 0, 0, 'image', 'img/beach.jpg','');
	leftBorder = new component(1, 700, "", -1, 0, '', '','');
	rightBorder = new component(100, 600, 0, 750, 0, '', '','','',0,0);
	ocean = new component(100, 600, 90, 600, 0, 'fixedSprite', 'img/ocean.png','','',3,0);
	topBorder = new component(900, 20, "", 0, -19, '', '','');
	bottomBorder = new component(900, 20, "", 0, 600, '', '','');
	stoneWall = new component(500, 80, "", 0, 0, 'image', 'img/stoneWall.png','');
	trampoline = new component(130, 130, 50, 335, 100, 'fixedSprite', 'img/trampoline.png',true,'',4,0);
  maude  = new component(83, 132, 50, 358, 100, 'fixedSprite', 'img/maude.png',true,'',4,0);
	bonFire = new component(120, 120, 29, 35, 440, 'fixedSprite', 'img/bonFire.png','','',3,0,0,0,0,0,15);
	sand = new component(120, 120, 50, 300, 300, 'fixedSprite', 'img/sandUp.png',true,'',3,0);
  dark1 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark1.dark = true;
  dark1.darkGrade = 1;
  dark2 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark2.dark = true;
  dark2.darkGrade = 1;


	// Talk
	talk1 = new component(``, ``, ``, ``, ``,`text`,`Hi Dude. You look like you could use a stiff drink.`);
	talk2 = new component(``, ``, ``, ``, ``,`text`,`Come with me.`);

	// Characters
	dude.x = 338;
	dude.y = 325;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dl';
	dude.currentFrame = 0;

	fallDude = new component(160, 350, "", 274, -45, 'image', 'img/dudeFallUp.png',true,'dude');
	beachBum1 = new component(42, 68, "", 383, 60, 'image', 'img/beachBum1.png',true,'',0,0,0,0,0,0,40);
	beachBum2 = new component(42, 68, "", 320, 170, 'image', 'img/beachBum2.png',true,'',0,0,0,0,0,0,40);
	beachBum3 = new component(42, 68, "", 435, 165, 'image', 'img/beachBum3.png',true,'',0,0,0,0,0,0,40);
	jackie = new component(42, 28, "", 750, 400, 'spriteFour', 'img/jackie.png','dl','',16,0,0,0,0,0,40);

  setPieces = [beachBackground, ocean, stoneWall, beachBum1, bonFire];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, stoneWall, trampoline, bonFire, beachBum1, beachBum2, beachBum3, jackie];

  o = 0;
  t1 = false;
	t1Show = false;
	t2 = false;
	t2Show = false;
	a = 0;
  dudeFallStart = false;
  dudeFalling = false;
  dudeFallen = false;
	sandUp = false;
	h = 0;
	jackieShow = false;
	jackieLeave = false;

	myGameArea.start();
	dude.update();
}

// Jackie Leave
jackieGo = function() {
	// X
	if (jackie.x < 900) {
			jackie.speedX = 1.2;
	}
}

// Running game
function updateGameArea() {

// Gameplay

  // Dude movement mechanics
  if (dudeFallen) {
    loadDudeMechanics();
  }

  // Add set Pieces
  loadSetPieces();

	// Jackie
	if (dude.crashWith(bonFire)) {
		jackieShow = true;
	}

	if (jackieShow) {
		if (!jackieLeave) {
			if (jackie.x > 500) {
				jackie.speedX = -1.2;
			} else {
				jackie.speedX = 0;
			}
		} else {
			jackieGo();
		}

		// Jackie boundries
		jackie.pieceMoveFourWays();
    jackie.shove(dude);
		jackie.inOcean(1.2,68);
		jackie.update();
		jackie.behindObject();
		if (jackie.meetWith(dude, 40) && !t1) {
			t1 = true;
			t1Show = true;
			setTimeout("t1Show = false;",2000);
			setTimeout("t2Show = true;",3000);
			setTimeout("t2Show = false;",5000);
			setTimeout("jackieLeave = true;",6000);
		}
	}

	if (dude.crashWith(rightBorder) && jackieLeave) {
    loadLevel(`scripts/treehorn1.js`);
	}

	// Walk into ocean
	dude.inOcean(2,68);

  if (dudeFallen) {
		trampoline.update();
		beachBum2.update();
		beachBum3.update();
		if (maude.currentFrame == 0) {
			maude.update();
			dude.pieceMoveFourWays();
			dude.update();
			dude.behindObject();
		} else {
			dude.pieceMoveFourWays();
			dude.update();
			dude.behindObject();
			maude.update();
		}

		if (h < 120) {
			sand.update();
			h++;
		}
  } else {
    dark2.update();
    trampoline.update();
    maude.update();
  }

  // undarkening set
  if (dark1.darkGrade == 1) {
    setTimeout("dudeFalling=true;",9000);
		setTimeout("dudeFalling=false;dudeFallen=true",9600);
  }

  if (dark1.dark) {
    dark1.undarken(4,0.008);
    dark1.update();
  }

  if (dudeFalling) {
		if (everyinterval(5)){
			fallDude.x += 8;
			fallDude.y += 50;
			fallDude.width += -16;
			fallDude.height += -35;
		}
    fallDude.pieceMove();
		fallDude.update();
	}

	// Talks
	if (t1Show){
    jackie.talk(talk1,50,70);
	}
	if (t2Show){
		jackie.talk(talk2,50,70);
	}
}
startGame();
