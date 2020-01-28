// let setup
let convoStart = false;
let doorOpen = false;
let dudeLockX = 0;
let dudeLockY = 0;
let targetX = false;
let targetY = false;
let targetLockX = 0;
let targetLockY = 0;
let spotX = Math.floor(Math.random() * 300 + 150);
let spotY = Math.floor(Math.random() * 300 + 150);
let roaming = false;
let blCharging = false;
let blHitChange = false;
let blHitCount = 1;
let blHitAction = false;
let glassRest = false;
let showSign = false;
let smoke = false;
let fighting = false;
let prep = false;
let targetOn = false;

// Components
function startGame() {

  // Set
  blBackground = new component(700, 600, '', 0, 0, 'image', 'img/blHome.jpg','');
  leftBorder = new component(9, 600, "", 0, 0, 'image', 'img/blsideBorderLeft.png','');
	leftBorderChange = new component(9, 600, "", 0, 0, 'image', 'img/blsideBorderLeftChange.png','');
  rightBorder = new component(9, 600, "", 691, 0, 'image', 'img/blsideBorderRight.png','');
  topBorder = new component(700, 45, "", 0, 0, 'image', 'img/bltopBorder.png','');
  bottomBorder = new component(700, 1, "", 0, 600, '', '','');
  bottomDoor = new component(8, 126, "", 1, 474, 'image', 'img/bottomDoorClosed.png','');
  bottomDoorLine = new component(11, 100, "", 5, 550, '', '','');
  table = new component(50, 50, "", 30, 30,'image','img/blTable.png','');
  desk = new component(150, 60, "", 274, 515,'image','img/blDesk.png','');
  blMeter = new component(100, 26, "", 550, 30,'image','img/blMeter1.png','');
  glass = new component(9, 150, "", 0, 300,'image','img/window.png','','',0,0,0,0,0,0,10);
	brokenGlass = new component(9, 150, "", 0, 300,'image','img/brokenWindow.png','');
	shatteredGlass = new component(110, 250, "", 22, 250,'image','img/shatteredGlass.png','');
	chairAlone = new component(60, 56, "", 26, -100, 'image', 'img/chairAlone.png','','',0,0,0,0,0,0,10);
	wheelSmoke = new component(100, 100, "", 0, 0,'sprite','img/wheelSmoke.png',true, '', 3, 0);
	target = new component(50, 50, "", 0, 0,'image','img/target.png',true, 'target', 0, 0);
	exitSign = new component(40, 50, 50, 50, 500, 'fixedSprite', 'img/blHomeExitSign.png','',true,2,0);

	// Talk
  talk1 = new component(`14px Times`, `#6b4600`, ``, ``, ``,`text`,`I know why you're here.`);
	talk2 = new component(`16px Times`, `#6b4600`, ``, ``, ``,`text`,`You came to steal from me too.`);
	talk3 = new component(`bold 17px Times`, `#6b4600`, ``, ``, ``,`text`,`Did I urinate on your rug?`);
	talk4 = new component(`bold 18px Times`, `#8e1b00`, ``, ``, ``,`text`,`You are vile filth. Be GONE!`);
	talk5 = new component(`bold 18px Times`, `#8e1b00`, ``, ``, ``,`text`,`YOU LOSE.`);
	talk6 = new component(`italic 10px Times`, `#8e1b00`, ``, ``, ``,`text`,`Piece of shit chair.`);
  talk7 = new component(``, ``, ``, ``, ``,`text`,`So we both like rugs, huh...`);
  talk8 = new component(``, ``, ``, ``, ``,`text`,`Yeah, I'll just take the one in the hall if...`);
  talk9 = new component(``, ``, ``, ``, ``,`text`,`I think you're misunderstanding.`);
  talk10 = new component(``, ``, ``, ``, ``,`text`,`Look man, you are in a way responsible for this...`);

	// Characters
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dl';
	dude.currentFrame = 0;
	bl = new component(60, 56, "", 330, 458, 'sprite', 'img/blRight.png',true,'bl', 1, 0,0,0);
	blRight = new component(200, 56, 12, 490, 200, 'fixedSprite', 'img/blRightFall.png',true,'', 7, 0);
	blLeft = new component(200, 56, 12, 10, 200, 'fixedSprite', 'img/blLeftFall.png',true,'', 7, 0);
	blWindow = new component(200, 150, 12, 10, 380, 'fixedSprite', 'img/blCrashGlass.png',true,'', 4, 0);

  // Changing Set Pieces
  blPoolBackground = new component(700, 600, '', -700, 0, 'image', 'img/blPool.jpg','');
  rightBorderChange = new component(18, 600, "", -18, 0, 'image','img/blPoolSide.png');
  rightBorderChange2 = new component(18, 600, "", -18, 0, 'image','img/blPoolSideChange.png');
	topBorderChange = new component(700, 45, "", -700, 0, 'image', 'img/blPoolTop.png','');
  poolBar = new component(160, 83, "", -280, 30, 'image', 'img/poolBar.png','');
	brokenGlassChange = new component(7, 150, "", -7, 300,'image','img/blPoolWindow.png','');
  bushes1 = new component(70, 500, "", -85, -5, 'image','img/bushesVert.png','','','','','','','','',7);
	bushes2 = new component(400, 81, "", -695, 515, 'image','img/bushesHorizShort.png','','','','','','','','',8);
	bushes3 = new component(400, 50, "", -695, 35, 'image','img/bushesHorizShort.png','','','','','','','','',7);
  bunnie = new component(43, 94, 70, -315, 150, 'fixedSprite', 'img/bunnieSprite.png',true,'bunnie', 2, 0,'','','','',7);
	blBody = new component(113, 56, "", -220, 395, 'image', 'img/blBody.png',true,'','','','','','','',7);

  setPieces = [blBackground, leftBorder, rightBorder, topBorder, bottomDoor, blPoolBackground, rightBorderChange, rightBorderChange2, topBorderChange, poolBar, brokenGlass, bushes1, bushes2, bunnie, blBody];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, bl, chairAlone];

  movingSet = [blBackground, leftBorder, leftBorderChange, rightBorder, topBorder, bottomDoor, blPoolBackground, rightBorderChange, rightBorderChange2, topBorderChange, poolBar, brokenGlass, bushes1, bushes2, bunnie, blBody, shatteredGlass, chairAlone, exitSign, bl, dude, brokenGlassChange];

  o = 0;
	convoStart = false;
	t1Show = false;
	t2 = false;
	t2Show = false;
	t3 = false;
	t3Show = false;
	t4 = false;
	t4Show = false;
	t5Show = false;
  t6 = false;
  t6Show = false;
  t7 = false;
  t7Show = false;
  t8 = false;
  t8Show = false;
  t9 = false;
  t9Show = false;
  t10Show = false;
	doorOpen = false;
	dudeLockX = 0;
	dudeLockY = 0;
	targetX = false;
	targetY = false;
	targetLockX = 0;
	targetLockY = 0;
	spotX = Math.floor(Math.random() * 575 + 50);
	spotY = Math.floor(Math.random() * 475 + 50);
	roaming = false;
	blCharging = false;
	blHitChange = false;
	blHitCount = 1;
	blHitAction = false;
	glassRest = false;
	showSign = false;
	smoke = false;
	fighting = false;
	dudeGotHit = false;
  prep = false;
	targetOn = false;
  movingSetCount = 0;
  pixelsMoved = 0;
  setChanging = false;
	myGameArea.start();
	dude.update();
	bl.update();
  bottomDoorLine.update();
}

function restartGame() {
  t2 = true;
  t3 = true;
  t4 = false;
	t4Show = true;
	setTimeout("t4Show = false;t4 = true;",3000);
  t5Show = false;
	doorOpen = false;
	dudeLockX = 0;
	dudeLockY = 0;
	targetX = false;
	targetY = false;
	targetLockX = 0;
	targetLockY = 0;
	bl.speedX = 0;
	bl.speedY = 0;
	roaming = false;
	blCharging = false;
	blHitChange = false;
	blHitCount = 1;
	blHitAction = false;
	glassRest = false;
	smoke = false;
	fighting = false;
	dudeGotHit = false;
  prep = false;
	targetOn = false;
  dude.x = 500;
  dude.y = 260;
	dude.currentFrame = 0;
	dude.direction = 'l';
  bl.x = 320;
  bl.y = 280;
  bl.image.src = "img/blRight.png";
  movingSetCount = 0;
  pixelsMoved = 0;
  setChanging = false;
	myGameArea.start();
}

// BL Fall
function sitChairRight() {
	blHitAction = false;
	setTimeout("prep = false",1400);
}

function sitChairLeft() {
	blHitAction = false;
	setTimeout("prep = false",1400);
}

// Running game

function updateGameArea() {

	// Dude movement mechanics
  if (!setChanging) {
    loadDudeMechanics();
  }

	// Add set Pieces
	loadSetPieces();

	// Obstacles & interactions
	// Conversation
  if (dude.comeNearTo(bl,250) && !convoStart) {

    // Dude: So these guys
    convoStart = true;
    t7Show = true;

    // BL: I know why
    setTimeout("t7Show = false; t1Show = true; bl.speedX = -1.5; bl.speedY = -0.5;",1800);
    setTimeout("t1Show = false;",3800);

    // Dude: Look I'm
    setTimeout("t8Show=true;",4600);
    setTimeout("bl.speedX = 0; bl.speedY = 0;",4900);

    // BL: You came to take
    setTimeout("t8Show = false; t2Show = true; bl.speedX = 1.5; bl.speedY = -0.1",6300);
    setTimeout("t2Show = false;",8000);

    // Dude: I think you're misunder
    setTimeout("t9Show=true;",9000);

    // BL: Did I urinate
    setTimeout("t9Show = false; t3Show = true;",10800);
    setTimeout("t3Show = false;",12800);
    setTimeout("bl.speedX = 0; bl.speedY = 0;",12000);

    // Dude: No, but
    setTimeout("bl.speedX = -1.5; bl.speedY = -0.5;",14000);
    setTimeout("t10Show = true;",13200);
    setTimeout("bl.speedY = 0",16000);

    // BL: ENOUGH
    setTimeout("t10Show = false; t4Show = true;",16000);
    setTimeout("bl.speedX = 0",16800);
    setTimeout("t4Show = false; t4 = true;",18000);
  }

	// BL got you
  if (t4 && dude.crashWith(bl)) {
		t5Show = true;
		dude.fallDown(bl,'restart');
	}

	// BL Move Dude
	if (!blCharging && !roaming) {
    bl.shove(dude);
	}

	if (bl.crashWindow()) {
		bl.speedY = 0;
		bl.speedX = 0;
		blWindow.y = bl.y -50;
		bl.x = 11;
		blWindow.currentFrame = 0;
		bl.update();
    blCharging = false;
		targetOn = false;
    prep = true;
		blHitAction = true;
		setTimeout("bottomDoor.image.src = 'img/bottomDoorOpen.png',showSign=true;doorOpen = true;",2500);
		//setTimeout('glassRest = true;chairAlone.y = bl.y;bl.x = 1800;bl.y = 1800;bl.update();',450);
	} else if (bl.crashWith(leftBorder)){
		bl.speedY = 0;
		bl.speedX = 0;
		bl.x = 150;
		blLeft.y = bl.y;
		blLeft.currentFrame = 0;
		bl.y = -200;
		bl.update();
		bl.y = blLeft.y
    blCharging = false;
		targetOn = false;
    prep = true;
		blHitChange = true;
		blHitCount = ++blHitCount;
		blHitAction = true;
		setTimeout(sitChairLeft,1200);
	} else if (bl.crashWith(rightBorder)) {
		bl.speedY = 0;
		bl.speedX = 0;
		bl.x = 490;
		blRight.y = bl.y;
		blRight.currentFrame = 0;
		bl.y = -200;
		bl.update();
		bl.y = blRight.y
    blCharging = false;
		targetOn = false;
    prep = true;
		blHitAction = true;
		blHitChange = true;
		blHitCount = ++blHitCount;
		setTimeout(sitChairRight,1200);
	}

	// Broken Glass
	if (glassRest){
		brokenGlass.update();
		shatteredGlass.update();
		chairAlone.update();
	} else {
		// BL Charge
		if (t4) {
			if(everyinterval(800)) {
				bl.speedX = 0;
				bl.speedY = 0;
        bl.chargePrep(dude);
				target.targetPrep(bl,dude);
				prep = true;
				smoke = true;
				targetOn = true;
				setTimeout("blCharging = true; prep = false;",2400);
			}
			if(smoke){
				if (everyinterval(12)){
					wheelSmoke.currentFrame = ++wheelSmoke.currentFrame % wheelSmoke.frames;
				}
				wheelSmoke.x = bl.x - 25;
				wheelSmoke.y = bl.y -25;
				wheelSmoke.update();
			}
			if (blCharging) {
        bl.chargeCheck();
      } else if (!blCharging && !prep) {
        bl.roam();
      }
		}
		glass.update();
	}

	// BL update
	bl.pieceMove();
	if (!blHitAction) {
		bl.update();
	} else if (blHitAction && bl.x == 490) {
		blRight.update();
	} else if (blHitAction && bl.x == 150) {
		blLeft.update();
	} else if (blHitAction && bl.x == 11) {
		if (blWindow.currentFrame == 3) {
			glassRest = true;
			chairAlone.y = bl.y;
			bl.x = 1800;
			bl.y = 1800;
			bl.update();
		}
		blWindow.update();
	}

	// Dude
	if (!dudeGotHit) {
		dude.pieceMoveFourWays();
		dude.update();
		dude.behindObject();
	}

  // Door
	if (dude.crashWith(bottomDoorLine) && doorOpen &&!setChanging) {
		setChanging = true;
	}

  // Set change
  if (setChanging) {
		leftBorderChange.update();
    rightBorderChange2.update();
		brokenGlass.update();
		brokenGlassChange.update();

    dude.speedX = -.5;
    dude.speedY = 0;
    setChange('left',4);
    if (pixelsMoved >= 700) {
      setChanging = false;
      loadLevel("scripts/blPool.js");
    }

  }

	if (showSign) {
		exitSign.update();
	}

	// Show target
	if (targetOn) {
		target.targetMove();
		target.pieceMove();
		target.update();
	}

	// Talks
	if (t1Show){
    bl.talk(talk1,30,70);
	}
	if (t2Show){
		bl.talk(talk2,60,70);
	}
	if (t3Show){
		bl.talk(talk3,160,0,'l');
	}
	if (t4Show){
		bl.talk(talk4,60,70);
	}
	if (t5Show){
		bl.talk(talk5,60,70);
	}
  if (t6Show){
		bl.talk(talk6,60,70);
	}
  if (t7Show){
		dude.talk(talk7,50,60);
	}
  if (t8Show){
		dude.talk(talk8,50,60);
	}
  if (t9Show){
		dude.talk(talk9,50,60);
	}
  if (t10Show){
		dude.talk(talk10,50,60);
	}
}

// Start game on load
startGame();
