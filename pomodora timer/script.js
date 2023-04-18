const timerDisplay = document.querySelector('.time-left');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
let countdown;

function timer(seconds) {
	clearInterval(countdown);

	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		if(secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}

		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	timerDisplay.textContent = display;
	document.title = display;
}

startBtn.addEventListener('click', () => {
	const minutes = 25;
	timer(minutes * 60);
});

pauseBtn.addEventListener('click', () => {
	clearInterval(countdown);
});

resetBtn.addEventListener('click', () => {
	clearInterval(countdown);
	timerDisplay.textContent = '25:00';
	document.title = 'Pomodoro Timer';
});
