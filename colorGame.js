// "rgb(255, 0, 0)"
let colors = [
	'rgb(255, 0, 0)',
	'rgb(255, 255, 0)',
	'rgb(0, 255, 0)',
	'rgb(0, 255, 255)',
	'rgb(0, 0, 255)',
	'rgb(255, 0, 255)'
];
generateRandomColors(6);

function generateRandomColors(num) {
	colors = [];
	for (let i = 0; i < num; i++) {
		let r = getRandomInt(256);
		let g = getRandomInt(256);
		let b = getRandomInt(256);
		colors[i] = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}
}

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let newColorBtn = document.querySelector('#newColorBtn');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let easy = false;

easyBtn.addEventListener('click', function() {
	easy = true;
	h1.style.backgroundColor = 'steelblue';
	newColorBtn.textContent = 'New Colors';
	messageDisplay.textContent = '';
	this.classList.add('selected');
	hardBtn.classList.remove('selected');
	generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	for (let i = 3; i < 6; i++) {
		squares[i].style.backgroundColor = '#232323';
	}
	checkSquares(3);
});

hardBtn.addEventListener('click', function() {
	easy = false;
	h1.style.backgroundColor = 'steelblue';
	newColorBtn.textContent = 'New Colors';
	messageDisplay.textContent = '';
	this.classList.add('selected');
	easyBtn.classList.remove('selected');
	generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	checkSquares(6);
});
checkSquares(6);
function checkSquares(num) {
	colorDisplay.textContent = pickedColor;

	for (let i = 0; i < num; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener('click', function() {
			let clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				newColorBtn.textContent = 'Play Again?';
				changeColors(pickedColor, num);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function changeColors(color, num) {
	for (let i = 0; i < num; i++) {
		squares[i].style.backgroundColor = color;
	}
	if (num == 3) {
		for (let i = 3; i < 6; i++) {
			squares[i].style.backgroundColor = '#232323';
		}
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	console.log(colors[random]);
	return colors[random];
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

newColorBtn.addEventListener('click', function() {
	if (easy) generateRandomColors(3);
	else generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
	newColorBtn.textContent = 'New Colors';
	messageDisplay.textContent = '';
});
