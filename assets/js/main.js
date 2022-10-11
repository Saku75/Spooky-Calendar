// Get current month and day
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();

// Global variables
let openedDays = [];

// On DOM load
document.addEventListener("DOMContentLoaded", function () {
	// DOM elements
	const doors = document.querySelectorAll(".door");

	// Loop through doors
	doors.forEach(function (door) {
		door.addEventListener("click", function () {
			// Get door number
			const dayElement = door.parentElement;

			// Open door
			openDay(dayElement);
		});
	});

	// Load days
	loadDays();
});

// Open day
function openDay(day) {
	// Open door for day element
	day.classList.toggle("open");

	// Add day number to array if open
	if (day.classList.contains("open")) {
		openedDays.push(day.dataset.day);
	} else {
		// Remove day number from array if closed
		openedDays = openedDays.filter(function (openDay) {
			return openDay !== day.dataset.day;
		});
	}

	// Save days to local storage
	saveDays();
}

// Open days
function openDays(openedDays) {
	// Loop through days
	openedDays.forEach(function (day) {
		// Get day element
		const dayElement = document.querySelector(`.day[data-day="${day}"]`);

		// Open day
		openDay(dayElement);
	});
}

// Save days
function saveDays() {
	// Save days to local storage
	localStorage.setItem("openedDays", JSON.stringify(openedDays));
}

// Load days
function loadDays() {
	// Get days from local storage
	const days = JSON.parse(localStorage.getItem("openedDays"));

	// Check if days are available
	if (days) {
		// Open days
		openDays(days);
	}
}
