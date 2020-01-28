// Var setup
let t31Show = false;
let t32Show = false;
let t33Show = false;
let t34Show = false;
let t35Show = false;
let walterChat = false;
let walterChatDone = false;
let barOn = false;
let jesusChase = false;

// Components
function startGame() {

	// Set
	alleyBackground = new component(1200, 600, '', 0, 0, 'image', 'img/bowlingAlley.jpg','');
	bowlingAlleyCover = new component(300, 600, '', 1170, 0, 'image', 'img/bowlingAlleyCover.jpg','');
	leftBorder = new component(1, 600, '', -2, 5, '', '','');
	rightBorder = new component(700, 600, '', 700, 0, '', '','');
	rightBorderSecret = new component(1, 600, '', 1050, 0, '', '','');
	topBorder = new component(700, 15, '', 0, 0, '', '','');
	bottomBorder = new component(1200, 1, '', 0, 600, '', '','');
	barPiece = new component(60, 151, '', 0, 50,'image','img/barAlley.png','','','','','','','','',20);
	counter = new component(60, 295, '', 0, 210,'image','img/counterAlley.png','','','','','','','','',18);
	rack = new component(23, 400, '', 160, 100,'image','img/rack.png','','','','','','','','',10);
	chair1 = new component(31, 110, '', 254, 150,'image','img/chair.png','','','','','','','','',7);
	chair2 = new component(31, 110, '', 254, 350,'image','img/chair.png','','','','','','','','',7);
	table1 = new component(30, 86, '', 315, 168,'image','img/table.png','','','','','','','','',4);
	table2 = new component(30, 86, '', 315, 370,'image','img/table.png','','','','','','','','',4);
	machine1 = new component(89, 40, '', 344, 104,'image','img/machine1.png','','','','','','','','',7);
	machine2 = new component(89, 40, '', 344, 455,'image','img/machine1.png','','','','','','','','',7);
	barSign = new component(91, 50, 50, 530, 500,'fixedSprite','img/boBarSign.png','','',2,0);
	ballBag = new component(30, 30, 0, 20, 420, 'fixedSprite', 'img/ballBagOpen.png','','',2,1);
	dark1 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark1.dark = true;
  dark1.darkGrade = 1;
	dark2 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark2.dark = true;
  dark2.darkGrade = 1;
  dark3 = new component(700, 600, "rgba(0, 0, 0, 1)", 1200, 0, '','');

	// Characters
	dude.x = 70;
	dude.y = 410;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'ur';
	dude.currentFrame = 12;
	jesus = new component(42, 68, '', 260, 240, 'spriteFour', 'img/jesus.png','dr','',16,4,0,0,0,0,40);
	stranger = new component(63, 62, '', 63, 120, 'image', 'img/stranger.png','','','','','','','','',46);
	bowler1 = new component(42, 68, '', 374, 113, 'spriteFour', 'img/bowler1.png','dr','',16,4,0,0,0,0,40);
	bowler2 = new component(42, 68, '', 370, 185, 'spriteFour', 'img/bowler2.png','dr','',16,4,0,0,0,0,40);
	bowler3 = new component(42, 68, '', 378, 255, 'spriteFour', 'img/bowler3.png','dr','',16,4,0,0,0,0,40);
	bowler4 = new component(42, 68, '', 380, 325, 'spriteFour', 'img/bowler4.png','dr','',16,4,0,0,0,0,40);
	bowler5 = new component(42, 68, '', 382, 391, 'spriteFour', 'img/bowler5.png','dr','',16,4,0,0,0,0,40);

  ball1 = new component(15, 15, "green", 415, 147, 'image', 'img/ball1.png',true);
  ball2 = new component(15, 15, "#00ccff", 415, 237, 'image', 'img/ball2.png',true);
  ball3 = new component(15, 15, "red", 415, 300, 'image', 'img/ball3.png',true);
  ball4 = new component(15, 15, "#3333ff", 415, 362, 'image', 'img/ball4.png',true);
  ball5 = new component(15, 15, "#ff6600", 415, 428, 'image', 'img/ball5.png',true);

	// Talk
	talk1 = new component(`12px "Lucida Sans Unicode"`, ``, ``, ``, ``,`text`,`If anyone's the Bad Dude, it's you.`);
	talk2 = new component(``, ``, ``, ``, ``,`text`,`...then one of them pees on my rug.`);
	talk3 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`OVER THE LINE`);
	talk4 = new component(`12px Arial`, `#242424`, ``, ``, ``,`text`,`I know a man. You can find him down the lane.`);
	talk5 = new component(``, ``, ``, ``, ``,`text`,`Not a clue why.`);
	talk6 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`Maybe they took you for a homonym.`);
	talk7 = new component(``, ``, ``, ``, ``,`text`,`What the hell are you talking about?`);
	talk8 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`A doppelganger. Another dude. A Bad Dude.`);
	talk9 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`You should find him and get a new rug.`);

  setPieces = [alleyBackground, machine1, machine2, walter, stranger, barPiece, counter, rack, chair1, chair2, table1, table2, ballBag, dark3];

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, bowler1, bowler2, bowler3, bowler4, bowler5, walter, stranger, barPiece, counter, rack, chair1, chair2, table1, table2, machine1, machine2, ballBag];

  movingSet = [alleyBackground, bowlingAlleyCover, bowler1, bowler2, bowler3, bowler4, bowler5, ball1, ball2, ball3, ball4, ball4, walter, jesus, stranger, dude, barPiece, counter, rack, chair1, chair2, table1, table2, machine1, machine2, ballBag, barSign, dark3];

  dark1.dark = true;
  dark1.darkGrade = 1;
  dark2.dark = true;
  dark2.darkGrade = 1;
  movingSetCount = 0;
  pixelsMoved = 0;
  setChanging = false;
  o = 0;
  t1Show = false;
	t2Show = false;
	t31Show = false;
	t32Show = false;
	t33Show = false;
	t34Show = false;
	t35Show = false;
	t4 = false;
	t4Show = false;
	t5Show = false;
	t6Show = false;
	t7Show = false;
	t8Show = false;
	t9Show = false;
	walterChat = false;
	walterChatDone = false;
	barOn = false;
	dudeGotHit = false;
  jesusChase = false;
	restart = false;
	myGameArea.start();
	dude.update();
}

function restartGame() {
	restart = true;
	t1Show = false;
	t31Show = false;
	t32Show = false;
	t33Show = false;
	t34Show = false;
	t35Show = false;
	jesusChase = false;
	walterChat = true;
	walterChatDone = false;
	barOn = false;
	dudeGotHit = false;
	setTimeout("t9Show = true;",500);
	setTimeout("t9Show = false;walterChatDone = true;",2500);
	rightBorder.height = 600;
  dark1.dark = false;
  dark1.darkGrade = 1;
  dark2.dark = true;
  dark2.darkGrade = 1;
  dark2.fillStyle = 'rgba(0,0,0,1)';
	dude.x = 70;
	dude.y = 410;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.currentFrame = 12;
	dude.direction = 'ur';
	dude.update();
	jesus.x = 260;
	jesus.y = 240;
	jesus.speedX = 0;
	jesus.speedY = 0;
	jesus.currentFrame = 4;
	jesus.direction = 'r';
	jesus.update();
	myGameArea.start();
}

// Running game
function updateGameArea() {

	// Dude movement mechanics
	if (!dark2.dark && !setChanging) {
		loadDudeMechanics();
	}

	// Add set Pieces
	loadSetPieces();

// Events

	// Bar
	if (dude.crashWith(rightBorderSecret) && !setChanging) {
    setChanging = true;
	}

  // Set change
  if (setChanging) {
    dude.speedX = 1.5;
    dude.speedY = 0;
    setChange('right',8);
    if (pixelsMoved >= 1200) {
      setChanging = false;
      loadLevel("scripts/secretPassage.js");
    }
  }

	// Stranger
	if (dude.crashWith(stranger)) {
		t4Show = true;
		setTimeout("t4Show = false;barOn = true;rightBorder.height = 500; rightBorder.update();",2000);
	}

	// Jesus
	if (dude.comeNearTo(jesus,70)) {
		jesusChase = true;
  }

  if (jesusChase) {
    jesus.follow(dude,1.7,0,0);
		if(dude.crashWith(jesus)) {
			t1Show = true;
			dude.fallDown(jesus,'restart');
		}
	}

	// Walter
	if (!walterChat && !dark1.dark && !restart) {
		walterChat = true;
		t2Show = true;
		setTimeout("t2Show = false;",2000);
		setTimeout("t5Show = true;",2500);
		setTimeout("t5Show = false;",4500);
		setTimeout("t6Show = true;",5000);
		setTimeout("t6Show = false;",7000);
		setTimeout("t7Show = true;",7500);
		setTimeout("t7Show = false;",9500);
		setTimeout("t8Show = true;",10000);
		setTimeout("t8Show = false;",12000);
		setTimeout("t9Show = true;",12500);
		setTimeout("t9Show = false;walterChatDone=true;",14500);
	}

	if (dude.crashWith(walter)) {
		t9Show = true;
		setTimeout("t9Show = false;",2000);
	}

	// Ball Crash
	if (dude.crashWith(ball1)) {
		dude.fallDown(ball1,'restart');
		t31Show = true;
	}
  if (dude.crashWith(ball2)) {
		dude.fallDown(ball2,'restart');
		t32Show = true;
	}
  if (dude.crashWith(ball3)) {
		dude.fallDown(ball3,'restart');
		t33Show = true;
	}
  if (dude.crashWith(ball4)) {
		dude.fallDown(ball4,'restart');
		t34Show = true;
	}
  if (dude.crashWith(ball5)) {
		dude.fallDown(ball5,'restart');
		t35Show = true;
	}

  // Bowlers bowling
	bowler1.bowl(ball1, 40, 240, 4.7);
  bowler2.bowl(ball2, 0, 380, 5.5);
  bowler3.bowl(ball3, 20, 270, 4.5);
  bowler4.bowl(ball4, 0, 200, 4.8);
  bowler5.bowl(ball5, 30, 290, 4.6);


  // Characters
  jesus.obstacleCheck();
  jesus.pieceMoveFourWays();
	jesus.update();
	jesus.behindObject();

	if (walterChatDone && dark2.dark) {
    dark2.undarken(4,0.04);
		dark2.update();
		walter.update();
	} else if (!walterChatDone && dark2.dark) {
		dark2.update();
		walter.update();
	}

	// Dude
	if (!dudeGotHit) {
		dude.pieceMoveFourWays();
		dude.update();
		dude.behindObject();
	}

	if (setChanging) {
		bowlingAlleyCover.update();
	}

	// Bar on
	if (barOn) {
		barSign.update();
	}

	// Talks
	if (t1Show){
		jesus.talk(talk1,50,50);
	}
	if (t2Show){
    dude.talk(talk2,40,0,'r');
	}
	if (t31Show){
    bowler1.talk(talk3,50,60);
	}
	if (t32Show){
		bowler2.talk(talk3,50,60);
	}
	if (t33Show){
		bowler3.talk(talk3,50,60);
	}
	if (t34Show){
		bowler4.talk(talk3,50,60);
	}
	if (t35Show){
		bowler5.talk(talk3,50,60);
	}
	if (t4Show){
		stranger.talk(talk4,30,60)
	}
	if (t5Show){
		dude.talk(talk5,40,0,'r')
	}
	if (t6Show){
		walter.talk(talk6,40,0,'r')
	}
	if (t7Show){
		dude.talk(talk7,40,0,'r')
	}
	if (t8Show){
		walter.talk(talk8,40,0,'r')
	}
	if (t9Show){
		walter.talk(talk9,40,0,'r')
	}

	if (dark1.dark) {
		dark1.undarken(4,0.04);
		dark1.update();
	}
  dark3.update();
}
startGame();
