
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvasX = 0;
var canvasY = 0;
var BX = [40, 80, 120, 160, 200, 240, 280, 320, 40, 80, 120, 160, 200, 240, 280, 320];
var BY = [80, 80, 80, 80, 80, 80, 80, 80, 40, 40, 40, 40, 40, 40, 40, 40];
var WX = [40, 80, 120, 160, 200, 240, 280, 320, 40, 80, 120, 160, 200, 240, 280, 320];
var WY = [280, 280, 280, 280, 280, 280, 280, 280, 320, 320, 320, 320, 320, 320, 320, 320];
var Bpmove;
var Wpmove;
var Btower1move;
var Btower2move;
var Wtower1move;
var Wtower2move;
var Bhorse1move;
var Bhorse2move;
var Whorse1move;
var Whorse2move;
var Brunner1move;
var Brunner2move;
var Wrunner1move;
var Wrunner2move;
var Bqueenmove;
var Wqueenmove;
var Bkingmove;
var Wkingmove;
var turn = true;
var AI = false;
var AI_MOVE;


function Drawgamefield() {

	function DrawWhite(ctx) {
		ctx.fillStyle = "#ffa64d";
		var x, y, count;
		x = 40;
		y = 40;
		count = 0;
		for (var i = 0; i < 32; i++) {
			ctx.fillRect(x, y, 40, 40);
			x += 80;
			count++;
			if (count == 4) {
				y += 40;
				x -= 360;
				if (x == 0) {
					x = 80;
				}
				count = 0;
			}
		}
	}
	function DrawBlack(ctx) {
		ctx.fillStyle = "#663300";
		var x, y, count;
		x = 80;
		y = 40;
		count = 0;
		for (var i = 0; i < 32; i++) {
			ctx.fillRect(x, y, 40, 40);
			x += 80;
			count++;
			if (count == 4) {
				y += 40;
				x -= 360;
				if (x == 0) {
					x = 80;
				}
				count = 0;
			}
		}
	}

	DrawBlack(ctx);
	DrawWhite(ctx);
}

function DrawPieces() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	Drawgamefield();

	var Black_pawn_one = new Image();
	Black_pawn_one.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_one, BX[0], BY[0], 40, 40);

	var Black_pawn_two = new Image();
	Black_pawn_two.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_two, BX[1], BY[1], 40, 40);

	var Black_pawn_three = new Image();
	Black_pawn_three.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_three, BX[2], BY[2], 40, 40);

	var Black_pawn_four = new Image();
	Black_pawn_four.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_four, BX[3], BY[3], 40, 40);

	var Black_pawn_five = new Image();
	Black_pawn_five.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_five, BX[4], BY[4], 40, 40);

	var Black_pawn_six = new Image();
	Black_pawn_six.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_six, BX[5], BY[5], 40, 40);

	var Black_pawn_seven = new Image();
	Black_pawn_seven.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_seven, BX[6], BY[6], 40, 40);

	var Black_pawn_eight = new Image();
	Black_pawn_eight.src = 'Bilder/Black_pawn.png';
	ctx.drawImage(Black_pawn_eight, BX[7], BY[7], 40, 40);

	var Black_tower_one = new Image();
	Black_tower_one.src = 'Bilder/Black_tower.png';
	ctx.drawImage(Black_tower_one, BX[8], BY[8], 40, 40);

	var Black_tower_two = new Image();
	Black_tower_two.src = 'Bilder/Black_tower.png';
	ctx.drawImage(Black_tower_two, BX[15], BY[15], 40, 40);

	var Black_horse_one = new Image();
	Black_horse_one.src = 'Bilder/Black_horse.png';
	ctx.drawImage(Black_horse_one, BX[9], BY[9], 40, 40);

	var Black_horse_two = new Image();
	Black_horse_two.src = 'Bilder/Black_horse.png';
	ctx.drawImage(Black_horse_two, BX[14], BY[14], 40, 40);

	var Black_runner_one = new Image();
	Black_runner_one.src = 'Bilder/Black_runner.png';
	ctx.drawImage(Black_runner_one, BX[10], BY[10], 40, 40);

	var Black_runner_two = new Image();
	Black_runner_two.src = 'Bilder/Black_runner.png';
	ctx.drawImage(Black_runner_two, BX[13], BY[13], 40, 40);

	var Black_king = new Image();
	Black_king.src = 'Bilder/Black_king.png';
	ctx.drawImage(Black_king, BX[11], BY[11], 40, 40);

	var Black_queen = new Image();
	Black_queen.src = 'Bilder/Black_queen.png';
	ctx.drawImage(Black_queen, BX[12], BY[12], 40, 40);

	var White_pawn_one = new Image();
	White_pawn_one.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_one, WX[0], WY[0], 40, 40);

	var White_pawn_two = new Image();
	White_pawn_two.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_two, WX[1], WY[1], 40, 40);

	var White_pawn_three = new Image();
	White_pawn_three.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_three, WX[2], WY[2], 40, 40);

	var White_pawn_four = new Image();
	White_pawn_four.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_four, WX[3], WY[3], 40, 40);

	var White_pawn_five = new Image();
	White_pawn_five.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_five, WX[4], WY[4], 40, 40);

	var White_pawn_six = new Image();
	White_pawn_six.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_six, WX[5], WY[5], 40, 40);

	var White_pawn_seven = new Image();
	White_pawn_seven.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_seven, WX[6], WY[6], 40, 40);

	var White_pawn_eight = new Image();
	White_pawn_eight.src = 'Bilder/White_pawn.png';
	ctx.drawImage(White_pawn_eight, WX[7], WY[7], 40, 40);

	var White_tower_one = new Image();
	White_tower_one.src = 'Bilder/White_tower.png';
	ctx.drawImage(White_tower_one, WX[8], WY[8], 40, 40);

	var White_tower_two = new Image();
	White_tower_two.src = 'Bilder/White_tower.png';
	ctx.drawImage(White_tower_two, WX[15], WY[15], 40, 40);

	var White_horse_one = new Image();
	White_horse_one.src = 'Bilder/White_horse.png';
	ctx.drawImage(White_horse_one, WX[9], WY[9], 40, 40);

	var White_horse_two = new Image();
	White_horse_two.src = 'Bilder/White_horse.png';
	ctx.drawImage(White_horse_two, WX[14], WY[14], 40, 40);

	var White_runner_one = new Image();
	White_runner_one.src = 'Bilder/White_runner.png';
	ctx.drawImage(White_runner_one, WX[10], WY[10], 40, 40);

	var White_runner_two = new Image();
	White_runner_two.src = 'Bilder/White_runner.png';
	ctx.drawImage(White_runner_two, WX[13], WY[13], 40, 40);

	var White_king = new Image();
	White_king.src = 'Bilder/White_king.png';
	ctx.drawImage(White_king, WX[11], WY[11], 40, 40);

	var White_queen = new Image();
	White_queen.src = 'Bilder/White_queen.png';
	ctx.drawImage(White_queen, WX[12], WY[12], 40, 40);

	if (turn) {
		turn = false;
	}
	else {
		turn = true;
	}

	while (turn && AI) {
		if (AI) {
			AI_MOVE = Math.floor(Math.random() * 16);
		}
		if (AI_MOVE < 8) {
			BpMoving();
		}
		if (AI_MOVE == 8) {
			Btower1Move();
		}
		if (AI_MOVE == 9) {
			Bhorse1Move();
		}
		if (AI_MOVE == 10) {
			Brunner1Move();
		}
		if (AI_MOVE == 11) {
			BkingMove();
		}
		if (AI_MOVE == 12) {
			BqueenMove();
		}
		if (AI_MOVE == 13) {
			Brunner2Move();
		}
		if (AI_MOVE == 14) {
			Bhorse2Move();
		}
		if (AI_MOVE == 15) {
			Btower2Move();
		}
	}

	if (BX[11] == 360 && BY[11] == 360) {
		ctx.fillStyle = "white";
		ctx.fillRect(canvas.width/2, canvas.height/2, 130, 10);
		ctx.fillRect(canvas.width/2, canvas.height/2, -130, 10);
		ctx.fillRect(canvas.width/2, canvas.height/2, 130, -50);
		ctx.fillRect(canvas.width/2, canvas.height/2, -130, -50);
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.font = "50px Arial";
		ctx.fillText("White Wins", canvas.width/2, canvas.height/2);
		AI = false;
	}

	if (WX[11] == 0 && WY[11] == 0) {
		ctx.fillStyle = "black";
		ctx.fillRect(canvas.width/2, canvas.height/2, 130, 10);
		ctx.fillRect(canvas.width/2, canvas.height/2, -130, 10);
		ctx.fillRect(canvas.width/2, canvas.height/2, 130, -50);
		ctx.fillRect(canvas.width/2, canvas.height/2, -130, -50);
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.font = "50px Arial";
		ctx.fillText("White Wins", canvas.width/2, canvas.height/2);
		AI = false;
	}
}

//Funktionen kollar vart man klickar
function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {canvasX, canvasY}
}


function Bp() {
	if (turn) {
		for (var i = 0; i < 8; i++) {
			if (BX[i] < canvasX && canvasX < (BX[i] + 40) && BY[i] < canvasY && canvasY < (BY[i] + 40)) {
				Bpawn = i;
				Bpmove = true;
			}
		}
	}
}

function BpMoving() {
	if (turn) {
		if (AI) {
			Bpmove = true;
			Bpawn = AI_MOVE;
			canvasX = Math.floor(Math.random() * 3) * 40 + BX[Bpawn] - 75;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}
	if (Bpmove == true) {
		var i = Bpawn;
		if (BX[i] < canvasX && canvasX < (BX[i] + 40) && BY[i] < canvasY && canvasY < (BY[i] + 40)) {
			Bpmove = true;
		}
		
		else if (BX[i] < canvasX && canvasX < (BX[i] + 40) && (BY[i] + 40) < canvasY && canvasY < (BY[i] + 80) //vart jag klickar/vart den ska
			&& ((BY[i] + 40) != BY[1] || BX[i] != BX[1]) && ((BY[i] + 40) != BY[2] || BX[i] != BX[2]) && ((BY[i] + 40) != BY[3] || BX[i] != BX[3])
			&& ((BY[i] + 40) != BY[4] || BX[i] != BX[4]) && ((BY[i] + 40) != BY[5] || BX[i] != BX[5]) && ((BY[i] + 40) != BY[6] || BX[i] != BX[6])
			&& ((BY[i] + 40) != BY[7] || BX[i] != BX[7]) && ((BY[i] + 40) != BY[8] || BX[i] != BX[8]) && ((BY[i] + 40) != BY[9] || BX[i] != BX[9])
			&& ((BY[i] + 40) != BY[10] || BX[i] != BX[10]) && ((BY[i] + 40) != BY[11] || BX[i] != BX[11]) && ((BY[i] + 40) != BY[12] || BX[i] != BX[12])
			&& ((BY[i] + 40) != BY[13] || BX[i] != BX[13]) && ((BY[i] + 40) != BY[14] || BX[i] != BX[14]) && ((BY[i] + 40) != BY[15] || BX[i] != BX[15])
			&& ((BY[i] + 40) != WY[0] || BX[i] != WX[0]) && ((BY[i] + 40) != WY[1] || BX[i] != WX[1]) && ((BY[i] + 40) != WY[2] || BX[i] != WX[2])
			&& ((BY[i] + 40) != WY[3] || BX[i] != WX[3]) && ((BY[i] + 40) != WY[4] || BX[i] != WX[4]) && ((BY[i] + 40) != WY[5] || BX[i] != WX[5])
			&& ((BY[i] + 40) != WY[6] || BX[i] != WX[6]) && ((BY[i] + 40) != WY[7] || BX[i] != WX[7]) && ((BY[i] + 40) != WY[8] || BX[i] != WX[8])
			&& ((BY[i] + 40) != WY[9] || BX[i] != WX[9]) && ((BY[i] + 40) != WY[10] || BX[i] != WX[10]) && ((BY[i] + 40) != WY[11] || BX[i] != WX[11])
			&& ((BY[i] + 40) != WY[12] || BX[i] != WX[12]) && ((BY[i] + 40) != WY[13] || BX[i] != WX[13]) && ((BY[i] + 40) != WY[14] || BX[i] != WX[14])
			&& ((BY[i] + 40) != WY[15] || BX[i] != WX[15]) && ((BY[i] + 40) != BY[0] || BX[i] != BX[0])  //Så att pjäserna inte går in i varandra
			&& (BY[i] + 40) != 360) { // Så att pjäsen inte går utanför spelplanen;

			BY[i] += 40;
			DrawPieces();
			Bpmove = false;
		}
		else if (BX[i] < canvasX && canvasX < (BX[i] + 40) && (BY[i] + 80) < canvasY && canvasY < (BY[i] + 120)
			&& BY[i] == 80 // Kollar att man inte flyttat på pjäsen innan. 
			&& ((BY[i] + 80) != BY[1] || BX[i] != BX[1]) && ((BY[i] + 80) != BY[2] || BX[i] != BX[2]) && ((BY[i] + 80) != BY[3] || BX[i] != BX[3])
			&& ((BY[i] + 80) != BY[4] || BX[i] != BX[4]) && ((BY[i] + 80) != BY[5] || BX[i] != BX[5]) && ((BY[i] + 80) != BY[6] || BX[i] != BX[6])
			&& ((BY[i] + 80) != BY[7] || BX[i] != BX[7]) && ((BY[i] + 80) != BY[8] || BX[i] != BX[8]) && ((BY[i] + 80) != BY[9] || BX[i] != BX[9])
			&& ((BY[i] + 80) != BY[10] || BX[i] != BX[10]) && ((BY[i] + 80) != BY[11] || BX[i] != BX[11]) && ((BY[i] + 80) != BY[12] || BX[i] != BX[12])
			&& ((BY[i] + 80) != BY[13] || BX[i] != BX[13]) && ((BY[i] + 80) != BY[14] || BX[i] != BX[14]) && ((BY[i] + 80) != BY[15] || BX[i] != BX[15])
			&& ((BY[i] + 80) != WY[0] || BX[i] != WX[0]) && ((BY[i] + 80) != WY[1] || BX[i] != WX[1]) && ((BY[i] + 80) != WY[2] || BX[i] != WX[2])
			&& ((BY[i] + 80) != WY[3] || BX[i] != WX[3]) && ((BY[i] + 80) != WY[4] || BX[i] != WX[4]) && ((BY[i] + 80) != WY[5] || BX[i] != WX[5])
			&& ((BY[i] + 80) != WY[6] || BX[i] != WX[6]) && ((BY[i] + 80) != WY[7] || BX[i] != WX[7]) && ((BY[i] + 80) != WY[8] || BX[i] != WX[8])
			&& ((BY[i] + 80) != WY[9] || BX[i] != WX[9]) && ((BY[i] + 80) != WY[10] || BX[i] != WX[10]) && ((BY[i] + 80) != WY[11] || BX[i] != WX[11])
			&& ((BY[i] + 80) != WY[12] || BX[i] != WX[12]) && ((BY[i] + 80) != WY[13] || BX[i] != WX[13]) && ((BY[i] + 80) != WY[14] || BX[i] != WX[14])
			&& ((BY[i] + 80) != WY[15] || BX[i] != WX[15]) && ((BY[i] + 40) != BY[0] || BX[i] != BX[0])) {

			BY[i] += 80;
			DrawPieces();
			Bpmove = false;
		}
		else if ((BX[i] + 40) < canvasX && canvasX < (BX[i] + 80) && (BY[i] + 40) < canvasY && canvasY < (BY[i] + 80)) {
			if  (((BY[i] + 40) == WY[0] && (BX[i] + 40) == WX[0]) || ((BY[i] + 40) == WY[1] && (BX[i] + 40) == WX[1]) 
				|| ((BY[i] + 40) == WY[2] && (BX[i] + 40) == WX[2]) || ((BY[i] + 40) == WY[3] && (BX[i] + 40) == WX[3]) 
				|| ((BY[i] + 40) == WY[4] && (BX[i] + 40) == WX[4]) || ((BY[i] + 40) == WY[5] && (BX[i] + 40) == WX[5]) 
				|| ((BY[i] + 40) == WY[6] && (BX[i] + 40) == WX[6]) || ((BY[i] + 40) == WY[7] && (BX[i] + 40) == WX[7]) 
				|| ((BY[i] + 40) == WY[8] && (BX[i] + 40) == WX[8]) || ((BY[i] + 40) == WY[9] && (BX[i] + 40) == WX[9]) 
				|| ((BY[i] + 40) == WY[10] && (BX[i] + 40) == WX[10]) || ((BY[i] + 40) == WY[11] && (BX[i] + 40) == WX[11])
				|| ((BY[i] + 40) == WY[12] && (BX[i] + 40) == WX[12]) || ((BY[i] + 40) == WY[13] && (BX[i] + 40) == WX[13]) 
				|| ((BY[i] + 40) == WY[14] && (BX[i] + 40) == WX[14]) || ((BY[i] + 40) == WY[15] && (BX[i] + 40) == WX[15]) 
				&& ((BY[i] + 40) != BY[1] || (BX[i] + 40) != BX[1]) && ((BY[i] + 40) != BY[2] || (BX[i] + 40) != BX[2])
				&& ((BY[i] + 40) != BY[3] || (BX[i] + 40) != BX[3]) && ((BY[i] + 40) != BY[4] || (BX[i] + 40) != BX[4]) 
				&& ((BY[i] + 40) != BY[5] || (BX[i] + 40) != BX[5]) && ((BY[i] + 40) != BY[6] || (BX[i] + 40) != BX[6]) 
				&& ((BY[i] + 40) != BY[7] || (BX[i] + 40) != BX[7]) && ((BY[i] + 40) != BY[8] || (BX[i] + 40) != BX[8])
				&& ((BY[i] + 40) != BY[9] || (BX[i] + 40) != BX[9]) && ((BY[i] + 40) != BY[10] || (BX[i] + 40) != BX[10]) 
				&& ((BY[i] + 40) != BY[11] || (BX[i] + 40) != BX[11]) && ((BY[i] + 40) != BY[12] || (BX[i] + 40) != BX[12]) 
				&& ((BY[i] + 40) != BY[13] || (BX[i] + 40) != BX[13]) && ((BY[i] + 40) != BY[14] || (BX[i] + 40) != BX[14])
				&& ((BY[i] + 40) != BY[15] || (BX[i] + 40) != BX[15]) && ((BY[i] + 40) != BY[0] || (BX[i] + 40) != BX[0])) {

				BY[i] += 40;
				BX[i] += 40;

				for (var n = 0; n < 16; n++) {
					if (BY[i] == WY[n] && BX[i] == WX[n]) {
						WY[n] = 0;
						WX[n] = 0;
					}
				}
				DrawPieces();
			}
			Bpmove = false;
		}
		else if ((BX[i] - 40) < canvasX && canvasX < (BX[i]) && (BY[i] + 40) < canvasY && canvasY < (BY[i] + 80)) {
			if (((BY[i] + 40) == WY[0] && (BX[i] - 40) == WX[0]) || ((BY[i] + 40) == WY[1] && (BX[i] - 40) == WX[1]) 
				|| ((BY[i] + 40) == WY[2] && (BX[i] - 40) == WX[2]) || ((BY[i] + 40) == WY[3] && (BX[i] - 40) == WX[3]) 
				|| ((BY[i] + 40) == WY[4] && (BX[i] - 40) == WX[4]) || ((BY[i] + 40) == WY[5] && (BX[i] - 40) == WX[5]) 
				|| ((BY[i] + 40) == WY[6] && (BX[i] - 40) == WX[6]) || ((BY[i] + 40) == WY[7] && (BX[i] - 40) == WX[7]) 
				|| ((BY[i] + 40) == WY[8] && (BX[i] - 40) == WX[8]) || ((BY[i] + 40) == WY[9] && (BX[i] - 40) == WX[9]) 
				|| ((BY[i] + 40) == WY[10] && (BX[i] - 40) == WX[10]) || ((BY[i] + 40) == WY[11] && (BX[i] - 40) == WX[11])
				|| ((BY[i] + 40) == WY[12] && (BX[i] - 40) == WX[12]) || ((BY[i] + 40) == WY[13] && (BX[i] - 40) == WX[13]) 
				|| ((BY[i] + 40) == WY[14] && (BX[i] - 40) == WX[14]) || ((BY[i] + 40) == WY[15] && (BX[i] - 40) == WX[15]) 
				&& ((BY[i] + 40) != BY[1] || (BX[i] - 40) != BX[1]) && ((BY[i] + 40) != BY[2] || (BX[i] - 40) != BX[2])
				&& ((BY[i] + 40) != BY[3] || (BX[i] - 40) != BX[3]) && ((BY[i] + 40) != BY[4] || (BX[i] - 40) != BX[4]) 
				&& ((BY[i] + 40) != BY[5] || (BX[i] - 40) != BX[5]) && ((BY[i] + 40) != BY[6] || (BX[i] - 40) != BX[6]) 
				&& ((BY[i] + 40) != BY[7] || (BX[i] - 40) != BX[7]) && ((BY[i] + 40) != BY[8] || (BX[i] - 40) != BX[8])
				&& ((BY[i] + 40) != BY[9] || (BX[i] - 40) != BX[9]) && ((BY[i] + 40) != BY[10] || (BX[i] - 40) != BX[10]) 
				&& ((BY[i] + 40) != BY[11] || (BX[i] - 40) != BX[11]) && ((BY[i] + 40) != BY[12] || (BX[i] - 40) != BX[12]) 
				&& ((BY[i] + 40) != BY[13] || (BX[i] - 40) != BX[13]) && ((BY[i] + 40) != BY[14] || (BX[i] - 40) != BX[14])
				&& ((BY[i] + 40) != BY[15] || (BX[i] - 40) != BX[15])) {

				BY[i] += 40;
				BX[i] -= 40;

				for (var n = 0; n < 16; n++) {
					if (BY[i] == WY[n] && BX[i] == WX[n]) {
						WY[n] = 0;
						WX[n] = 0;
					}
				}
				DrawPieces();
			}
			Bpmove = false;
		}
		else {
			Bpmove = false;
		}
	}
}

function Wp() {
	if (turn == false) {
		for (var i = 0; i < 8; i++) {
			if (WX[i] < canvasX && canvasX < (WX[i] + 40) && WY[i] < canvasY && canvasY < (WY[i] + 40)) {
				Wpawn = i;
				Wpmove = true;	
			}
		}
	}
}

function WpMoving() {
	if (Wpmove == true) {
		var i = Wpawn;
		if (WX[i] < canvasX && canvasX < (WX[i] + 40) && WY[i] < canvasY && canvasY < (WY[i] + 40)) {
			Wpmove = true;
		}
		else if (WX[i] < canvasX && canvasX < (WX[i] + 40) && (WY[i] - 40) < canvasY && canvasY < (WY[i])  //vart jag klickar/vart den ska
			&& ((WY[i] - 40) != BY[1] || WX[i] != BX[1]) && ((WY[i] - 40) != BY[2] || WX[i] != BX[2]) && ((WY[i] - 40) != BY[3] || WX[i] != BX[3])
			&& ((WY[i] - 40) != BY[4] || WX[i] != BX[4]) && ((WY[i] - 40) != BY[5] || WX[i] != BX[5]) && ((WY[i] - 40) != BY[6] || WX[i] != BX[6])
			&& ((WY[i] - 40) != BY[7] || WX[i] != BX[7]) && ((WY[i] - 40) != BY[8] || WX[i] != BX[8]) && ((WY[i] - 40) != BY[9] || WX[i] != BX[9])
			&& ((WY[i] - 40) != BY[10] || WX[i] != BX[10]) && ((WY[i] - 40) != BY[11] || WX[i] != BX[11]) && ((WY[i] - 40) != BY[12] || WX[i] != BX[12])
			&& ((WY[i] - 40) != BY[13] || WX[i] != BX[13]) && ((WY[i] - 40) != BY[14] || WX[i] != BX[14]) && ((WY[i] - 40) != BY[15] || WX[i] != BX[15])
			&& ((WY[i] - 40) != WY[0] || WX[i] != WX[0]) && ((WY[i] - 40) != WY[1] || WX[i] != WX[1]) && ((WY[i] - 40) != WY[2] || WX[i] != WX[2])
			&& ((WY[i] - 40) != WY[3] || WX[i] != WX[3]) && ((WY[i] - 40) != WY[4] || WX[i] != WX[4]) && ((WY[i] - 40) != WY[5] || WX[i] != WX[5])
			&& ((WY[i] - 40) != WY[6] || WX[i] != WX[6]) && ((WY[i] - 40) != WY[7] || WX[i] != WX[7]) && ((WY[i] - 40) != WY[8] || WX[i] != WX[8])
			&& ((WY[i] - 40) != WY[9] || WX[i] != WX[9]) && ((WY[i] - 40) != WY[10] || WX[i] != WX[10]) && ((WY[i] - 40) != WY[11] || WX[i] != WX[11])
			&& ((WY[i] - 40) != WY[12] || WX[i] != WX[12]) && ((WY[i] - 40) != WY[13] || WX[i] != WX[13]) && ((WY[i] - 40) != WY[14] || WX[i] != WX[14])
			&& ((WY[i] - 40) != WY[15] || WX[i] != WX[15]) && ((WY[i] - 40) != BY[0] || WX[i] != BX[0])  //Så att pjäserna inte går in i varandra
			&& (WY[i] - 40) != 360) { // Så att pjäsen inte går utanför spelplanen;

			WY[i] -= 40;
			DrawPieces();
			Wpmove = false;
		}
		else if (WX[i] < canvasX && canvasX < (WX[i] + 40) && (WY[i] - 80) < canvasY && canvasY < (WY[i] - 40)
			&& WY[i] == 280 // Kollar att man inte flyttat på pjäsen innan. 
			&& ((WY[i] - 80) != BY[1] || WX[i] != BX[1]) && ((WY[i] - 80) != BY[2] || WX[i] != BX[2]) && ((WY[i] - 80) != BY[3] || WX[i] != BX[3])
			&& ((WY[i] - 80) != BY[4] || WX[i] != BX[4]) && ((WY[i] - 80) != BY[5] || WX[i] != BX[5]) && ((WY[i] - 80) != BY[6] || WX[i] != BX[6])
			&& ((WY[i] - 80) != BY[7] || WX[i] != BX[7]) && ((WY[i] - 80) != BY[8] || WX[i] != BX[8]) && ((WY[i] - 80) != BY[9] || WX[i] != BX[9])
			&& ((WY[i] - 80) != BY[10] || WX[i] != BX[10]) && ((WY[i] - 80) != BY[11] || WX[i] != BX[11]) && ((WY[i] - 80) != BY[12] || WX[i] != BX[12])
			&& ((WY[i] - 80) != BY[13] || WX[i] != BX[13]) && ((WY[i] - 80) != BY[14] || WX[i] != BX[14]) && ((WY[i] - 80) != BY[15] || WX[i] != BX[15])
			&& ((WY[i] - 80) != WY[0] || WX[i] != WX[0]) && ((WY[i] - 80) != WY[1] || WX[i] != WX[1]) && ((WY[i] - 80) != WY[2] || WX[i] != WX[2])
			&& ((WY[i] - 80) != WY[3] || WX[i] != WX[3]) && ((WY[i] - 80) != WY[4] || WX[i] != WX[4]) && ((WY[i] - 80) != WY[5] || WX[i] != WX[5])
			&& ((WY[i] - 80) != WY[6] || WX[i] != WX[6]) && ((WY[i] - 80) != WY[7] || WX[i] != WX[7]) && ((WY[i] - 80) != WY[8] || WX[i] != WX[8])
			&& ((WY[i] - 80) != WY[9] || WX[i] != WX[9]) && ((WY[i] - 80) != WY[10] || WX[i] != WX[10]) && ((WY[i] - 80) != WY[11] || WX[i] != WX[11])
			&& ((WY[i] - 80) != WY[12] || WX[i] != WX[12]) && ((WY[i] - 80) != WY[13] || WX[i] != WX[13]) && ((WY[i] - 80) != WY[14] || WX[i] != WX[14])
			&& ((WY[i] - 80) != WY[15] || WX[i] != WX[15]) && ((WY[i] - 40) != BY[0] || WX[i] != BX[0])) {

			WY[i] -= 80;
			DrawPieces();
			Wpmove = false;
		}
		else if ((WX[i] + 40) < canvasX && canvasX < (WX[i] + 80) && (WY[i] - 40) < canvasY && canvasY < (WY[i])) {
			if  (((WY[i] - 40) == BY[0] && (WX[i] + 40) == BX[0]) || ((WY[i] - 40) == BY[1] && (WX[i] + 40) == BX[1]) 
				|| ((WY[i] - 40) == BY[2] && (WX[i] + 40) == BX[2]) || ((WY[i] - 40) == BY[3] && (WX[i] + 40) == BX[3]) 
				|| ((WY[i] - 40) == BY[4] && (WX[i] + 40) == BX[4]) || ((WY[i] - 40) == BY[5] && (WX[i] + 40) == BX[5]) 
				|| ((WY[i] - 40) == BY[6] && (WX[i] + 40) == BX[6]) || ((WY[i] - 40) == BY[7] && (WX[i] + 40) == BX[7]) 
				|| ((WY[i] - 40) == BY[8] && (WX[i] + 40) == BX[8]) || ((WY[i] - 40) == BY[9] && (WX[i] + 40) == BX[9]) 
				|| ((WY[i] - 40) == BY[10] && (WX[i] + 40) == BX[10]) || ((WY[i] - 40) == BY[11] && (WX[i] + 40) == BX[11])
				|| ((WY[i] - 40) == BY[12] && (WX[i] + 40) == BX[12]) || ((WY[i] - 40) == BY[13] && (WX[i] + 40) == BX[13]) 
				|| ((WY[i] - 40) == BY[14] && (WX[i] + 40) == BX[14]) || ((WY[i] - 40) == BY[15] && (WX[i] + 40) == BX[15]) 
				&& ((WY[i] - 40) != WY[1] || (WX[i] + 40) != WX[1]) && ((WY[i] - 40) != WY[2] || (WX[i] + 40) != WX[2])
				&& ((WY[i] - 40) != WY[3] || (WX[i] + 40) != WX[3]) && ((WY[i] - 40) != WY[4] || (WX[i] + 40) != WX[4]) 
				&& ((WY[i] - 40) != WY[5] || (WX[i] + 40) != WX[5]) && ((WY[i] - 40) != WY[6] || (WX[i] + 40) != WX[6]) 
				&& ((WY[i] - 40) != WY[7] || (WX[i] + 40) != WX[7]) && ((WY[i] - 40) != WY[8] || (WX[i] + 40) != WX[8])
				&& ((WY[i] - 40) != WY[9] || (WX[i] + 40) != WX[9]) && ((WY[i] - 40) != WY[10] || (WX[i] + 40) != WX[10]) 
				&& ((WY[i] - 40) != WY[11] || (WX[i] + 40) != WX[11]) && ((WY[i] - 40) != WY[12] || (WX[i] + 40) != WX[12]) 
				&& ((WY[i] - 40) != WY[13] || (WX[i] + 40) != WX[13]) && ((WY[i] - 40) != WY[14] || (WX[i] + 40) != WX[14])
				&& ((WY[i] - 40) != WY[15] || (WX[i] + 40) != WX[15]) && ((WY[i] - 40) != WY[0] || (WX[i] + 40) != WX[0])) {

				WY[i] -= 40;
				WX[i] += 40;

				for (var n = 0; n < 16; n++) {
					if (WY[i] == BY[n] && WX[i] == BX[n]) {
						BY[n] = 360;
						BX[n] = 360;
					}
				}
				DrawPieces();
			}
			Wpmove = false;
		}
		else if ((WX[i] - 40) < canvasX && canvasX < (WX[i]) && (WY[i] - 40) < canvasY && canvasY < (WY[i])) {
			if (((WY[i] - 40) == BY[0] && (WX[i] - 40) == BX[0]) || ((WY[i] - 40) == BY[1] && (WX[i] - 40) == BX[1]) 
				|| ((WY[i] - 40) == BY[2] && (WX[i] - 40) == BX[2]) || ((WY[i] - 40) == BY[3] && (WX[i] - 40) == BX[3]) 
				|| ((WY[i] - 40) == BY[4] && (WX[i] - 40) == BX[4]) || ((WY[i] - 40) == BY[5] && (WX[i] - 40) == BX[5]) 
				|| ((WY[i] - 40) == BY[6] && (WX[i] - 40) == BX[6]) || ((WY[i] - 40) == BY[7] && (WX[i] - 40) == BX[7]) 
				|| ((WY[i] - 40) == BY[8] && (WX[i] - 40) == BX[8]) || ((WY[i] - 40) == BY[9] && (WX[i] - 40) == BX[9]) 
				|| ((WY[i] - 40) == BY[10] && (WX[i] - 40) == BX[10]) || ((WY[i] - 40) == BY[11] && (WX[i] - 40) == BX[11])
				|| ((WY[i] - 40) == BY[12] && (WX[i] - 40) == BX[12]) || ((WY[i] - 40) == BY[13] && (WX[i] - 40) == BX[13]) 
				|| ((WY[i] - 40) == BY[14] && (WX[i] - 40) == BX[14]) || ((WY[i] - 40) == BY[15] && (WX[i] - 40) == BX[15]) 
				&& ((WY[i] - 40) != WY[1] || (WX[i] - 40) != WX[1]) && ((WY[i] - 40) != WY[2] || (WX[i] - 40) != WX[2])
				&& ((WY[i] - 40) != WY[3] || (WX[i] - 40) != WX[3]) && ((WY[i] - 40) != WY[4] || (WX[i] - 40) != WX[4]) 
				&& ((WY[i] - 40) != WY[5] || (WX[i] - 40) != WX[5]) && ((WY[i] - 40) != WY[6] || (WX[i] - 40) != WX[6]) 
				&& ((WY[i] - 40) != WY[7] || (WX[i] - 40) != WX[7]) && ((WY[i] - 40) != WY[8] || (WX[i] - 40) != WX[8])
				&& ((WY[i] - 40) != WY[9] || (WX[i] - 40) != WX[9]) && ((WY[i] - 40) != WY[10] || (WX[i] - 40) != WX[10]) 
				&& ((WY[i] - 40) != WY[11] || (WX[i] - 40) != WX[11]) && ((WY[i] - 40) != WY[12] || (WX[i] - 40) != WX[12]) 
				&& ((WY[i] - 40) != WY[13] || (WX[i] - 40) != WX[13]) && ((WY[i] - 40) != WY[14] || (WX[i] - 40) != WX[14])
				&& ((WY[i] - 40) != WY[15] || (WX[i] - 40) != WX[15])) {

				WY[i] -= 40;
				WX[i] -= 40;

				for (var n = 0; n < 16; n++) {
					if (WY[i] == BY[n] && WX[i] == BX[n]) {
						BY[n] = 360;
						BX[n] = 360;
					}
				}
				DrawPieces();
			}
			Wpmove = false;
		}
		else {
			Wpmove = false;
		}
	}
}

function Bt1() {
	if (turn) {
		if (BX[8] < canvasX && canvasX < (BX[8] + 40) && BY[8] < canvasY && canvasY < (BY[8] + 40)) {
			Btower1move = true;
		}
	}
}

function Btower1Move() {
	if (turn) {
		if (AI) {
			Btower1move = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}

	if (Btower1move == true) {
		if (BX[8] < canvasX && canvasX < (BX[8] + 40) && BY[8] < canvasY && canvasY < (BY[8] + 40)) {
			Btower1move = true;
		}

		else {
			for (var i = 0; i < 8; i++) {
				if (BX[8] < canvasX && (BX[8] + 40) > canvasX //ifall man klickar på rätt X led,
					&& ((i * 40) + 40) < canvasY && ((i * 40) + 80) > canvasY) { //vart man klickar på Y led

					if (((i * 40) + 40) < BY[8]) { //Kollar att vägen till målet up är fri
						var freepath = true;
						for (var o = BY[8]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BY[n] && BX[8] == BX[n] || o == WY[n] && BX[8] == WX[n]) {
									if (o != BY[8]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BY[n] == ((i * 40) + 40) && BX[8] == BX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							BY[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[8] == WY[n] && BX[8] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) > BY[8]) { // Kollar att vägen till målet ned är fri
						var freepath = true;
						for (var o = BY[8]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BY[n] && BX[8] == BX[n] || o == WY[n] && BX[8] == WX[n]) {
									if (o != BY[8]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BY[n] == ((i * 40) + 40) && BX[8] == BX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							BY[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[8] == WY[n] && BX[8] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}					
				}
				else if (BY[8] < canvasY && (BY[8] + 40) > canvasY //ifall man klickar på rätt Y led,
					&& ((i * 40) + 40) < canvasX && ((i * 40) + 80) > canvasX) { //vart man klickar på X led

					if (((i * 40) + 40) > BX[8]) { // Kollar att vägen till målet höger är fri
						var freepath = true;
						for (var o = BX[8]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BX[n] && BY[8] == BY[n] || o == WX[n] && BY[8] == WY[n]) {
									if (o != BX[8]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BX[n] == ((i * 40) + 40) && BY[8] == BY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							BX[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BX[8] == WX[n] && BY[8] == WY[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) < BX[8]) { //Kollar att vägen till målet vänster är fri
						var freepath = true;
						for (var o = BX[8]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BX[n] && BY[8] == BY[n] || o == WX[n] && BY[8] == WY[n]) {
									if (o != BX[8]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BX[n] == ((i * 40) + 40) && BY[8] == BY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							BX[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[8] == WY[n] && BX[8] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
				}
			}
			Btower1move = false;
		}
	}
}

function Bt2() {
	if (turn) {
		if (BX[15] < canvasX && canvasX < (BX[15] + 40) && BY[15] < canvasY && canvasY < (BY[15] + 40)) {
			Btower2move = true;
		}
	}
}

function Btower2Move() {
	if (turn) {
		if (AI) {
			Btower2move = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}
	if (Btower2move == true) {
		if (BX[15] < canvasX && canvasX < (BX[15] + 40) && BY[15] < canvasY && canvasY < (BY[15] + 40)) {
			Btower2move = true;
		}

		else {
			for (var i = 0; i < 8; i++) {
				if (BX[15] < canvasX && (BX[15] + 40) > canvasX //ifall man klickar på rätt X led,
					&& ((i * 40) + 40) < canvasY && ((i * 40) + 80) > canvasY) { //vart man klickar på Y led

					if (((i * 40) + 40) < BY[15]) { //Kollar att vägen till målet up är fri
						var freepath = true;
						for (var o = BY[15]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BY[n] && BX[15] == BX[n] || o == WY[n] && BX[15] == WX[n]) {
									if (o != BY[15]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BY[n] == ((i * 40) + 40) && BX[15] == BX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							BY[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[15] == WY[n] && BX[15] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) > BY[15]) { // Kollar att vägen till målet ned är fri
						var freepath = true;
						for (var o = BY[15]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BY[n] && BX[15] == BX[n] || o == WY[n] && BX[15] == WX[n]) {
									if (o != BY[15]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BY[n] == ((i * 40) + 40) && BX[15] == BX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							BY[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[15] == WY[n] && BX[15] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}					
				}
				else if (BY[15] < canvasY && (BY[15] + 40) > canvasY //ifall man klickar på rätt Y led,
					&& ((i * 40) + 40) < canvasX && ((i * 40) + 80) > canvasX) { //vart man klickar på X led

					if (((i * 40) + 40) > BX[15]) { // Kollar att vägen till målet höger är fri
						var freepath = true;
						for (var o = BX[15]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BX[n] && BY[15] == BY[n] || o == WX[n] && BY[15] == WY[n]) {
									if (o != BX[15]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BX[n] == ((i * 40) + 40) && BY[15] == BY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							BX[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BX[15] == WX[n] && BY[15] == WY[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) < BX[15]) { //Kollar att vägen till målet vänster är fri
						var freepath = true;
						for (var o = BX[15]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BX[n] && BY[15] == BY[n] || o == WX[n] && BY[15] == WY[n]) {
									if (o != BX[15]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BX[n] == ((i * 40) + 40) && BY[15] == BY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							BX[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[15] == WY[n] && BX[15] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
				}
			}
			Btower2move = false;
		}
	}
}

function Wt1() {
	if (turn == false) {
		if (WX[8] < canvasX && canvasX < (WX[8] + 40) && WY[8] < canvasY && canvasY < (WY[8] + 40)) {
			Wtower1move = true;
		}
	}
}

function Wtower1Move() {
	if (Wtower1move == true) {
		if (WX[8] < canvasX && canvasX < (WX[8] + 40) && WY[8] < canvasY && canvasY < (WY[8] + 40)) {
			Wtower1move = true;
		}

		else {
			for (var i = 0; i < 8; i++) {
				if (WX[8] < canvasX && (WX[8] + 40) > canvasX //ifall man klickar på rätt X led,
					&& ((i * 40) + 40) < canvasY && ((i * 40) + 80) > canvasY) { //vart man klickar på Y led

					if (((i * 40) + 40) < WY[8]) { //Kollar att vägen till målet up är fri
						var freepath = true;
						for (var o = WY[8]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WY[n] && WX[8] == WX[n] || o == BY[n] && WX[8] == BX[n]) {
									if (o != WY[8]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WY[n] == ((i * 40) + 40) && WX[8] == WX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							WY[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[8] == BY[n] && WX[8] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) > WY[8]) { // Kollar att vägen till målet ned är fri
						var freepath = true;
						for (var o = WY[8]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WY[n] && WX[8] == WX[n] || o == BY[n] && WX[8] == BX[n]) {
									if (o != WY[8]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WY[n] == ((i * 40) + 40) && WX[8] == WX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							WY[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[8] == BY[n] && WX[8] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}					
				}
				else if (WY[8] < canvasY && (WY[8] + 40) > canvasY //ifall man klickar på rätt Y led,
					&& ((i * 40) + 40) < canvasX && ((i * 40) + 80) > canvasX) { //vart man klickar på X led

					if (((i * 40) + 40) > WX[8]) { // Kollar att vägen till målet höger är fri
						var freepath = true;
						for (var o = WX[8]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WX[n] && WY[8] == WY[n] || o == BX[n] && WY[8] == BY[n]) {
									if (o != WX[8]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WX[n] == ((i * 40) + 40) && WY[8] == WY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							WX[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WX[8] == BX[n] && WY[8] == BY[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) < WX[8]) { //Kollar att vägen till målet vänster är fri
						var freepath = true;
						for (var o = WX[8]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WX[n] && WY[8] == WY[n] || o == BX[n] && WY[8] == BY[n]) {
									if (o != WX[8]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WX[n] == ((i * 40) + 40) && WY[8] == WY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							WX[8] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[8] == BY[n] && WX[8] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
				}
			}
			Wtower1move = false;
		}
	}
}

function Wt2() {
	if (turn == false) {
		if (WX[15] < canvasX && canvasX < (WX[15] + 40) && WY[15] < canvasY && canvasY < (WY[15] + 40)) {
			Wtower2move = true;
		}
	}
}

function Wtower2Move() {
	if (Wtower2move == true) {
		if (WX[15] < canvasX && canvasX < (WX[15] + 40) && WY[15] < canvasY && canvasY < (WY[15] + 40)) {
			Wtower2move = true;
		}

		else {
			for (var i = 0; i < 8; i++) {
				if (WX[15] < canvasX && (WX[15] + 40) > canvasX //ifall man klickar på rätt X led,
					&& ((i * 40) + 40) < canvasY && ((i * 40) + 80) > canvasY) { //vart man klickar på Y led
	
					if (((i * 40) + 40) < WY[15]) { //Kollar att vägen till målet up är fri
						var freepath = true;
						for (var o = WY[15]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WY[n] && WX[15] == WX[n] || o == BY[n] && WX[15] == BX[n]) {
									if (o != WY[15]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WY[n] == ((i * 40) + 40) && WX[15] == WX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							WY[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[15] == BY[n] && WX[15] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) > WY[15]) { // Kollar att vägen till målet ned är fri
						var freepath = true;
						for (var o = WY[15]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WY[n] && WX[15] == WX[n] || o == BY[n] && WX[15] == BX[n]) {
									if (o != WY[15]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WY[n] == ((i * 40) + 40) && WX[15] == WX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							WY[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[15] == BY[n] && WX[15] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}					
				}
				else if (WY[15] < canvasY && (WY[15] + 40) > canvasY //ifall man klickar på rätt Y led,
					&& ((i * 40) + 40) < canvasX && ((i * 40) + 80) > canvasX) { //vart man klickar på X led

					if (((i * 40) + 40) > WX[15]) { // Kollar att vägen till målet höger är fri
						var freepath = true;
						for (var o = WX[15]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WX[n] && WY[15] == WY[n] || o == BX[n] && WY[15] == BY[n]) {
									if (o != WX[15]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WX[n] == ((i * 40) + 40) && WY[15] == WY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							WX[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WX[15] == BX[n] && WY[15] == BY[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) < WX[15]) { //Kollar att vägen till målet vänster är fri
						var freepath = true;
						for (var o = WX[15]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WX[n] && WY[15] == WY[n] || o == BX[n] && WY[15] == BY[n]) {
									if (o != WX[15]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WX[n] == ((i * 40) + 40) && WY[15] == WY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							WX[15] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[15] == BY[n] && WX[15] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
				}
			}
			Wtower2move = false;
		}
	}
}

function Bh1() {
	if (turn) {
		if (BX[9] < canvasX && canvasX < (BX[9] + 40) && BY[9] < canvasY && canvasY < (BY[9] + 40)) {
			Bhorse1move = true;
		}
	}
}

function Bhorse1Move() {
	if (turn) {
		if (AI) {
			Bhorse1move = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}
	if (Bhorse1move) {
		if (BX[9] < canvasX && canvasX < (BX[9] + 40) && BY[9] < canvasY && canvasY < (BY[9] + 40)) {
			Bhorse1move = true;
		}
		else {
			if ((BX[9] + 40) < canvasX && canvasX < (BX[9] + 80) && (BY[9] + 80) < canvasY && canvasY < (BY[9] + 120)) { //Kollar vart jag klickar 
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] + 40) == BX[i] && (BY[9] + 80) == BY[i]) { //kollar om det finns en vänlig pjäs där jag flyttar
						move = false;
					}
				}
				if ((BX[9] + 40) == 360 || (BY[9] + 80) == 360 || (BX[9] + 40) == 0 || (BY[9] + 80) == 0) { //Kollar att jag inte går utanför spelplanen
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) { //Flyttar på pjäsen och elliminerar fienden ifall det finns någon
					BX[9] += 40;
					BY[9] += 80;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[9] - 40) < canvasX && canvasX < BX[9] && (BY[9] + 80) < canvasY && canvasY < (BY[9] + 120)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] - 40) == BX[i] && (BY[9] + 80) == BY[i]) {
						move = false;
					}
				}
				if ((BX[9] - 40) == 360 || (BY[9] + 80) == 360 || (BX[9] - 40) == 0 || (BY[9] + 80) == 0) {
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) {
					BX[9] -= 40;
					BY[9] += 80;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[9] + 80) < canvasX && canvasX < (BX[9] + 120) && (BY[9] + 40) < canvasY && canvasY < (BY[9] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] + 80) == BX[i] && (BY[9] + 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[9] + 80) == 360 || (BY[9] + 40) == 360 || (BX[9] + 80) == 0 || (BY[9] + 40) == 0) {
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) {
					BX[9] += 80;
					BY[9] += 40;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[9] + 80) < canvasX && canvasX < (BX[9] + 120) && (BY[9] - 40) < canvasY && canvasY < (BY[9])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] + 80) == BX[i] && (BY[9] - 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[9] + 80) == 360 || (BY[9] - 40) == 360 || (BX[9] + 80) == 0 || (BY[9] - 40) == 0) {
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) {
					BX[9] += 80;
					BY[9] -= 40;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[9] + 40) < canvasX && canvasX < (BX[9] + 80) && (BY[9] - 80) < canvasY && canvasY < (BY[9] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] + 40) == BX[i] && (BY[9] - 80) == BY[i]) { 
						move = false;
					}
				}
				if ((BX[9] + 40) == 360 || (BY[9] - 80) == 360 || (BX[9] + 40) == 0 || (BY[9] + 80) == 0) {
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) {
					BX[9] += 40;
					BY[9] -= 80;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[9] - 40) < canvasX && canvasX < BX[9] && (BY[9] - 80) < canvasY && canvasY < (BY[9] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] - 40) == BX[i] && (BY[9] - 80) == BY[i]) {
						move = false;
					}
				}
				if ((BX[9] - 40) == 360 || (BY[9] - 80) == 360 || (BX[9] - 40) == 0 || (BY[9] - 80) == 0) {
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) {
					BX[9] -= 40;
					BY[9] -= 80;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[9] - 80) < canvasX && canvasX < (BX[9] - 40) && (BY[9] + 40) < canvasY && canvasY < (BY[9] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] - 80) == BX[i] && (BY[9] + 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[9] - 80) == 360 || (BY[9] + 40) == 360 || (BX[9] - 80) == 0 || (BY[9] + 40) == 0) {
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) {
					BX[9] -= 80;
					BY[9] += 40;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[9] - 80) < canvasX && canvasX < (BX[9] - 40) && (BY[9] - 40) < canvasY && canvasY < (BY[9])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[9] - 80) == BX[i] && (BY[9] - 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[9] - 80) == 360 || (BY[9] - 40) == 360 || (BX[9] - 80) == 0 || (BY[9] - 40) == 0) {
					move = false;
				}
				if (BX[9] == 360) {
					move = false;
				}
				if (move) {
					BX[9] -= 80;
					BY[9] -= 40;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			Bhorse1move = false;
		}
	}
}

function Bh2() {
	if (turn) {
		if (BX[14] < canvasX && canvasX < (BX[14] + 40) && BY[14] < canvasY && canvasY < (BY[14] + 40)) {
			Bhorse2move = true;
		}
	}
}

function Bhorse2Move() {
	if (turn) {
		if (AI) {
			Bhorse2move = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}
	if (Bhorse2move) {
		if (BX[14] < canvasX && canvasX < (BX[14] + 40) && BY[14] < canvasY && canvasY < (BY[14] + 40)) {
			Bhorse2move = true;
		}
		else {
			if ((BX[14] + 40) < canvasX && canvasX < (BX[14] + 80) && (BY[14] + 80) < canvasY && canvasY < (BY[14] + 120)) { //Kollar vart jag klickar 
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] + 40) == BX[i] && (BY[14] + 80) == BY[i]) { //kollar om det finns en vänlig pjäs där jag flyttar
						move = false;
					}
				}
				if ((BX[14] + 40) == 360 || (BY[14] + 80) == 360 || (BX[14] + 40) == 0 || (BY[14] + 80) == 0) { //Kollar att jag inte går utanför spelplanen
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) { //Flyttar på pjäsen och elliminerar fienden ifall det finns någon
					BX[14] += 40;
					BY[14] += 80;
					for (var n = 0; n < 16; n++) {
						if (BY[14] == WY[n] && BX[14] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[14] - 40) < canvasX && canvasX < BX[14] && (BY[14] + 80) < canvasY && canvasY < (BY[14] + 120)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] - 40) == BX[i] && (BY[14] + 80) == BY[i]) {
						move = false;
					}
				}
				if ((BX[14] - 40) == 360 || (BY[14] + 80) == 360 || (BX[14] - 40) == 0 || (BY[14] + 80) == 0) {
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) {
					BX[14] -= 40;
					BY[14] += 80;
					for (var n = 0; n < 16; n++) {
						if (BY[14] == WY[n] && BX[14] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[14] + 80) < canvasX && canvasX < (BX[14] + 120) && (BY[14] + 40) < canvasY && canvasY < (BY[14] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] + 80) == BX[i] && (BY[14] + 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[14] + 80) == 360 || (BY[14] + 40) == 360 || (BX[14] + 80) == 0 || (BY[14] + 40) == 0) {
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) {
					BX[14] += 80;
					BY[14] += 40;
					for (var n = 0; n < 16; n++) {
						if (BY[14] == WY[n] && BX[14] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[14] + 80) < canvasX && canvasX < (BX[14] + 120) && (BY[14] - 40) < canvasY && canvasY < (BY[14])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] + 80) == BX[i] && (BY[14] - 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[14] + 80) == 360 || (BY[14] - 40) == 360 || (BX[14] + 80) == 0 || (BY[14] - 40) == 0) {
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) {
					BX[14] += 80;
					BY[14] -= 40;
					for (var n = 0; n < 16; n++) {
						if (BY[14] == WY[n] && BX[14] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[14] + 40) < canvasX && canvasX < (BX[14] + 80) && (BY[14] - 80) < canvasY && canvasY < (BY[14] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] + 40) == BX[i] && (BY[14] - 80) == BY[i]) { 
						move = false;
					}
				}
				if ((BX[14] + 40) == 360 || (BY[14] - 80) == 360 || (BX[14] + 40) == 0 || (BY[14] - 80) == 0) {
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) {
					BX[14] += 40;
					BY[14] -= 80;
					for (var n = 0; n < 16; n++) {
						if (BY[14] == WY[n] && BX[14] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[14] - 40) < canvasX && canvasX < BX[14] && (BY[14] - 80) < canvasY && canvasY < (BY[14] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] - 40) == BX[i] && (BY[14] - 80) == BY[i]) {
						move = false;
					}
				}
				if ((BX[14] - 40) == 360 || (BY[14] - 80) == 360 || (BX[14] - 40) == 0 || (BY[14] - 80) == 0) {
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) {
					BX[14] -= 40;
					BY[14] -= 80;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[14] - 80) < canvasX && canvasX < (BX[14] - 40) && (BY[14] + 40) < canvasY && canvasY < (BY[14] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] - 80) == BX[i] && (BY[14] + 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[14] - 80) == 360 || (BY[14] + 40) == 360 || (BX[14] - 80) == 0 || (BY[14] + 40) == 0) {
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) {
					BX[14] -= 80;
					BY[14] += 40;
					for (var n = 0; n < 16; n++) {
						if (BY[9] == WY[n] && BX[9] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			if ((BX[14] - 80) < canvasX && canvasX < (BX[14] - 40) && (BY[14] - 40) < canvasY && canvasY < (BY[14])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((BX[14] - 80) == BX[i] && (BY[14] - 40) == BY[i]) {
						move = false;
					}
				}
				if ((BX[14] - 80) == 360 || (BY[14] - 40) == 360 || (BX[14] - 80) == 0 || (BY[14] - 40) == 0) {
					move = false;
				}
				if (BX[14] == 360) {
					move = false;
				}
				if (move) {
					BX[14] -= 80;
					BY[14] -= 40;
					for (var n = 0; n < 16; n++) {
						if (BY[14] == WY[n] && BX[14] == WX[n]) {
							WY[n] = 0;
							WX[n] = 0;
						}
					}
					DrawPieces();
				}
			}
			Bhorse2move = false;
		}
	}
}

function Wh1() {
	if (turn == false) {
		if (WX[9] < canvasX && canvasX < (WX[9] + 40) && WY[9] < canvasY && canvasY < (WY[9] + 40)) {
			Whorse1move = true;
		}
	}
}

function Whorse1Move() {
	if (Whorse1move) {
		if (WX[9] < canvasX && canvasX < (WX[9] + 40) && WY[9] < canvasY && canvasY < (WY[9] + 40)) {
			Whorse1move = true;
		}
		else {
			if ((WX[9] + 40) < canvasX && canvasX < (WX[9] + 80) && (WY[9] + 80) < canvasY && canvasY < (WY[9] + 120)) { //Kollar vart jag klickar 
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] + 40) == WX[i] && (WY[9] + 80) == WY[i]) { //kollar om det finns en vänlig pjäs där jag flyttar
						move = false;
					}
				}
				if ((WX[9] + 40) == 360 || (WY[9] + 80) == 360 || (WX[9] + 40) == 0 || (WY[9] + 80) == 0) { //Kollar att jag inte går utanför spelplanen
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) { //Flyttar på pjäsen och elliminerar fienden ifall det finns någon
					WX[9] += 40;
					WY[9] += 80;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[9] - 40) < canvasX && canvasX < WX[9] && (WY[9] + 80) < canvasY && canvasY < (WY[9] + 120)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] - 40) == WX[i] && (WY[9] + 80) == WY[i]) {
						move = false;
					}
				}
				if ((WX[9] - 40) == 360 || (WY[9] + 80) == 360 || (WX[9] - 40) == 0 || (WY[9] + 80) == 0) {
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) {
					WX[9] -= 40;
					WY[9] += 80;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[9] + 80) < canvasX && canvasX < (WX[9] + 120) && (WY[9] + 40) < canvasY && canvasY < (WY[9] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] + 80) == WX[i] && (WY[9] + 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[9] + 80) == 360 || (WY[9] + 40) == 360 || (WX[9] + 80) == 0 || (WY[9] + 40) == 0) {
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) {
					WX[9] += 80;
					WY[9] += 40;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[9] + 80) < canvasX && canvasX < (WX[9] + 120) && (WY[9] - 40) < canvasY && canvasY < (WY[9])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] + 80) == WX[i] && (WY[9] - 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[9] + 80) == 360 || (WY[9] - 40) == 360 || (WX[9] + 80) == 0 || (WY[9] - 40) == 0) {
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) {
					WX[9] += 80;
					WY[9] -= 40;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[9] + 40) < canvasX && canvasX < (WX[9] + 80) && (WY[9] - 80) < canvasY && canvasY < (WY[9] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] + 40) == WX[i] && (WY[9] - 80) == WY[i]) { 
						move = false;
					}
				}
				if ((WX[9] + 40) == 360 || (WY[9] - 80) == 360 || (WX[9] + 40) == 0 || (WY[9] - 80) == 0) {
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) {
					WX[9] += 40;
					WY[9] -= 80;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[9] - 40) < canvasX && canvasX < WX[9] && (WY[9] - 80) < canvasY && canvasY < (WY[9] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] - 40) == WX[i] && (WY[9] - 80) == WY[i]) {
						move = false;
					}
				}
				if ((WX[9] - 40) == 360 || (WY[9] - 80) == 360 || (WX[9] - 40) == 0 || (WY[9] - 80) == 0) {
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) {
					WX[9] -= 40;
					WY[9] -= 80;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[9] - 80) < canvasX && canvasX < (WX[9] - 40) && (WY[9] + 40) < canvasY && canvasY < (WY[9] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] - 80) == WX[i] && (WY[9] + 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[9] - 80) == 360 || (WY[9] + 40) == 360 || (WX[9] - 80) == 0 || (WY[9] + 40) == 0) {
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) {
					WX[9] -= 80;
					WY[9] += 40;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[9] - 80) < canvasX && canvasX < (WX[9] - 40) && (WY[9] - 40) < canvasY && canvasY < (WY[9])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[9] - 80) == WX[i] && (WY[9] - 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[9] - 80) == 360 || (WY[9] - 40) == 360 || (WX[9] - 80) == 0 || (WY[9] - 40) == 0) {
					move = false;
				}
				if (WX[9] == 0) {
					move = false;
				}
				if (move) {
					WX[9] -= 80;
					WY[9] -= 40;
					for (var n = 0; n < 16; n++) {
						if (WY[9] == BY[n] && WX[9] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			Whorse1move = false;
		}
	}
}

function Wh2() {
	if (turn == false) {
		if (WX[14] < canvasX && canvasX < (WX[14] + 40) && WY[14] < canvasY && canvasY < (WY[14] + 40)) {
			Whorse2move = true;
		}
	}
}

function Whorse2Move() {
	if (Whorse2move) {
		if (WX[14] < canvasX && canvasX < (WX[14] + 40) && WY[14] < canvasY && canvasY < (WY[14] + 40)) {
			Whorse2move = true;
		}
		else {
			if ((WX[14] + 40) < canvasX && canvasX < (WX[14] + 80) && (WY[14] + 80) < canvasY && canvasY < (WY[14] + 120)) { //Kollar vart jag klickar 
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] + 40) == WX[i] && (WY[14] + 80) == WY[i]) { //kollar om det finns en vänlig pjäs där jag flyttar
						move = false;
					}
				}
				if ((WX[14] + 40) == 360 || (WY[14] + 80) == 360 || (WX[14] + 40) == 0 || (WY[14] + 80) == 0) { //Kollar att jag inte går utanför spelplanen
					move = false;
				}
				if (WX[14] == 0) {
					move = false;
				}
				if (move) { //Flyttar på pjäsen och elliminerar fienden ifall det finns någon
					WX[14] += 40;
					WY[14] += 80;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[14] - 40) < canvasX && canvasX < WX[14] && (WY[14] + 80) < canvasY && canvasY < (WY[14] + 120)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] - 40) == WX[i] && (WY[14] + 80) == WY[i]) {
						move = false;
					}
				}
				if ((WX[14] - 40) == 360 || (WY[14] + 80) == 360 || (WX[14] - 40) == 0 || (WY[14] + 80) == 0) {
					move = false;
				}
				if (move) {
					WX[14] -= 40;
					WY[14] += 80;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[14] + 80) < canvasX && canvasX < (WX[14] + 120) && (WY[14] + 40) < canvasY && canvasY < (WY[14] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] + 80) == WX[i] && (WY[14] + 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[14] + 80) == 360 || (WY[14] + 40) == 360 || (WX[14] + 80) == 0 || (WY[14] + 40) == 0) {
					move = false;
				}
				if (WX[14] == 0) {
					move = false;
				}
				if (move) {
					WX[14] += 80;
					WY[14] += 40;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[14] + 80) < canvasX && canvasX < (WX[14] + 120) && (WY[14] - 40) < canvasY && canvasY < (WY[14])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] + 80) == WX[i] && (WY[14] - 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[14] + 80) == 360 || (WY[14] - 40) == 360 || (WX[14] + 80) == 0 || (WY[14] - 40) == 0) {
					move = false;
				}
				if (move) {
					WX[14] += 80;
					WY[14] -= 40;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[14] + 40) < canvasX && canvasX < (WX[14] + 80) && (WY[14] - 80) < canvasY && canvasY < (WY[14] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] + 40) == WX[i] && (WY[14] - 80) == WY[i]) { 
						move = false;
					}
				}
				if ((WX[14] + 40) == 360 || (WY[14] - 80) == 360 || (WX[14] + 40) == 0 || (WY[14] - 80) == 0) {
					move = false;
				}
				if (move) {
					WX[14] += 40;
					WY[14] -= 80;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[14] - 40) < canvasX && canvasX < WX[14] && (WY[14] - 80) < canvasY && canvasY < (WY[14] - 40)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] - 40) == WX[i] && (WY[14] - 80) == WY[i]) {
						move = false;
					}
				}
				if ((WX[14] - 40) == 360 || (WY[14] - 80) == 360 || (WX[14] - 40) == 0 || (WY[14] - 80) == 0) {
					move = false;
				}
				if (move) {
					WX[14] -= 40;
					WY[14] -= 80;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[14] - 80) < canvasX && canvasX < (WX[14] - 40) && (WY[14] + 40) < canvasY && canvasY < (WY[14] + 80)) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] - 80) == WX[i] && (WY[14] + 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[14] - 80) == 360 || (WY[14] + 40) == 360 || (WX[14] - 80) == 0 || (WY[14] + 40) == 0) {
					move = false;
				}
				if (move) {
					WX[14] -= 80;
					WY[14] += 40;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			if ((WX[14] - 80) < canvasX && canvasX < (WX[14] - 40) && (WY[14] - 40) < canvasY && canvasY < (WY[14])) {
				var move = true;
				for (var i = 0; i < 16; i++) {
					if ((WX[14] - 80) == WX[i] && (WY[14] - 40) == WY[i]) {
						move = false;
					}
				}
				if ((WX[14] - 80) == 360 || (WY[14] - 40) == 360 || (WX[14] - 80) == 0 || (WY[14] - 40) == 0) {
					move = false;
				}
				if (move) {
					WX[14] -= 80;
					WY[14] -= 40;
					for (var n = 0; n < 16; n++) {
						if (WY[14] == BY[n] && WX[14] == BX[n]) {
							BY[n] = 360;
							BX[n] = 360;
						}
					}
					DrawPieces();
				}
			}
			Whorse2move = false;
		}
	}
}

function Br1() {
	if (turn) {
		if (BX[10] < canvasX && canvasX < (BX[10] + 40) && BY[10] < canvasY && canvasY < (BY[10] + 40)) {
			Brunner1move = true;
		}
	}
}

function Brunner1Move() {
	if (turn) {
		if (AI) {
			Brunner1move = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}

	if (Brunner1move) {
		if (BX[10] < canvasX && canvasX < (BX[10] + 40) && BY[10] < canvasY && canvasY < (BY[10] + 40)) {
			Brunner1move = true;
		}
		else {
			for (var i = 0; i < 8; i++) {
				if (BX[10] + 40 * i < canvasX && canvasX < (BX[10] + 40) + 40 * i && BY[10] + 40 * i < canvasY && canvasY < (BY[10] + 40 + 40 * i)) {
					var pathfree = true;
					var t = BY[10];
					for (var n = BX[10]; n < BX[10] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[10] != BX[m] && BY[10] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[10] + 40 * i == BX[n] && BY[10] + 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[10] + 40 * i >= 360 || BY[10] + 40 * i >= 360 || BX[10] + 40 * i <= 0 || BY[10] + 40 * i <= 0) {
						pathfree = false;
					}

					if (pathfree) {
						BX[10] += 40 * i;
						BY[10] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[10] == WY[n] && BX[10] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[10] - 40 * i < canvasX && canvasX < (BX[10] + 40) - 40 * i && BY[10] - 40 * i < canvasY && canvasY < (BY[10] + 40) - 40 * i) {
					var pathfree = true;
					var t = BY[10];
					for (var n = BX[10]; n > BX[10] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[10] != BX[m] && BY[10] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[10] - 40 * i == BX[n] && BY[10] - 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[10] - 40 * i >= 360 || BY[10] - 40 * i >= 360 || BX[10] - 40 * i <= 0 || BY[10] - 40 * i <= 0) {
						pathfree = false;
					}

					if (BX[10] == 360) {
						pathfree = false;
					}

					if (pathfree) {
						BX[10] -= 40 * i;
						BY[10] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[10] == WY[n] && BX[10] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[10] + 40 * i < canvasX && canvasX < (BX[10] + 40) + 40 * i && BY[10] - 40 * i < canvasY && canvasY < (BY[10] - 40 + 40 * i)) {
					var pathfree = true;
					var t = BY[10];
					for (var n = BX[10]; n < BX[10] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[10] != BX[m] && BY[10] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[10] + 40 * i == BX[n] && BY[10] - 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[10] + 40 * i >= 360 || BY[10] - 40 * i >= 360 || BX[10] + 40 * i <= 0 || BY[10] - 40 * i <= 00) {
						pathfree = false;
					}

					if (pathfree) {
						BX[10] += 40 * i;
						BY[10] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[10] == WY[n] && BX[10] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[10] - 40 * i < canvasX && canvasX < (BX[10] + 40) - 40 * i && BY[10] + 40 * i < canvasY && canvasY < (BY[10] + 40) + 40 * i) {
					var pathfree = true;
					var t = BY[10];
					for (var n = BX[10]; n > BX[10] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[10] != BX[m] && BY[10] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[10] - 40 * i == BX[n] && BY[10] + 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[10] - 40 * i >= 360 || BY[10] + 40 * i >= 360 || BX[10] - 40 * i >= 0 || BY[10] + 40 * i >= 0) {
						pathfree = false;
					}

					if (pathfree) {
						BX[10] -= 40 * i;
						BY[10] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[10] == WY[n] && BX[10] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}
			}
			Brunner1move = false;
		}
	}
}

function Br2() {
	if (turn) {
		if (BX[13] < canvasX && canvasX < (BX[13] + 40) && BY[13] < canvasY && canvasY < (BY[13] + 40)) {
			Brunner2move = true;
		}
	}
}

function Brunner2Move() {
	if (turn) {
		if (AI) {
			Brunner2move = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}
	if (Brunner2move) {
		if (BX[13] < canvasX && canvasX < (BX[13] + 40) && BY[13] < canvasY && canvasY < (BY[13] + 40)) {
			Brunner2move = true;
		}
		else {
			for (var i = 0; i < 8; i++) {
				if (BX[13] + 40 * i < canvasX && canvasX < (BX[13] + 40) + 40 * i && BY[13] + 40 * i < canvasY && canvasY < (BY[13] + 40 + 40 * i)) {
					var pathfree = true;
					var t = BY[13];
					for (var n = BX[13]; n < BX[13] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[13] != BX[m] && BY[13] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[13] + 40 * i == BX[n] && BY[13] + 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[13] + 40 * i >= 360 || BY[13] + 40 * i >= 360 || BX[13] + 40 * i <= 0 || BY[13] + 40 * i <= 0) {
						pathfree = false;
					}

					if (pathfree) {
						BX[13] += 40 * i;
						BY[13] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[13] == WY[n] && BX[13] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[13] - 40 * i < canvasX && canvasX < (BX[13] + 40) - 40 * i && BY[13] - 40 * i < canvasY && canvasY < (BY[13] + 40) - 40 * i) {
					var pathfree = true;
					var t = BY[13];
					for (var n = BX[13]; n > BX[13] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[13] != BX[m] && BY[13] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[13] - 40 * i == BX[n] && BY[13] - 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[13] - 40 * i >= 360 || BY[13] - 40 * i >= 360 || BX[13] - 40 * i <= 0 || BY[13] - 40 * i <= 0) {
						pathfree = false;
					}

					if (BX[13] == 360) {
						pathfree = false;
					}

					if (pathfree) {
						BX[13] -= 40 * i;
						BY[13] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[13] == WY[n] && BX[13] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[13] + 40 * i < canvasX && canvasX < (BX[13] + 40) + 40 * i && BY[13] - 40 * i < canvasY && canvasY < (BY[13] - 40 + 40 * i)) {
					var pathfree = true;
					var t = BY[13];
					for (var n = BX[13]; n < BX[13] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[13] != BX[m] && BY[13] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[13] + 40 * i == BX[n] && BY[13] - 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[13] + 40 * i >= 360 || BY[13] - 40 * i >= 360 || BX[13] + 40 * i <= 0 || BY[13] - 40 * i <= 0) {
						pathfree = false;
					}

					if (pathfree) {
						BX[13] += 40 * i;
						BY[13] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[13] == WY[n] && BX[13] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[13] - 40 * i < canvasX && canvasX < (BX[13] + 40) - 40 * i && BY[13] + 40 * i < canvasY && canvasY < (BY[13] + 40) + 40 * i) {
					var pathfree = true;
					var t = BY[13];
					for (var n = BX[13]; n > BX[13] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[13] != BX[m] && BY[13] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[13] - 40 * i == BX[n] && BY[13] + 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[13] - 40 * i >= 360 || BY[13] + 40 * i >= 360 || BX[13] - 40 * i <= 0 || BY[13] + 40 * i <= 0) {
						pathfree = false;
					}

					if (pathfree) {
						BX[13] -= 40 * i;
						BY[13] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[13] == WY[n] && BX[13] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}
			}
			Brunner2move = false;
		}
	}
}

function Wr1() {
	if (turn == false) {
		if (WX[10] < canvasX && canvasX < (WX[10] + 40) && WY[10] < canvasY && canvasY < (WY[10] + 40)) {
			Wrunner1move = true;
		}
	}
}

function Wrunner1Move() {
	if (Wrunner1move) {
		if (WX[10] < canvasX && canvasX < (WX[10] + 40) && WY[10] < canvasY && canvasY < (WY[10] + 40)) {
			Wrunner1move = true;
		}
		else {
			for (var i = 0; i < 8; i++) {
				if (WX[10] + 40 * i < canvasX && canvasX < (WX[10] + 40) + 40 * i && WY[10] + 40 * i < canvasY && canvasY < (WY[10] + 40 + 40 * i)) {
					var pathfree = true;
					var t = WY[10];
					for (var n = WX[10]; n < WX[10] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[10] != WX[m] && WY[10] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[10] + 40 * i == WX[n] && WY[10] + 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[10] + 40 * i == 360 || WY[10] + 40 * i == 360 || WX[10] + 40 * i == 0 || WY[10] + 40 * i == 0) {
						pathfree = false;
					}

					if (WX[10] == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[10] += 40 * i;
						WY[10] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[10] == BY[n] && WX[10] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[10] - 40 * i < canvasX && canvasX < (WX[10] + 40) - 40 * i && WY[10] - 40 * i < canvasY && canvasY < (WY[10] + 40) - 40 * i) {
					var pathfree = true;
					var t = WY[10];
					for (var n = WX[10]; n > WX[10] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[10] != WX[m] && WY[10] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[10] - 40 * i == WX[n] && WY[10] - 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[10] - 40 * i == 360 || WY[10] - 40 * i == 360 || WX[10] - 40 * i == 0 || WY[10] - 40 * i == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[10] -= 40 * i;
						WY[10] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[10] == BY[n] && WX[10] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[10] + 40 * i < canvasX && canvasX < (WX[10] + 40) + 40 * i && WY[10] - 40 * i < canvasY && canvasY < (WY[10] - 40 + 40 * i)) {
					var pathfree = true;
					var t = WY[10];
					for (var n = WX[10]; n < WX[10] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[10] != WX[m] && WY[10] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[10] + 40 * i == WX[n] && WY[10] - 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[10] + 40 * i == 360 || WY[10] - 40 * i == 360 || WX[10] + 40 * i == 0 || WY[10] - 40 * i == 00) {
						pathfree = false;
					}

					if (pathfree) {
						WX[10] += 40 * i;
						WY[10] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[10] == BY[n] && WX[10] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[10] - 40 * i < canvasX && canvasX < (WX[10] + 40) - 40 * i && WY[10] + 40 * i < canvasY && canvasY < (WY[10] + 40) + 40 * i) {
					var pathfree = true;
					var t = WY[10];
					for (var n = WX[10]; n > WX[10] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[10] != WX[m] && WY[10] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[10] - 40 * i == WX[n] && WY[10] + 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[10] - 40 * i == 360 || WY[10] + 40 * i == 360 || WX[10] - 40 * i == 0 || WY[10] + 40 * i == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[10] -= 40 * i;
						WY[10] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[10] == BY[n] && WX[10] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}
			}
			Wrunner1move = false;
		}
	}
}

function Wr2() {
	if (turn == false) {
		if (WX[13] < canvasX && canvasX < (WX[13] + 40) && WY[13] < canvasY && canvasY < (WY[13] + 40)) {
			Wrunner2move = true;
		}
	}
}

function Wrunner2Move() {
	if (Wrunner2move) {
		if (WX[13] < canvasX && canvasX < (WX[13] + 40) && WY[13] < canvasY && canvasY < (WY[13] + 40)) {
			Wrunner2move = true;
		}
		else {
			for (var i = 0; i < 8; i++) {
				if (WX[13] + 40 * i < canvasX && canvasX < (WX[13] + 40) + 40 * i && WY[13] + 40 * i < canvasY && canvasY < (WY[13] + 40 + 40 * i)) {
					var pathfree = true;
					var t = WY[13];
					for (var n = WX[13]; n < WX[13] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[13] != WX[m] && WY[13] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[13] + 40 * i == WX[n] && WY[13] + 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[13] + 40 * i == 360 || WY[13] + 40 * i == 360 || WX[13] + 40 * i == 0 || WY[13] + 40 * i == 0) {
						pathfree = false;
					}

					if (WX[13] == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[13] += 40 * i;
						WY[13] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[13] == BY[n] && WX[13] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[13] - 40 * i < canvasX && canvasX < (WX[13] + 40) - 40 * i && WY[13] - 40 * i < canvasY && canvasY < (WY[13] + 40) - 40 * i) {
					var pathfree = true;
					var t = WY[13];
					for (var n = WX[13]; n > WX[13] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[13] != WX[m] && WY[13] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[13] - 40 * i == WX[n] && WY[13] - 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[13] - 40 * i == 360 || WY[13] - 40 * i == 360 || WX[13] - 40 * i == 0 || WY[13] - 40 * i == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[13] -= 40 * i;
						WY[13] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[13] == BY[n] && WX[13] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[13] + 40 * i < canvasX && canvasX < (WX[13] + 40) + 40 * i && WY[13] - 40 * i < canvasY && canvasY < (WY[13] - 40 + 40 * i)) {
					var pathfree = true;
					var t = WY[13];
					for (var n = WX[13]; n < WX[13] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[13] != WX[m] && WY[13] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[13] + 40 * i == WX[n] && WY[13] - 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[13] + 40 * i == 360 || WY[13] - 40 * i == 360 || WX[13] + 40 * i == 0 || WY[13] - 40 * i == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[13] += 40 * i;
						WY[13] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[13] == BY[n] && WX[13] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[13] - 40 * i < canvasX && canvasX < (WX[13] + 40) - 40 * i && WY[13] + 40 * i < canvasY && canvasY < (WY[13] + 40) + 40 * i) {
					var pathfree = true;
					var t = WY[13];
					for (var n = WX[13]; n > WX[13] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[13] != WX[m] && WY[13] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[13] - 40 * i == WX[n] && WY[13] + 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[13] - 40 * i == 360 || WY[13] + 40 * i == 360 || WX[13] - 40 * i == 0 || WY[13] + 40 * i == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[13] -= 40 * i;
						WY[13] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[13] == BY[n] && WX[13] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}
			}
			Wrunner2move = false;
		}
	}
}

function Bq() {
	if (turn) {
		if (BX[12] < canvasX && canvasX < (BX[12] + 40) && BY[12] < canvasY && canvasY < (BY[12] + 40)) {
			Bqueenmove = true;
		}
	}
}

function BqueenMove() {
	if (turn) {
		if (AI) {
			Bqueenmove = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}
	if (Bqueenmove) {
		if (BX[12] < canvasX && canvasX < (BX[12] + 40) && BY[12] < canvasY && canvasY < (BY[12] + 40)) {
			Bqueenmove = true;
		}
		else {
			for (var i = 0; i < 8; i++) {
				if (BX[12] + 40 * i < canvasX && canvasX < (BX[12] + 40) + 40 * i && BY[12] + 40 * i < canvasY && canvasY < (BY[12] + 40 + 40 * i)) {
					var pathfree = true;
					var t = BY[12];
					for (var n = BX[12]; n < BX[12] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[12] != BX[m] && BY[12] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[12] + 40 * i == BX[n] && BY[12] + 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[12] + 40 * i >= 360 || BY[12] + 40 * i >= 360 || BX[12] + 40 * i <= 0 || BY[12] + 40 * i <= 0) {
						pathfree = false;
					}

					if (pathfree) {
						BX[12] += 40 * i;
						BY[12] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[12] == WY[n] && BX[12] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[12] - 40 * i < canvasX && canvasX < (BX[12] + 40) - 40 * i && BY[12] - 40 * i < canvasY && canvasY < (BY[12] + 40) - 40 * i) {
					var pathfree = true;
					var t = BY[12];
					for (var n = BX[12]; n > BX[12] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[12] != BX[m] && BY[12] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[12] - 40 * i == BX[n] && BY[12] - 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[12] - 40 * i >= 360 || BY[12] - 40 * i >= 360 || BX[12] - 40 * i <= 0 || BY[12] - 40 * i <= 0) {
						pathfree = false;
					}

					if (BX[12] == 360) {
						pathfree = false;
					}

					if (pathfree) {
						BX[12] -= 40 * i;
						BY[12] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[12] == WY[n] && BX[12] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[12] + 40 * i < canvasX && canvasX < (BX[12] + 40) + 40 * i && BY[12] - 40 * i < canvasY && canvasY < (BY[12] - 40 + 40 * i)) {
					var pathfree = true;
					var t = BY[12];
					for (var n = BX[12]; n < BX[12] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[12] != BX[m] && BY[12] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[12] + 40 * i == BX[n] && BY[12] - 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[12] + 40 * i >= 360 || BY[12] - 40 * i >= 360 || BX[12] + 40 * i <= 0 || BY[12] - 40 * i <= 00) {
						pathfree = false;
					}

					if (pathfree) {
						BX[12] += 40 * i;
						BY[12] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[12] == WY[n] && BX[12] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}

				if (BX[12] - 40 * i < canvasX && canvasX < (BX[12] + 40) - 40 * i && BY[12] + 40 * i < canvasY && canvasY < (BY[12] + 40) + 40 * i) {
					var pathfree = true;
					var t = BY[12];
					for (var n = BX[12]; n > BX[12] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == BX[m] && t == BY[m]) {
								if (BX[12] != BX[m] && BY[12] != BY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (BX[12] - 40 * i == BX[n] && BY[12] + 40 * i == BY[n]) {
							pathfree = false;
						}
					}

					if (BX[12] - 40 * i >= 360 || BY[12] + 40 * i >= 360 || BX[12] - 40 * i <= 0 || BY[12] + 40 * i <= 0) {
						pathfree = false;
					}

					if (pathfree) {
						BX[12] -= 40 * i;
						BY[12] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (BY[12] == WY[n] && BX[12] == WX[n]) {
								WY[n] = 0;
								WX[n] = 0;
							}
						}
						DrawPieces();
					}
				}
			}
			for (var i = 0; i < 8; i++) {
				if (BX[12] < canvasX && (BX[12] + 40) > canvasX //ifall man klickar på rätt X led,
					&& ((i * 40) + 40) < canvasY && ((i * 40) + 80) > canvasY) { //vart man klickar på Y led

					if (((i * 40) + 40) < BY[12]) { //Kollar att vägen till målet up är fri
						var freepath = true;
						for (var o = BY[12]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BY[n] && BX[12] == BX[n] || o == WY[n] && BX[12] == WX[n]) {
									if (o != BY[12]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BY[n] == ((i * 40) + 40) && BX[12] == BX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							BY[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[12] == WY[n] && BX[12] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) > BY[12]) { // Kollar att vägen till målet ned är fri
						var freepath = true;
						for (var o = BY[12]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BY[n] && BX[12] == BX[n] || o == WY[n] && BX[12] == WX[n]) {
									if (o != BY[12]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BY[n] == ((i * 40) + 40) && BX[12] == BX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							BY[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[12] == WY[n] && BX[12] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}					
				}
				else if (BY[12] < canvasY && (BY[12] + 40) > canvasY //ifall man klickar på rätt Y led,
					&& ((i * 40) + 40) < canvasX && ((i * 40) + 80) > canvasX) { //vart man klickar på X led

					if (((i * 40) + 40) > BX[12]) { // Kollar att vägen till målet höger är fri
						var freepath = true;
						for (var o = BX[12]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BX[n] && BY[12] == BY[n] || o == WX[n] && BY[12] == WY[n]) {
									if (o != BX[12]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BX[n] == ((i * 40) + 40) && BY[12] == BY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							BX[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BX[12] == WX[n] && BY[12] == WY[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) < BX[12]) { //Kollar att vägen till målet vänster är fri
						var freepath = true;
						for (var o = BX[12]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == BX[n] && BY[12] == BY[n] || o == WX[n] && BY[12] == WY[n]) {
									if (o != BX[12]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (BX[n] == ((i * 40) + 40) && BY[12] == BY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							BX[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (BY[12] == WY[n] && BX[12] == WX[n]) {
									WY[n] = 0;
									WX[n] = 0;
								}
							}
							DrawPieces();
						}
					}
				}
			}
			Bqueenmove = false;
		}
	}
}

function Wq() {
	if (turn == false) {
		if (WX[12] < canvasX && canvasX < (WX[12] + 40) && WY[12] < canvasY && canvasY < (WY[12] + 40)) {
			Wqueenmove = true;
		}
	}
}

function WqueenMove() {
	if (Wqueenmove) {
		if (WX[12] < canvasX && canvasX < (WX[12] + 40) && WY[12] < canvasY && canvasY < (WY[12] + 40)) {
			Wqueenmove = true;
		}
		else {
			for (var i = 0; i < 8; i++) {
				if (WX[12] + 40 * i < canvasX && canvasX < (WX[12] + 40) + 40 * i && WY[12] + 40 * i < canvasY && canvasY < (WY[12] + 40 + 40 * i)) {
					var pathfree = true;
					var t = WY[12];
					for (var n = WX[12]; n < WX[12] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[12] != WX[m] && WY[12] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[12] + 40 * i == WX[n] && WY[12] + 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[12] + 40 * i == 360 || WY[12] + 40 * i == 360 || WX[12] + 40 * i == 0 || WY[12] + 40 * i == 0) {
						pathfree = false;
					}

					if (WX[12] == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[12] += 40 * i;
						WY[12] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[12] == BY[n] && WX[12] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[12] - 40 * i < canvasX && canvasX < (WX[12] + 40) - 40 * i && WY[12] - 40 * i < canvasY && canvasY < (WY[12] + 40) - 40 * i) {
					var pathfree = true;
					var t = WY[12];
					for (var n = WX[12]; n > WX[12] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[12] != WX[m] && WY[12] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[12] - 40 * i == WX[n] && WY[12] - 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[12] - 40 * i == 360 || WY[12] - 40 * i == 360 || WX[12] - 40 * i == 0 || WY[12] - 40 * i == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[12] -= 40 * i;
						WY[12] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[12] == BY[n] && WX[12] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[12] + 40 * i < canvasX && canvasX < (WX[12] + 40) + 40 * i && WY[12] - 40 * i < canvasY && canvasY < (WY[12] - 40 + 40 * i)) {
					var pathfree = true;
					var t = WY[12];
					for (var n = WX[12]; n < WX[12] + 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[12] != WX[m] && WY[12] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n += 40;
						t -= 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[12] + 40 * i == WX[n] && WY[12] - 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[12] + 40 * i == 360 || WY[12] - 40 * i == 360 || WX[12] + 40 * i == 0 || WY[12] - 40 * i == 00) {
						pathfree = false;
					}

					if (pathfree) {
						WX[12] += 40 * i;
						WY[12] -= 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[12] == BY[n] && WX[12] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}

				if (WX[12] - 40 * i < canvasX && canvasX < (WX[12] + 40) - 40 * i && WY[12] + 40 * i < canvasY && canvasY < (WY[12] + 40) + 40 * i) {
					var pathfree = true;
					var t = WY[12];
					for (var n = WX[12]; n > WX[12] - 40 * i;) {
						for (var m = 0; m < 16; m++) {
							if (n == WX[m] && t == WY[m]) {
								if (WX[12] != WX[m] && WY[12] != WY[m]) {
									pathfree = false;
								}
							}
						}
						n -= 40;
						t += 40;
					}

					for (var n = 0; n < 16; n++) {
						if (WX[12] - 40 * i == WX[n] && WY[12] + 40 * i == WY[n]) {
							pathfree = false;
						}
					}

					if (WX[12] - 40 * i == 360 || WY[12] + 40 * i == 360 || WX[12] - 40 * i == 0 || WY[12] + 40 * i == 0) {
						pathfree = false;
					}

					if (pathfree) {
						WX[12] -= 40 * i;
						WY[12] += 40 * i;
						for (var n = 0; n < 16; n++) {
							if (WY[12] == BY[n] && WX[12] == BX[n]) {
								BY[n] = 360;
								BX[n] = 360;
							}
						}
						DrawPieces();
					}
				}
			}
			for (var i = 0; i < 8; i++) {
				if (WX[12] < canvasX && (WX[12] + 40) > canvasX //ifall man klickar på rätt X led,
					&& ((i * 40) + 40) < canvasY && ((i * 40) + 80) > canvasY) { //vart man klickar på Y led
	
					if (((i * 40) + 40) < WY[12]) { //Kollar att vägen till målet up är fri
						var freepath = true;
						for (var o = WY[12]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WY[n] && WX[12] == WX[n] || o == BY[n] && WX[12] == BX[n]) {
									if (o != WY[12]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WY[n] == ((i * 40) + 40) && WX[12] == WX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							WY[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[12] == BY[n] && WX[12] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) > WY[12]) { // Kollar att vägen till målet ned är fri
						var freepath = true;
						for (var o = WY[12]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WY[n] && WX[12] == WX[n] || o == BY[n] && WX[12] == BX[n]) {
									if (o != WY[12]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WY[n] == ((i * 40) + 40) && WX[12] == WX[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							WY[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[12] == BY[n] && WX[12] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}					
				}
				else if (WY[12] < canvasY && (WY[12] + 40) > canvasY //ifall man klickar på rätt Y led,
					&& ((i * 40) + 40) < canvasX && ((i * 40) + 80) > canvasX) { //vart man klickar på X led

					if (((i * 40) + 40) > WX[12]) { // Kollar att vägen till målet höger är fri
						var freepath = true;
						for (var o = WX[12]; o < ((i * 40) + 40);) {//kollar att ingen pjäs är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WX[n] && WY[12] == WY[n] || o == BX[n] && WY[12] == BY[n]) {
									if (o != WX[12]) {
										freepath = false;
									}
								}
							}
							o += 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WX[n] == ((i * 40) + 40) && WY[12] == WY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { //Flyttar och elliminerar pjäser
							WX[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WX[12] == BX[n] && WY[12] == BY[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
					if (((i * 40) + 40) < WX[15]) { //Kollar att vägen till målet vänster är fri
						var freepath = true;
						for (var o = WX[12]; o > ((i * 40) + 40);) { //Kollar om pjäser är i vägen
							for (var n = 0; n < 16; n++) {
								if (o == WX[n] && WY[12] == WY[n] || o == BX[n] && WY[12] == BY[n]) {
									if (o != WX[12]) {
										freepath = false;
									}
								}
							}
							o -= 40;
						}
						for (var n = 0; n < 16; n++) {
							if (WX[n] == ((i * 40) + 40) && WY[12] == WY[n]) { // Så att den inte landar på en annan pjäs
								freepath = false;
							}
						}
						if (freepath) { // Flyttar på pjäsen och kollar om den tar ut någon
							WX[12] = (i * 40) + 40;
							for (var n = 0; n < 16; n++) {
								if (WY[12] == BY[n] && WX[12] == BX[n]) {
									BY[n] = 360;
									BX[n] = 360;
								}
							}
							DrawPieces();
						}
					}
				}
			}
			Wqueenmove = false;
		}
	}
}

function Bk() {
	if (turn) {
		if (BX[11] < canvasX && canvasX < (BX[11] + 40) && BY[11] < canvasY && canvasY < (BY[11] + 40)) {
			Bkingmove = true;
		}
	}
}

function BkingMove() {
	if (turn) {
		if (AI) {
			Bkingmove = true;
			canvasX = Math.floor(Math.random() * 8) * 40 + 45;
			canvasY = Math.floor(Math.random() * 8) * 40 + 45;
		}
	}
	if (Bkingmove) {
		if (BX[11] < canvasX && canvasX < (BX[11] + 40) && BY[11] < canvasY && canvasY < (BY[11] + 40)) {
			Bkingmove = true;
		}
		else {
			if (BX[11] < canvasX && canvasX < (BX[11] + 40) && BY[11] + 40 < canvasY && canvasY < (BY[11] + 80)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] == BX[i] && BY[11] + 40 == BY[i]) {
						Freemove = false;
					}
				}

				if (BY[11] + 40 == 360) {
					Freemove = false;;
				}

				if (Freemove) {
					BY[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			if (BX[11] + 40 < canvasX && canvasX < (BX[11] + 80) && BY[11] + 40 < canvasY && canvasY < (BY[11] + 80)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] + 40 == BX[i] && BY[11] + 40 == BY[i]) {
						Freemove = false;
					}
				}

				if (BY[11] + 40 == 360 || BX[11] + 40 == 360) {
					Freemove = false;
				}

				if (Freemove) {
					BY[11] += 40;
					BX[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			if (BX[11] + 40 < canvasX && canvasX < (BX[11] + 80) && BY[11] < canvasY && canvasY < (BY[11] + 40)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] + 40 == BX[i] && BY[11] == BY[i]) {
						Freemove = false;
					}
				}

				if (BX[11] + 40 == 360) {
					Freemove = false;;
				}

				if (Freemove) {
					BX[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			if (BX[11] + 40 < canvasX && canvasX < (BX[11] + 80) && BY[11] - 40 < canvasY && canvasY < (BY[11])) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] + 40 == BX[i] && BY[11] - 40 == BY[i]) {
						Freemove = false;
					}
				}

				if (BY[11] - 40 == 0 || BX[11] + 40 == 360) {
					Freemove = false;;
				}

				if (Freemove) {
					BY[11] -= 40;
					BX[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			if (BX[11] < canvasX && canvasX < (BX[11] + 40) && BY[11] - 40 < canvasY && canvasY < (BY[11])) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] == BX[i] && BY[11] - 40 == BY[i]) {
						Freemove = false;
					}
				}

				if (BY[11] - 40 == 0) {
					Freemove = false;;
				}

				if (Freemove) {
					BY[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			if (BX[11] - 40 < canvasX && canvasX < (BX[11]) && BY[11] - 40 < canvasY && canvasY < (BY[11])) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] - 40 == BX[i] && BY[11] - 40 == BY[i]) {
						Freemove = false;
					}
				}

				if (BY[11] - 40 == 0 || BX[11] - 40 == 0) {
					Freemove = false;;
				}

				if (BX[11] == 360) {
					Freemove = false;
				}

				if (Freemove) {
					BY[11] -= 40;
					BX[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			if (BX[11] - 40 < canvasX && canvasX < (BX[11]) && BY[11] < canvasY && canvasY < (BY[11] + 40)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] - 40 == BX[i] && BY[11] == BY[i]) {
						Freemove = false;
					}
				}

				if (BY[11] == 0 || BX[11] - 40 == 0) {
					Freemove = false;;
				}

				if (Freemove) {
					BX[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			if (BX[11] - 40 < canvasX && canvasX < (BX[11]) && BY[11] + 40 < canvasY && canvasY < (BY[11] + 80)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (BX[11] - 40 == BX[i] && BY[11] + 40 == BY[i]) {
						Freemove = false;
					}
				}

				if (BY[11] + 40 == 360 || BX[11] - 40 == 0) {
					Freemove = false;;
				}

				if (Freemove) {
					BY[11] += 40;
					BX[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (BX[11] == WX[i] && BY[11] == WY[i]) {
							WX[i] = 0;
							WY[i] = 0;
						}
					}
					DrawPieces();
				}
			}
			Bkingmove = false;
		}
	}
}

function Wk() {
	if (turn == false) {
		if (WX[11] < canvasX && canvasX < (WX[11] + 40) && WY[11] < canvasY && canvasY < (WY[11] + 40)) {
			Wkingmove = true;
		}
	}
}

function WkingMove() {
	if (Wkingmove) {
		if (WX[11] < canvasX && canvasX < (WX[11] + 40) && WY[11] < canvasY && canvasY < (WY[11] + 40)) {
			Wkingmove = true;
		}
		else {
			if (WX[11] < canvasX && canvasX < (WX[11] + 40) && WY[11] + 40 < canvasY && canvasY < (WY[11] + 80)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] == WX[i] && WY[11] + 40 == WY[i]) {
						Freemove = false;
					}
				}

				if (WY[11] + 40 == 360) {
					Freemove = false;;
				}

				if (Freemove) {
					WY[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			if (WX[11] + 40 < canvasX && canvasX < (WX[11] + 80) && WY[11] + 40 < canvasY && canvasY < (WY[11] + 80)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] + 40 == WX[i] && WY[11] + 40 == WY[i]) {
						Freemove = false;
					}
				}

				if (WY[11] + 40 == 360 || WX[11] + 40 == 360) {
					Freemove = false;
				}

				if (WX[11] == 0) {
					Freemove = false;
				}

				if (Freemove) {
					WY[11] += 40;
					WX[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			if (WX[11] + 40 < canvasX && canvasX < (WX[11] + 80) && WY[11] < canvasY && canvasY < (WY[11] + 40)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] + 40 == WX[i] && WY[11] == WY[i]) {
						Freemove = false;
					}
				}

				if (WX[11] + 40 == 360) {
					Freemove = false;;
				}

				if (Freemove) {
					WX[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			if (WX[11] + 40 < canvasX && canvasX < (WX[11] + 80) && WY[11] - 40 < canvasY && canvasY < (WY[11])) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] + 40 == WX[i] && WY[11] - 40 == WY[i]) {
						Freemove = false;
					}
				}

				if (WY[11] - 40 == 0 || WX[11] + 40 == 360) {
					Freemove = false;;
				}

				if (Freemove) {
					WY[11] -= 40;
					WX[11] += 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			if (WX[11] < canvasX && canvasX < (WX[11] + 40) && WY[11] - 40 < canvasY && canvasY < (WY[11])) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] == WX[i] && WY[11] - 40 == WY[i]) {
						Freemove = false;
					}
				}

				if (WY[11] - 40 == 0) {
					Freemove = false;;
				}

				if (Freemove) {
					WY[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			if (WX[11] - 40 < canvasX && canvasX < (WX[11]) && WY[11] - 40 < canvasY && canvasY < (WY[11])) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] - 40 == WX[i] && WY[11] - 40 == WY[i]) {
						Freemove = false;
					}
				}

				if (WY[11] - 40 == 0 || WX[11] - 40 == 0) {
					Freemove = false;;
				}

				if (Freemove) {
					WY[11] -= 40;
					WX[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			if (WX[11] - 40 < canvasX && canvasX < (WX[11]) && WY[11] < canvasY && canvasY < (WY[11] + 40)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] - 40 == WX[i] && WY[11] == WY[i]) {
						Freemove = false;
					}
				}

				if (WY[11] == 0 || WX[11] - 40 == 0) {
					Freemove = false;;
				}

				if (Freemove) {
					WX[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			if (WX[11] - 40 < canvasX && canvasX < (WX[11]) && WY[11] + 40 < canvasY && canvasY < (WY[11] + 80)) {
				var Freemove = true;
				for (var i = 0; i < 16; i++) {
					if (WX[11] - 40 == WX[i] && WY[11] + 40 == WY[i]) {
						Freemove = false;
					}
				}

				if (WY[11] + 40 == 360 || WX[11] - 40 == 0) {
					Freemove = false;;
				}

				if (Freemove) {
					WY[11] += 40;
					WX[11] -= 40;
					for (var i = 0; i < 16; i++) {
						if (WX[11] == BX[i] && WY[11] == BY[i]) {
							BX[i] = 360;
							BY[i] = 360;
						}
					}
					DrawPieces();
				}
			}
			Wkingmove = false;
		}
	}
}

var redraw = document.querySelector(".Redraw");

redraw.addEventListener("click", Redraw);

function Redraw () {
	var AI_ONLINE = false;
	if (AI) {
		AI = false;
		AI_ONLINE = true;
	}
	for (var i = 0; i < 2; i++) {
		DrawPieces();
	}
	if (AI_ONLINE) {
		AI = true;
	}
}

var PVP_btn = document.querySelector(".btnpvp");

PVP_btn.addEventListener("click", PVP);

function PVP() {
	var x = 40;
	var by = 80;
	var wy = 280;
	for (var i = 0; i < 16; i++) {
		BX[i] = x;
		WX[i] = x;
		x += 40;
		if (x == 360) {
			x = 40;
		}
		BY[i] = by;
		if (i == 7) {
			by = 40;
		}
		WY[i] = wy;
		if (i == 7) {
			wy = 320;
		}
	}
	turn = true;
	DrawPieces();
	if (AI) {
		AI = false;
	}
}

var PVCP_btn = document.querySelector(".btnpvcp");

PVCP_btn.addEventListener("click", PVCP);

function PVCP() {
	PVP();
	AI = true;
}

DrawPieces();

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

canvasX, canvasY = canvas.addEventListener("click", relMouseCoords);

canvas.addEventListener("click", Bp);

canvas.addEventListener("click", BpMoving);

canvas.addEventListener("click", Wp);

canvas.addEventListener("click", WpMoving);

canvas.addEventListener("click", Bt1);

canvas.addEventListener("click", Btower1Move);

canvas.addEventListener("click", Bt2);

canvas.addEventListener("click", Btower2Move);

canvas.addEventListener("click", Wt1);

canvas.addEventListener("click", Wtower1Move);

canvas.addEventListener("click", Wt2);

canvas.addEventListener("click", Wtower2Move);

canvas.addEventListener("click", Bh1);

canvas.addEventListener("click", Bhorse1Move);

canvas.addEventListener("click", Bh2);

canvas.addEventListener("click", Bhorse2Move);

canvas.addEventListener("click", Wh1);

canvas.addEventListener("click", Whorse1Move);

canvas.addEventListener("click", Wh2);

canvas.addEventListener("click", Whorse2Move);

canvas.addEventListener("click", Br1);

canvas.addEventListener("click", Brunner1Move);

canvas.addEventListener("click", Br2);

canvas.addEventListener("click", Brunner2Move);

canvas.addEventListener("click", Wr1);

canvas.addEventListener("click", Wrunner1Move);

canvas.addEventListener("click", Wr2);

canvas.addEventListener("click", Wrunner2Move);

canvas.addEventListener("click", Bq);

canvas.addEventListener("click", BqueenMove);

canvas.addEventListener("click", Wq);

canvas.addEventListener("click", WqueenMove);

canvas.addEventListener("click", Bk);

canvas.addEventListener("click", BkingMove);

canvas.addEventListener("click", Wk);

canvas.addEventListener("click", WkingMove);