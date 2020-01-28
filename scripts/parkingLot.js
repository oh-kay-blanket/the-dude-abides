// let setup
let t9Show1 = false;
let t9Show2 = false;
let t9Show3 = false;
let scale = [0.8,1,1.2,1]
let walterCome = false;
let fight1 = false;
let fight2 = false;
let fight3 = false;
let nhilist1Down = false;
let nhilist2Down = false;
let nhilist3Down = false;
let stereoUp = false;
let carFireShow = false;
let alleyShow = false;
let donnieShow = false;
let stereoShow = false;
let ballBagShow = false;
let parkingLotShow = false;
let walterDonnie = false;
let donnieOnSide = false;
let walterOut = false;
let maudeHere = false;
let maudeCome = false;
let maudeGo = false;
let instructionsDiv = document.getElementById("instructions");

// Components
function startGame() {

	// Set
	beachBackground = new component(700, 600, '', 0, 0, 'image', 'img/beach.jpg','');
  beachBackground.morphComplete = false;
  beachBackground.morphPercent = 0;
	parkingLotBackground = new component(700, 600, '', 0, 0, 'image', 'img/parkingLot.jpg','');
	leftBorder = new component(1, 700, "", -1, 0, '', '','');
	rightBorder = new component(100, 600, '#dad7cb', 700, 0, '', '','','');
	ocean = new component(100, 600, 90, 600, 0, 'fixedSprite', 'img/ocean.png','','',3,0);
  ocean.morphComplete = false
  ocean.morphPercent = 0;
	rightBorder2 = new component(100, 600, 90, 600, 0, 'fixedSprite', 'img/alleyOutside.png','','',3,0);
	alleyDoor = new component(10, 141, 0, 600, 459, 'fixedSprite', 'img/alleyDoor.png','','', 2, 0);
	dudeDoorExit = new component(1, 600, '', 700, 0, '', '','','');
	topBorder = new component(700, 1, "", 0, -1, '', '','');
	bottomBorder = new component(700, 1, "", 0, 600, '', '','');
	stoneWall = new component(500, 80, "", 0, 0, 'image', 'img/stoneWall.png','');
  stoneWall.morphComplete = false
  stoneWall.morphPercent = 0;
	trampoline = new component(130, 130, 50, 335, 100, 'fixedSprite', 'img/trampoline.png',true,'',4,0);
  trampoline.morphComplete = false
  trampoline.morphPercent = 0;
	light = new component(160, 160, 70, 320, 85, 'image', 'img/light.png',true,'');
	bonFire = new component(120, 120, 29, 35, 440, 'fixedSprite', 'img/bonFire.png',true,'',3,0);
  bonFire.morphComplete = false
  bonFire.morphPercent = 0;
	carFire = new component(210, 210, 29, -10, 406, 'fixedSprite', 'img/carFire.png',true,'',3,0);
	fireBorder1= new component(70, 200, 'red', 0, 400, 'image', 'img/trampoline.png','','');
	fireBorder2= new component(80, 200, 'red', 80, 445, 'image', 'img/trampoline.png','','');
	fireBorder3= new component(80, 200, 'red', 120, 525, 'image', 'img/trampoline.png','','');
	sand = new component(120, 120, 50, 300, 300, 'fixedSprite', 'img/sandUp.png',true,'',3,0);
	ballBag = new component(30, 30, '', 525, 470, 'image', 'img/ballBag.png',true,'ballBag');
	stereo = new component(50, 20, 70, 80, 185, 'image', 'img/stereo.png',true,'');
  dark1 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark1.dark = true;
  dark1.darkGrade = 1;
  dark2 = new component(700, 600, "rgba(0, 0, 0, 1)", 0, 0, '','');
  dark2.dark = true;
  dark2.darkGrade = 1;

	// Talk
	talk1 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`We've got some company.`);
	talk2 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`You don't...look so good.`);
	talk3 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`Anti semite.`);
	talk4 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`And I would like my undies back.`);
	talk5 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`We got a man down.`);
	talk6 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`Let's bring him inside.`);
	talk7 = new component(`12px Tahoma`, ``, ``, ``, ``,`text`,`What will it be?`);
	talk8 = new component(`12px Tahoma`, ``, ``, ``, ``,`text`,`I thought so.`);
	talk9 = new component(`12px Tahoma`, ``, ``, ``, ``,`text`,`Ve vant zeh mahney.`);
	talk10 = new component(``, ``, ``, ``, ``,`text`,`Parking lot?`);
	talk11 = new component(`11px "Arial Black"`, ``, ``, ``, ``,`text`,`I need a weapon.`);
  talk12 = new component(`18px Arial`, ``, ``, ``, ``,`text`,`A - Swing Left    D - Swing Right`);
  talk13 = new component(`18px Arial`, ``, ``, ``, ``,`text`,`A - Throw Left    D - Throw Right`);

	// Characters
	dude.x = 338;
	dude.y = 325;
	dude.speedX = 0;
	dude.speedY = 0;
	dude.direction = 'dl';
	dude.currentFrame = 0;
  dude.image.src = 'img/dude.png';
  badDudePercent = .98;

	walter.height = 40;
	walter.x = 700;
	walter.y = 500;
	walter.speedX = 0;
	walter.speedY = 0;
	walter.direction = 'ul';
	walter.currentFrame = 8;
	fallDude = new component(160, 350, "", 274, -45, 'image', 'img/badDudeFallUp.png',true,'dude');
	donnie = new component(60, 119, "", 370, -120, 'image', 'img/donnie.png',true,'',4,0);
  maude  = new component(83, 132, 50, 360, 100, 'fixedSprite', 'img/maudonnie.png',true,'',4,0);
  maude.morphComplete = false
  maude.morphPercent = 0;
	donnieSide = new component(90, 40, "", 380, 120, 'image', 'img/donnieSide.png',true,'',4,0);

	nhilist1 = new component(42, 68, "", 435, 165, 'spriteFour', 'img/nhilist1.png','ul','',16,8,0,0,0,0,40);
	nhilist1FallHorizontal = new component(112, 44, 0, 0, 0, 'fixedSprite', 'img/nhilist1FallHorizontal.png','','',2,0);
	nhilist1FallVertical = new component(42, 112, 0, 0, 0, 'fixedSprite', 'img/nhilist1FallVertical.png','','',2,0);

	nhilist2 = new component(42, 68, "", 320, 170, 'spriteFour', 'img/nhilist2.png','ur','',16,12,0,0,0,0,40);
	nhilist2FallHorizontal = new component(112, 44, 0, 0, 0, 'fixedSprite', 'img/nhilist2FallHorizontal.png','','',2,0);
	nhilist2FallVertical = new component(42, 112, 0, 0, 0, 'fixedSprite', 'img/nhilist2FallVertical.png','','',2,0);

	nhilist3 = new component(42, 68, "", 383, 60, 'spriteFour', 'img/nhilist3.png','dl','',16,0,0,0,0,0,40);
	nhilist3FallHorizontal = new component(112, 44, 0, 0, 0, 'fixedSprite', 'img/nhilist3FallHorizontal.png','','',2,0);
	nhilist3FallVertical = new component(42, 112, 0, 0, 0, 'fixedSprite', 'img/nhilist3FallVertical.png','','',2,0);

	maudeChariot = new component(55, 80, 0, -65, -160, 'fixedSprite', 'img/maudeChariot.png','','',2,0,0,0,0,0,40);

	document.getElementById("instructions").innerHTML = "";

  obstacles = [leftBorder, rightBorder, topBorder, bottomBorder, fireBorder1, fireBorder2, fireBorder3, stoneWall, walter, nhilist2, nhilist3, trampoline, donnie, maude, maudeChariot];

	nhilistObstacles = [leftBorder, rightBorder, topBorder, bottomBorder, fireBorder1, fireBorder2, fireBorder3, stoneWall, walter, trampoline, donnie, maude];

	o = 0;
	t1 = false;
	t1Show = false;
	t2Show = false;
	t3Show = false;
	t4Show = false;
	t5Show = false;
	t6Show = false;
	t7Show = false;
	t8Show = false;
	t9Show1 = false;
	t9Show2 = false;
	t9Show3 = false;
	t10 = true;
	t10Show = false;
	t11 = false;
	t11Show = false;
	scale = [0.8,1,1.2,1];
	a = 0;
  dudeFallStart = false;
  dudeFalling = false;
  dudeFallen = false;
	sandUp = false;
	h = 0;
	walterCome = false;
	fight1 = false;
	fight2 = false;
	fight3 = false;
	ballBagUp = false;
	stereoUp = false;
	nhilist1Down = false;
	nhilist2Down = false;
	nhilist3Down = false;
	carFireShow = false;
	alleyShow = false;
	donnieShow = false;
	stereoShow = false;
	ballBagShow = false;
	parkingLotShow = false;
	walterDonnie = false;
	donnieOnSide = false;
	walterOut = false;
	doorOpen = false;
	maudeHere = false;
	maudeCome = false;
	maudeGo = false;
	dudeGotHit = false;
	myGameArea.start();
	dude.update();
	walter.update();
}

// Game over
function gameOver() {
	myGameArea.stop();
	myGameArea.clear();
	box.innerHTML = '<div class="pop"><h1>Thanks for playing</h1><p>The Dude Abides was built entirely by Michael Plunkett using Javascript and HTML Canvas. It was inspired by the works of the Coen Brothers and David Lynch.</p><div id="pop-end-buttons"><button class="button" onclick="location.reload()">Play Again</button><button class="button" onclick="frontPage()">Mr. Plunkett</button></div></div>';
}

function frontPage() {
	window.location.href = "https://mrplunkett.com";
}

// Running game

function updateGameArea() {

  // Set pieces
	myGameArea.clear();
	myGameArea.frameNo += 1;

  // Dude movement mechanics
  if (dudeFallen) {
    loadDudeMechanics();

  	// Parking lot
  	if (!parkingLotShow) {
  		beachBackground.update();
  	} else if (beachBackground.morphComplete) {
  		parkingLotBackground.update();
      light.update();
      trampoline.y = -800;
      trampoline.update();
  	} else {
      beachBackground.morphInto(parkingLotBackground);
      trampoline.morphInto(light);
    }

  	leftBorder.update();
  	topBorder.update();
  	bottomBorder.update();

  	// Changing set

  	// Car fire
  	if (!carFireShow) {
  		bonFire.update();
  	} else if (bonFire.morphComplete) {
  		carFire.update();
  	} else {
      bonFire.morphInto(carFire);
    }

  	// Alley
  	if (!alleyShow) {
  		stoneWall.update();
			rightBorder2.update();
			ocean.update();
  	} else if (stoneWall.morphComplete) {
  		alleyDoor.update();
			if (rightBorder.x != 600) {
				rightBorder.x = 600;
				rightBorder.update();
			}
  		trampoline.fillStyle = 0;
  		maude.type = 'fixedSprite';
  		maude.fillStyle = 0;
  		maude.currentFrame = 1;
  	} else {
      stoneWall.morphInto(alleyDoor);
			ocean.morphInto(rightBorder2);
			if (dude.right > 600) {
				dude.speedX = -3;
			}
			if (walter.right > 600) {
				walter.speedX = -3;
			}
			if (nhilist1FallVertical.right > 600 || nhilist1FallHorizontal.right > 600) {
				nhilist1FallVertical.x -= 3;
				nhilist1FallVertical.update();
				nhilist1FallHorizontal.x -= 3;
				nhilist1FallHorizontal.update();
			}
    }

    // Nhilist 3 behind trampoline
    if (!fight3) {
      nhilist3.update();
    }

    if (!parkingLotShow) {
      trampoline.update();
    }

  	// Donnie
  	if (!donnieShow) {
      maude.update();
  	} else if (donnieShow && !maude.morphComplete) {
			if (donnie.y != 106) {
				donnie.y = 106;
				donnie.update();
			}
			maude.morphInto(donnie);
    } else {
      if (!donnieOnSide) {
        donnie.update();
      } else {
        donnie.x = 1800;
        donnie.update();
      }
    }

  	// Stereo
  	if (stereoShow && !stereoUp) {
  		stereo.update();
  	}

  	// Nhilists
  	if (fight1) {
  		nhilist1.update();
  	} else if (nhilist1FallHorizontal.fall) {
  		nhilist1.x = 1800;
			nhilist1.update();
  		nhilist1.speedX = 0;
  		nhilist1.speedY = 0;
  		nhilist1FallHorizontal.update();
  	} else if (nhilist1FallVertical.fall) {
  		nhilist1.x = 1800;
			nhilist1.update();
  		nhilist1.speedX = 0;
  		nhilist1.speedY = 0;
  		nhilist1FallVertical.update();
  	} else {
      nhilist1.update();
    }

  	if (fight2) {
      walter.shove(nhilist2);
  		nhilist2.update();
  	} else if (nhilist2FallHorizontal.fall) {
  		nhilist2.x = 1800;
  		nhilist2.speedX = 0;
  		nhilist2.speedY = 0;
  		nhilist2FallHorizontal.update();
  	} else if (nhilist2FallVertical.fall) {
  		nhilist2.x = 1800;
  		nhilist2.speedX = 0;
  		nhilist2.speedY = 0;
  		nhilist2FallVertical.update();
  	} else {
      nhilist2.update();
    }

  	if (fight3) {
      walter.shove(nhilist3);
  		nhilist3.update();
  	} else if (nhilist3FallHorizontal.fall) {
  		nhilist3.x = 1800;
  		nhilist3.speedX = 0;
  		nhilist3.speedY = 0;
  		nhilist3FallHorizontal.update();
  	} else if (nhilist3FallVertical.fall) {
  		nhilist3.x = 1800;
  		nhilist3.speedX = 0;
  		nhilist3.speedY = 0;
  		nhilist3FallVertical.update();
  	}

    if (ballBagShow && !ballBagUp) {
  		ballBag.pieceMove();
  		ballBag.update();
  	}

  	// Ball bag & stereo under Walter facing up
  	if (ballBagShow && ballBagUp && walter.currentFrame > 7) {
  		ballBag.pieceMove();
  		ballBag.update();
  	}
  	if (stereoShow && stereoUp && walter.currentFrame > 7) {
  		stereo.update();
  	}

  	// Walter
		walter.inOcean(1.2,77);
    walter.pieceMoveFourWays();
    walter.update();
  	walter.behindObject();


  	// Ball bag & stereo over Walter facing down
  	if (ballBagShow && ballBagUp && walter.currentFrame < 8) {
  		ballBag.pieceMove();
  		ballBag.update();
  	}
  	if (stereoShow && stereoUp && walter.currentFrame < 8) {
  		stereo.update();
  	}

  	// Walter follow dude
  	if (walterCome) {
  		walter.follow(dude,1.2,60,75);

      // Morph into badDude when far from Walter
      if (((Math.abs(walter.x - dude.x) < 100) && (Math.abs(walter.y - dude.y) < 100)) && badDudePercent > 0.02) {
        badDudePercent -= 0.01;
      } else if (badDudePercent < 0.98) {
        badDudePercent += 0.01;
      }

  		// Walter boundries
  		if (walter.right < 590) {
  			walter.obstacleCheck();
  		}
  	}

  	// Walter Out
  	if (walterOut) {
  		// X
  		if (walter.x < 530) {
  			walter.speedX = .4;
  		} else {
  			walter.speedX = 0;
  		}

  		// Y
  		if (walter.y < 500) {
  			walter.speedY = .4;
  		} else {
  			walter.speedY = 0;
  			if (walter.x < 550) {
  				walter.speedX = 0.4;
  				alleyDoor.currentFrame = 1;
					if (rightBorder.height != 500) {
						rightBorder.height = 500;
						rightBorder.update();
	  				maudeHere = true;
	  				maudeCome = true;
					}
  			} else if ((walter.x > 550) && (walter.x < 660)) {
  				walter.speedX = 0.4;
  			} else {
  	      walter.speedX = 4;
  	    }
  		}
			walter.shove(dude);
  	}

  	// Walter donnie
  	if (walterDonnie) {
  		walter.follow(donnie,2.5,5,5);
  		if (walter.crashWith(donnie)) {
  			walterDonnie = false;
  			walter.speedX = 0;
  			walter.speedY = 0;
  			setTimeout("t6Show = true",1000);
  			setTimeout("t6Show = false;donnie.y = -100; donnieOnSide = true;walterOut = true;",4000);
  		}
  	}

  	// Walter greet
  	if (walter.meetWith(dude, 30) && !t1) {
  		t1 = true;
  		t1Show = true;
  		setTimeout("t1Show = false;",2000);
  		setTimeout("t2Show = true;fight1 = true;",3000);
  		setTimeout("t2Show = false;carFireShow = true;",6000);
  	}

  	// Nhilist 1 fight
  	if (fight1) {

  		// Chase dude
  		nhilist1.follow(dude,0.5,0,0);
  		nhilist1.obstacleCheck();
  		nhilist1.pieceMoveFourWays();
  		nhilist1.behindObject(nhilistObstacles);

  		// If hits dude
  		if (dude.crashWith(nhilist1)) {
  			t9Show1 = true;
  			dude.fallDown(nhilist1);
  		}

  		// If Walter hits
  		if (nhilist1.crashWith(walter)) {
  			nhilist1.fallDown(walter,'',nhilist1FallHorizontal,nhilist1FallVertical);
  			fight1 = false;
  			stereoUp = false;
  			t3Show = true;
  			setTimeout("t3Show = false;",2000);
  			setTimeout("alleyShow = true;",3000);
  			setTimeout("fight2 = true;stoneWall.y = -200;stoneWall.update();stereoShow = true;",6000);
  		}
  	}

  	// Nhilist 2 fight
  	if (fight2) {

  		// Chase dude
  		nhilist2.follow(dude,0.5,0,0);
  		nhilist2.obstacleCheck();
  		nhilist2.pieceMoveFourWays();

  		// If hit dude
  		nhilist2.behindObject(nhilistObstacles);
  		if (dude.crashWith(nhilist2)) {
  			t9Show2 = true;
  			dude.fallDown(nhilist2);
  		}

  		// Walter says he needs a weapon
  		if (walter.borderlessCrashWith(nhilist2) && !stereoUp) {
  			t11Show = true;
  			setTimeout('t11Show = false;', 1500);
  		}

  		// Walter picks up stereo
  		if (walter.borderlessCrashWith(stereo) && stereoShow && !stereoUp) {
  			stereoUp = true;
  		}

  		// Walter holding stereo
      if (stereoUp) {

        // Show hit help
        t12Show = true;

  			// Swing stereo left
  			if (myGameArea.keys[65]) {
  				stereo.x = walter.x - 40;
  				stereo.y = walter.y + 20;

  				// Hit nhilist with stereo
  				if (nhilist2.borderlessCrashWith(stereo)) {
  					nhilist2.fallDown(walter,'',nhilist2FallHorizontal,nhilist2FallVertical);
  					fight2 = false;
  					stereoUp = false;
            t12Show = false;
  					t4Show = true;
  					setTimeout("t4Show = false;",2000);
  					setTimeout("ballBagShow = true;parkingLotShow = true;",3000);
  					setTimeout("fight3 = true;",6000);
  				}

  			// Swing stereo right
  			} else if (myGameArea.keys[68]) {
  				stereo.x = walter.x + walter.width - 10;
  				stereo.y = walter.y + 20;

  				// Hit nhilist with stereo
  				if (nhilist2.borderlessCrashWith(stereo)) {
  					nhilist2.fallDown(walter,'',nhilist2FallHorizontal,nhilist2FallVertical);
  					fight2 = false;
  					stereoUp = false;
            t12Show = false;
  					t4Show = true;
  					setTimeout("t4Show = false;",2000);
  					setTimeout("ballBagShow = true;parkingLotShow = true;",3000);
  					setTimeout("fight3 = true;",6000);
  				}

  			// Stereo not swinging, but being held by Walter
  			} else {
  				if (walter.currentFrame < 8) {
  					stereo.x = walter.x + 10;
  					stereo.y = walter.y + 37;
  				} else if (walter.currentFrame > 7) {
  					stereo.x = walter.x + 10;
  					stereo.y = walter.y + 33;
  				}
  			}
  			stereo.pieceMove();
  		}
  	}

  	// Nhilist 3 fight
  	if (fight3) {

  		// Chase dude
      nhilist3.follow(dude,0.5,0,0);
  		nhilist3.obstacleCheck();
  		nhilist3.pieceMoveFourWays();
  		nhilist3.behindObject(nhilistObstacles);

  		// If hit dude
  		if (dude.crashWith(nhilist3)) {
  			t9Show3 = true;
  			dude.fallDown(nhilist3);
  		}

  		// Walter says he needs a weapon
  		if (walter.borderlessCrashWith(nhilist3) && fight3 && !ballBagUp) {
  			t11Show = true;
  			setTimeout('t11Show = false;', 1500);
  		}

  		// Walter pickup ball bag
  		if (walter.borderlessCrashWith(ballBag) && fight3 && !ballBagUp && ballBag.speedX == 0) {
  			ballBagUp = true;
  			ballBag.image.src = 'img/ballBag.png';
  		}

  		// Keep ball bag in reachable areas for Walter
  		if (ballBag.borderlessCrashWith(carFire) ||
  		ballBag.borderlessCrashWith(trampoline)) {
  			ballBag.speedX = 0;
  			ballBag.x += 25;
  		}

  		if (ballBag.x > 525) {
  			ballBag.x = 525;
  		}

  		if (ballBag.x < 50) {
  			ballBag.x += 40;
  		}

  		// Walter holding ball bag
  		if (ballBagUp) {

  			// Bag follow Walter
  			if (ballBag.speedX == 0) {
  				ballBag.x = walter.x + 20;
  				ballBag.y = walter.y + 35;

          // Show hit help
          t13Show = true;
  			}

  			// Throw bag left
  			if (myGameArea.keys[65] && ballBag.speedX == 0) {
  				ballBag.speedX = -3;
          t13Show = false;
  				ballBag.image.src = 'img/ballBagLeft.png';
  				setTimeout("ballBag.speedX=0; ballBagUp = false;",700);
  			}

  			// Throw bag right
  			if (myGameArea.keys[68] && ballBag.speedX == 0) {
  				ballBag.speedX = 3;
          t13Show = false;
  				ballBag.image.src = 'img/ballBagRight.png';
  				setTimeout("ballBag.speedX=0; ballBagUp = false;",700);
  			}

  			// Bag hits nhilist3
  			if (nhilist3.borderlessCrashWith(ballBag) && ballBag.speedX != 0) {
  				ballBag.speedX = 0;
  				nhilist3.fallDown(walter,'',nhilist3FallHorizontal,nhilist3FallVertical);
  				fight3 = false;
          t13Show = false;
  				setTimeout("donnieShow = true;",4000);
  				setTimeout("walterCome = false;walterDonnie = true;t5Show = true",5000);
  				setTimeout("t5Show = false",7000);
        }
  		}
  	}

  	// Donnie dead
  	if (donnieOnSide) {
  		donnieSide.x = walter.x - 25;
  		donnieSide.y = walter.y + 28;
  		donnieSide.pieceMove();
  		donnieSide.update();
  	}

  	// Maude chariot update
  	if (maudeHere) {
  		maudeChariot.pieceMove();
      if (t7Show) {
        if (Math.random() > 0.015) {
          maudeChariot.update();
        }
      } else {
        maudeChariot.update();
      }

      // Morph into badDude when far from maudeChariot
      if (dude.currentFrame < 8 && badDudePercent > 0.01) {
        badDudePercent -= 0.007;
      } else if (badDudePercent < 0.99) {
        badDudePercent += 0.007;
      }

  		// Her entering
  		if (maudeCome) {
  			maudeChariot.speedY = 0.6;
        maudeChariot.speedX = 0.6;
  			if (maudeChariot.y > 80) {
  				maudeChariot.speedY = 0;
          maudeChariot.speedX = 0;
  				maudeCome = false;
  				t7Show = true;
  				setTimeout("t7Show = false;",4000);
  			}
  		}

  		// Dude gets in chariot
  		if (dude.crashWith(maudeChariot)) {
  			maudeChariot.currentFrame = 1;
  			dude.x = 3000;
  			setTimeout("maudeChariot.speedY = -0.6;maudeChariot.speedX = -0.6;t8Show = true;",1000);
  			setTimeout("t8Show = false;",3000);
  			setTimeout(gameOver,10000);
  		}
  	}

  	// Dude normal updates
		if (!dudeGotHit) {
			dude.inOcean(2,68);
			dude.pieceMoveFourWays();
      dudeSwitch();
			dude.update();
			dude.behindObject();
		}

		if (h < 120) {
			sand.update();
			h++;
		}

		if (t10) {
			t10 = false;
			setTimeout("t10Show = true;",2500)
			setTimeout("t10Show = false;",4500);
		}

		if (alleyShow && stoneWall.morphComplete) {
			rightBorder2.update();
		}

  	// Dude leaves via bowling alley
  	if (dude.crashWith(dudeDoorExit) && donnieOnSide) {
  		gameOver();
  	}

  	// Talks
  	if (t1Show){
      walter.talk(talk1,50,70);
  	}
  	if (t2Show){
  		walter.talk(talk2,50,70);
  	}
  	if (t3Show){
  		walter.talk(talk3,50,70);
  	}
  	if (t4Show){
  		walter.talk(talk4,50,70);
  	}
  	if (t5Show){
  		walter.talk(talk5,50,70);
  	}
  	if (t6Show){
  		walter.talk(talk6,50,70);
  	}
  	if (t7Show){
      maudeChariot.talk(talk7,30,40);
  	}
  	if (t8Show){
  		maudeChariot.talk(talk8,30,40);
  	}
  	if (t9Show1){
      nhilist1.talk(talk9,50,70);
  	}
  	if (t9Show2){
  		nhilist2.talk(talk9,50,70);
  	}
  	if (t9Show3){
  		nhilist3.talk(talk9,50,70);
  	}
  	if (t10Show){
  		//dude.talk(talk10,50,70);
  	}
  	if (t11Show){
  		walter.talk(talk11,50,70);
  	}
    if (t12Show){
  		walter.talk(talk12,'','','instructions');
  	}
    if (t13Show){
  		walter.talk(talk13,'','','instructions');
  	}
  } else {

    dark2.update();
    trampoline.update();
    maude.update();

    // undarkening set
    if (dark1.darkGrade == 1) {
      setTimeout("dudeFalling=true;",9000);
      setTimeout("dudeFalling=false;dudeFallen=true",9600);
      setTimeout("walterCome = true;",11000);
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
  }
}

startGame();
