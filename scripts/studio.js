// let setup
let maude = [];
let maudeShow = false;
let runner = false;
let mFight = false;
let holes = false;
let starGrow = false;
let hitHole = false;
let hitBlackHole = false;
let pinShow = false;
let pinX = 0;
let dudePin = false;
let blackHoleGrow = false;
let showStars = false;

// Components
function startGame() {

	// Set
	studioBackground = new component(700, 600, '', 0, 0, 'image', 'img/space2.jpg','');
	leftBorder = new component(1, 700, "", -1, 0, '', '','');
	rightBorder = new component(1, 700, "", 700, 0, '', '','');
	topBorder = new component(700, 1, "", 0, -1, '', '','');
	bottomBorder = new component(700, 1, "", 0, 600, '', '','');
	studioArt = new component(58, 100, 0, 335,195,'fixedSprite','img/studioArtLong.png',true,'',6,0);
	studioArtHoles = new component(58, 100, 0, 335,195,'image','img/studioArt6.png',true);
	studioDoor = new component(250, 100, "", 235,500,'image','img/studioDoor.png',true);
	pin = new component(55, 18, "", 320,195,'sprite','img/pinLeft.png',true,'pin', 1,0,0,0);
	star = new component(5, 5, "", -100, 195, 'image', 'img/galaxy4.png',true);
	blackHole = new component(1, 1, "", -100,195,'image','img/galaxy3.png',true);

	// Talk
	talk1 = new component(``, ``, ``, ``, ``,`text`,`Dude. `);
	talk2 = new component(``, ``, ``, ``, ``,`text`,`You must stand erect.`);
	talk3 = new component(``, ``, ``, ``, ``,`text`,`Else you may go down.`);
	talk4 = new component(``, ``, ``, ``, ``,`text`,`She makes me, but not alone.`);
	talk5 = new component(``, ``, ``, ``, ``,`text`,`Ride the white pin down the black hole.`);
	talk6 = new component(``, ``, ``, ``, ``,`text`,`Follow it or I will cease.`);
	talk7 = new component(``, ``, ``, ``, ``,`text`,`Time to go.`);

	// Characters
	dudeSwim = new component(70, 131, "", 400, 601, 'spriteSwim', 'img/dudeSwimLong.png',true,'dudeSwim',8,0,0,0,0,0);
	dudePinSprite = new component(120, 84, "", 1400, 601, 'spritePin', 'img/dudePinLong.png',true,'dudePin',8,6,0,0,0,0);
	dudePiecePin = new component(120, 108, "", 1, 1, 'image', 'img/dudePinHole.png',true,'dudePin');
	dudeSwimStill = new component(61, 105, "", 1, 1, 'image', 'img/dudeSwim.png',true,'dudeSwim');

	maude[0] = (new component(85, 140, 1, 460, 592, 'rodentSprite', 'img/maudePaintUp.png',true,'', 2, 0, -2, -5));
	maude[1] = new component(85, 140, 30, 120, 592, 'rodentSprite', 'img/maudePaintUp.png',true,'', 2, 0, 3, -5);
	maude[2] = new component(140, 85, 65, -130, 420, 'rodentSprite', 'img/maudePaintRight.png',true,'', 2, 0, 6, -3);
	maude[3] = new component(140, 85, 90, -130, 50, 'rodentSprite', 'img/maudePaintRight.png',true,'', 2, 0, 6, 2);
	maude[4] = new component(85, 140, 160, 55, -130, 'rodentSprite', 'img/maudePaintDown.png',true,'', 2, 0, 4, 5);
	maude[5] = new component(85, 140, -140, 640, -130, 'rodentSprite', 'img/maudePaintDown.png',true,'', 2, 0, -4.5, 5);
	maude[6] = new component(140, 85, -90, 690, 70, 'rodentSprite', 'img/maudePaintLeft.png',true,'', 2, 0, -6, 2);
	maude[7] = new component(140, 85, -45, 691, 380, 'rodentSprite', 'img/maudePaintLeft.png',true,'', 2, 0, -6, -3);
  dark1 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark1.dark = true;
  dark1.darkGrade = 1;
	dark2 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark2.dark = true;
  dark2.darkGrade = 1;

	setPieces = [studioBackground, dark2];

	obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, studioArtHoles];
	o = 0;
	t1 = true;
	t1Show = false;
	t2 = false;
	t2Show = false;
	t3 = false;
	t3Show = false;
	t4 = false;
	t4Show = false;
	t5 = false;
	t5Show = false;
	t6 = false;
	t6Show = false;
	t7 = false;
	t7Show = false;
	dudeCanMove = false;
	i = 1;
	j = 1;
	k = '';
	m = '';
	n = 7;
	maudeShow = false;
	runner = false;
	mFight = false;
	a = 0;
	holes = false;
	starGrow = false;
	hitHole = false;
	hitBlackHole = false;
	pinShow = false;
	pinX = 0;
	dudePin = false;
	blackHoleGrow = false;
	showStars = false;
	studioArtHoles.x = 335;
	studioArtHoles.y = 195;
	myGameArea.start();
  dark1.update();
}

function restartGame() {
	i = 1;
	j = 1;
  dark1.dark = false;
  dark1.darkGrade = 0;
  dark2.fillStyle = "rgba(0, 0, 0, 1)";
  dark2.dark = true;
  dark2.darkGrade = 1;
	k = '';
	m = '';
	n = 7;
	dudeCanMove = true;
	holes = false;
	starGrow = false;
	hitHole = false;
	hitBlackHole = false;
	pinShow = false;
	pinX = 0;
	dudePin = false;
	blackHoleGrow = false;
	showStars = false;
	dudeSwim.width = 70;
	dudeSwim.height = 131;
	dudeSwim.x = 340;
	dudeSwim.y = 420;
  dudeSwim.speedX = 0;
  dudeSwim.speedY = 0;
	dudePinSprite.width = 120;
	dudePinSprite.height = 84;
	dudePinSprite.speedX = 0;
	dudePinSprite.speedY = 0;
	dudePinSprite.x = 1200;
	dudePinSprite.y = 1200;
	dudeSwimStill.speedX = 0;
	dudeSwimStill.speedY = 0;
	dudeSwimStill.x = 1800;
	dudeSwimStill.width = 55;
	dudeSwimStill.height = 100;
	studioArtHoles.width = 58;
	studioArtHoles.height = 100;
	studioArtHoles.x = 335;
	studioArtHoles.y = 195;
	studioArtHoles.speedX=0;
	studioArtHoles.speedY=0;
	studioDoor.width = 250;
	studioDoor.height = 100;
	studioDoor.x = 235;
	studioDoor.y = 500;
	studioDoor.speedX=0;
	studioDoor.speedY=0;
	t7Show = true;
	setTimeout("t7Show = false;holes = true;showStars = true;",2000);
	myGameArea.start();
  dude.update();
  dudePinSprite.update();
  dark2.update();
}

// Into red sun
function eatenByHole() {
	myGameArea.stop();
	restartGame();
}

// Running game
function updateGameArea() {

	// Add set Pieces
	loadSetPieces();

	if (studioDoor.height > 1) {
		studioDoor.update();
	}

	if (studioArtHoles.width > 1) {
		studioArtHoles.update();
	} else {
    studioArtHoles.y = 900;
    studioArtHoles.update();
  }

	if (!holes) {
		studioArt.update();
	}

	// Dark
	if (!dark1.dark) {

		// maudes
		if (!holes) {

			if (t1){
				setTimeout("t1Show = true;dudeSwim.y = 599;dudeSwim.x = 338;dudeSwim.currentFrame=1;",1000);
				setTimeout("t1Show = false;dudeCanMove=true;",4000);
				t1 = false;
			}

			// Paint chat
			if (dudeSwim.borderlessCrashWith(studioArt) && !t1Show && !mFight && !t7){
				if (!t6) {mFight = true;}
				if (!t2){
					t2 = true;
						t2Show = true;
						setTimeout("t2Show = false",5500);
					} else if (!t3){
						t3 = true;
						t3Show = true;
						setTimeout("t3Show = false",5500);
					} else if (!t4){
						t4 = true;
						t4Show = true;
						setTimeout("t4Show = false",5500);
					} else if (!t5){
						t5 = true;
						t5Show = true;
						setTimeout("t5Show = false",5500);
					} else if (!t6){
						t6 = true;
						t6Show = true;
						setTimeout("t6Show = false",5500);
					} else if (!t7){
						t7 = true;
						t7Show = true;
						setTimeout("t7Show = false;holes = true;showStars = true;",5500);
					}
				}

				// Talks
				if (t1Show){
					studioArt.talk(talk1,30,70);
					dudeSwim.y += -1;
					dudeSwim.speedX = 0;
				}
				if (t2Show){
					studioArt.talk(talk2,30,70);
				}
				if (t3Show){
					studioArt.talk(talk3,30,70);
				}
				if (t4Show){
					studioArt.talk(talk4,30,70);
				}
				if (t5Show){
					studioArt.talk(talk5,30,70);
				}
				if (t6Show){
					studioArt.talk(talk6,30,70);
				}
				if (t7Show){
					studioArt.talk(talk7,30,70);
				}

				if (dudeCanMove) {
					// Dude movement mechanics
					loadDudeSwimMechanics(dudeSwim,2.7,0.45);
				}

				dudeSwim.pieceMoveSwim();
				dudeSwim.update();

				if (mFight){
					if (maudeShow){
						if (runner){
							maude[m].pieceMove();
						}
						maude[m].update();
					} else {
						m = Math.floor((Math.random() * n));
						setTimeout("maude.splice(m,1);",5500);
						n = n - 1;
						setTimeout("a ++;studioArt.currentFrame = a;",2000);
						maudeShow = true;
						setTimeout("runner = true;", 1000);
						//setTimeout("runner = false;",4300);
						setTimeout("runner = false;mFight = false;maudeShow=false;",5500);
					}
					if (dudeSwim.crashWith(maude[m])) {
						myGameArea.stop();
						dark1.dark = true;
						i = 1;
						setTimeout("startGame();",1000);
					}
				}

			// Star
			} else {

				if (showStars && dark2.dark) {
          dark2.undarken(4,0.02);
					studioDoor.y += 1;
					studioArtHoles.inHole(topBorder,2,4);
					setTimeout('studioArtHoles.y = 1800;', 2000);
				}

				// Star move
				if (everyinterval(250)) {
					star.x = Math.floor((Math.random() * 500) + 100);
					star.y = Math.floor((Math.random() * 400) + 100);
					starGrow = true;
				}

				// Star size
				if (starGrow) {
					star.x += -0.8;
					star.y += -0.8;
					star.width += 1.6;
					star.height += 1.6;
					if (star.width > 120) {
						starGrow = false;
					}
				}

				if (!starGrow && star.width > 2) {
					star.x += 0.8;
					star.y += 0.8;
					star.width += -1.6;
					star.height += -1.6;
				}

				if (star.width > 2) {
					star.update();
				} else {
					star.x = -100;
          star.update();
				}

				// Star Crash
				if (dudeSwim.crashWith(star) && !hitHole) {
					dudeSwimStill.x = dudeSwim.x;
					dudeSwimStill.y = dudeSwim.y;
					dudeSwim.width = 0;
					dudeSwim.height = 0;
					setTimeout(eatenByHole,4000);
					hitHole = true;
				}

				// Star Crash
				if (dudePinSprite.crashWith(star) && !hitHole) {
					dudeSwimStill.x = dudePinSprite.x;
					dudeSwimStill.y = dudePinSprite.y;
					dudePinSprite.x = 1800;
					setTimeout(eatenByHole,4000);
					hitHole = true;
				}

				if (hitHole && (dudeSwimStill.width > 1)) {
					dudeSwimStill.inHole(star,2,4);
					dudeSwimStill.update();
				}

				// Black hole
				if (everyinterval(900)) {
					blackHole.x = Math.floor((Math.random() * 500) + 100);
					blackHole.y = Math.floor((Math.random() * 400) + 100);
					blackHoleGrow = true;
				}

				if (blackHoleGrow) {
					blackHole.x += -0.6;
					blackHole.y += -0.6;
					blackHole.width += 1.2;
					blackHole.height += 1.2;
					if (blackHole.width > 140) {
						blackHoleGrow = false;
					}
				}

				if (!blackHoleGrow && blackHole.width > 2) {
					blackHole.x += 0.6;
					blackHole.y += 0.6;
					blackHole.width += -1.2;
					blackHole.height += -1.2;
				}

				if (blackHole.width > 2) {
					blackHole.update();
				} else {
					blackHole.x = -100;
          blackHole.update();
				}

				// Hole Crash
				if (dudeSwim.crashWith(blackHole) && !dudePin && !hitBlackHole) {
					dudeSwimStill.x = dudeSwim.x;
					dudeSwimStill.y = dudeSwim.y;
					dudeSwim.x = -200;
					dudeSwim.width = 0;
					dudeSwim.height = 0;
					setTimeout(eatenByHole,4000);
					hitBlackHole = true;
				}

				if (hitBlackHole && !dudePin && (dudeSwimStill.width > 1)) {
					dudeSwimStill.inHole(blackHole,2,4);
					dudeSwimStill.update();
				}

				// Correct hole
				if (dudePinSprite.crashWith(blackHole) && dudePin && !hitBlackHole) {
					hitBlackHole = true;
					dudePiecePin.x = dudePinSprite.x;
					dudePiecePin.y = dudePinSprite.y;
					dudePinSprite.x = 1800;
					setTimeout(`loadLevel("scripts/beach.js");`,3700);
				}

				if (hitBlackHole && dudePin) {
					dudePiecePin.inHole(blackHole,4,3);
					dudePiecePin.update();
				}

			// Pin
				if (!dudePin) {
					if (everyinterval(800)) {
						pinX = Math.floor(Math.random() * 2);
						pin.y = Math.floor((Math.random() * 400) + 100);
						if (pinX == 0) {
							pin.x = -60;
						} else {
							pin.x = 760;
						}
						pinShow = true;
						setTimeout("pinShow = false",10000);
					}
				}

				if (pinShow){
					if (pinX == 0) {
						pin.speedX = 2;
					} else {
						pin.speedX = -2;
					}

					if (dudeSwim.crashWith(pin) && !dudePin) {
						dudePin = true;
						pinShow = false;
						pin.x = 1800;
						pin.speedX = 0;
            pin.speedY = 0;
            pin.update();
						dudePinSprite.x = dudeSwim.x;
						dudePinSprite.y = dudeSwim.y;
						dudePinSprite.speedX = dudeSwim.speedX;
						dudePinSprite.speedY = dudeSwim.speedY;
						dudeSwim.speedX = 0;
						dudeSwim.speedY = 0;
						if (dudePinSprite.speedX >= 0) {
							dudePinSprite.currentFrame = 6;
							dudePinSprite.direction = 'sr';
						} else {
							dudePinSprite.currentFrame = 4;
							dudePinSprite.direction = 'sl';
						}
						dudeSwim.x = 1800;
						dudeSwim.y = 1800;
            dudeSwim.update();
					} else {
						pin.pieceMove();
						pin.update();
					}
				}

				if (dudeSwim.width > 1) {
					if (!dudePin) {
						loadDudeSwimMechanics(dudeSwim,2.7,0.45);
						dudeSwim.pieceMoveSwim();
						dudeSwim.update();
					} else {
						loadDudeSwimMechanics(dudePinSprite,4,0.6);
						dudePinSprite.pieceMovePin();
						dudePinSprite.update();
					}
				}
			}
		} else {
		dark1.undarken(4,0.02);
		dark1.update();
	}
}
startGame();
