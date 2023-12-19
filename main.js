const container = document.querySelector(".container");
const gridsPlayer = document.querySelector(".player-grids");
const gridsEnemy = document.querySelector(".enemy-grids");

const btnPlayerShip2 = document.querySelector(".ship2-player");
const btnPlayerShip3 = document.querySelector(".ship3-player");
const btnPlayerShip4 = document.querySelector(".ship4-player");
const btnPlayerShip5 = document.querySelector(".ship5-player");

const btnEnemyShip2 = document.querySelector(".ship2-enemy");
const btnEnemyShip3 = document.querySelector(".ship3-enemy");
const btnEnemyShip4 = document.querySelector(".ship4-enemy");
const btnEnemyShip5 = document.querySelector(".ship5-enemy");

const shipsPlayer = [[], [], [], []];
let currentPlayerShip = 0;
const shipsEnemy = [[], [], [], []];
let currentEnemyShip = 0;
let shipTurn = 0; // 0: player, 1: enemy
let shipPlacement = false;

function buildGame() {
	for (let i = 0; i < 100; i++) {
		const gp = `<div class="grid grid-player"></div>`;
		const ge = `<div class="grid grid-enemy"></div>`;

		gridsPlayer.innerHTML += gp;
		gridsEnemy.innerHTML += ge;
	}
}

function addClickEventsToGrids() {
	const grids = document.querySelectorAll(".grid");

	grids.forEach((g) => {
		g.addEventListener("click", function () {
			if (g.classList.contains("grid-player")) {
				g.classList.toggle("ship-player");
				if (shipPlacement) {
					putShip(shipsPlayer[currentPlayerShip]);
				}
			} else {
				g.classList.toggle("ship-enemy");
			}
		});
	});
}

btnPlayerShip2.addEventListener("click", function () {
	if (!confirmResetShips(shipsPlayer[0], 2)) {
		return;
	}

	currentPlayerShip = 2;
	shipTurn = 0;
	placeShip(shipsPlayer[0], 2);
});
btnPlayerShip3.addEventListener("click", function () {
	if ((!confirmResetShips(shipsPlayer[1]), 3)) {
		console.log("");
		return;
	}

	currentPlayerShip = 2;
	shipTurn = 0;
	placeShip(shipsPlayer[1], 3);
});
btnPlayerShip4.addEventListener("click", function () {});
btnPlayerShip5.addEventListener("click", function () {});

btnEnemyShip2.addEventListener("click", function () {});
btnEnemyShip3.addEventListener("click", function () {});
btnEnemyShip4.addEventListener("click", function () {});
btnEnemyShip5.addEventListener("click", function () {});

function confirmResetShips(ship, model) {
	let result = true;
	if ((isShipComplete(ship), model)) {
		if (confirm("Opnieuw schip plaatsen")) {
			ship = [];
			result = true;
		} else {
			result = false;
		}
	}

	return result;
}

function placeShip(ship, model) {
	if (ship[0] !== undefined && checkShipComplete(ship)) {
		return;
	}

	switch (model) {
		case 2:
			// maak 2 blokken
			alert("Maak schip met 2 vakken");
			break;
		case 3:
			// maak 3 blokken
			alert("Maak schip met 3 vakken");
			break;
		case 4:
			// maak 4 blokken
			alert("Maak schip met 4 vakken");
			break;
		case 5:
			// maak 5 blokken
			alert("Maak schip met 5 vakken");
			break;
		default:
			break;
	}
}
function isShipComplete(ship, model) {
	switch (model) {
		case 2:
			return checkShipComplete(ship, 2);
		case 3:
			return checkShipComplete(ship, 3);
		case 4:
			return checkShipComplete(ship, 4);
		case 5:
			return checkShipComplete(ship, 5);
	}

	return false;
}
function checkShipComplete(ship, length) {
	let complete = true;
	for (let i = 0; i < length; i++) {
		const sector = ship[i];
		if (sector === undefined) {
			complete = false;
		}
	}

	return complete;
}

function putShip(ship, index) {
	for (let i = 0; i < ship.length; i++) {
		const element = ship[i];
		if (element === undefined) {
			element = index;

			if (i === ship.length) {
				console.log("Ship is complete ✅");
			}

			break;
		}
	}
}

buildGame();
addClickEventsToGrids();
