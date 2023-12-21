const container = document.querySelector(".container");
const gridsPlayer = document.querySelector(".player-grids");
const gridsEnemy = document.querySelector(".enemy-grids");

const btnAddPlayerShip = document.querySelector(".add-player-ship");
const btnAddEnemyShip = document.querySelector(".add-enemy-ship");
const btnHidePlayer = document.querySelector(".hide-player");
const btnHideEnemy = document.querySelector(".hide-enemy");

let objShipPlayer = {
	ships: [],
	current_index: 0,
};
let objShipEnemy = {
	ships: [],
	current_index: 0,
};

let tempShip = [];
let addingShip = false;

let handleCallback;

function buildGame() {
	for (let i = 0; i < 100; i++) {
		const gp = `<div class="grid grid-player"></div>`;
		const ge = `<div class="grid grid-enemy"></div>`;

		gridsPlayer.innerHTML += gp;
		gridsEnemy.innerHTML += ge;
	}
}

function handleClickEventsToGrids(g) {
	let isPlayer = true;
	if (g.classList.contains("grid-player")) {
		g.classList.toggle("ship-player");
	} else {
		g.classList.toggle("ship-enemy");
		isPlayer = false;
	}

	if (addingShip) {
		tempShip.push(g);
	}
}

function enableClickEventsToGrids() {
	const grids = document.querySelectorAll(".grid");

	grids.forEach((g) => {
		handleCallback = (e) => handleClickEventsToGrids(g);
		g.addEventListener("click", handleCallback);
	});
}
function disableClickEventsToGrids() {
	const grids = document.querySelectorAll(".grid");

	grids.forEach((g) => {
		g.addEventListener("click", function () {});
	});
}

btnAddPlayerShip.addEventListener("click", function () {
	if (btnAddPlayerShip.textContent === "Nieuwe schip") {
		enableClickEventsToGrids();
		alert("Selecteer aantal vlakken voor een schip!");
		tempShip = [];
		btnAddPlayerShip.textContent = "Klaar";
		addingShip = true;
	} else {
		disableClickEventsToGrids();
		alert("Je schip is opgeslagen!");
		objShipPlayer.ships.push(tempShip);
		btnAddPlayerShip.textContent = "Nieuwe schip";
		addingShip = false;
	}
});
btnAddEnemyShip.addEventListener("click", function () {
	if (btnAddEnemyShip.textContent === "Nieuwe schip") {
		enableClickEventsToGrids();
		alert("Selecteer aantal vlakken voor een schip!");
		tempShip = [];
		btnAddEnemyShip.textContent = "Klaar";
	} else {
		disableClickEventsToGrids();
		alert("Je schip is opgeslagen!");
		objShipEnemy.ships.push(tempShip);
		btnAddEnemyShip.textContent = "Nieuwe schip";
	}
});

btnHidePlayer.addEventListener("click", function () {
	if (btnHidePlayer.textContent === "Hide ships") {
		objShipPlayer.ships.forEach((ship) => {
			ship.forEach((item) => {
				item.classList.toggle("ship-player");
			});
		});
		btnHidePlayer.textContent = "Show ships";
	} else {
		objShipPlayer.ships.forEach((ship) => {
			ship.forEach((item) => {
				item.classList.toggle("ship-player");
			});
		});
		btnHidePlayer.textContent = "Hide ships";
	}
});

buildGame();
// enableClickEventsToGrids();
