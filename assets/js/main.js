console.log("Main.js loading...");

// Get current month and day
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

// Global variables
let openedDays = [];

// On DOM load
document.addEventListener("DOMContentLoaded", function () {
	console.log("DOM loaded");

	// DOM elements
	const doors = document.querySelectorAll(".door");

	// Loop through doors
	doors.forEach(function (door) {
		// Add click event listener
		door.addEventListener("click", function () {
			// Get door number
			const dayElement = door.parentElement;

			// Open door
			openDay(dayElement);
		});
		console.log("Door loaded");
	});

	// Load days
	loadDays();
});

// Open day
function openDay(day) {
	// If current day bigger than day and current month is october
	if (day.dataset.day <= currentDay && currentMonth === 10) {
		// Open door for day element
		day.classList.toggle("open");

		// Add day number to array if open
		if (day.classList.contains("open")) {
			openedDays.push(day.dataset.day);
			console.log("Opened day: " + day.dataset.day);
		} else {
			// Remove day number from array if closed
			openedDays = openedDays.filter(function (openDay) {
				return openDay !== day.dataset.day;
			});
			console.log("Closed day: " + day.dataset.day);
		}

		// Save days to local storage
		saveDays();
	} else {
		// If door is not openable
		day.classList.add("shake");

		setTimeout(function () {
			day.classList.remove("shake");
		}, 600);
	}
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
	localStorage.setItem(
		"calendarData",
		JSON.stringify({ openedDays: openedDays, lastUpdated: (lastUpdated = new Date()) })
	);
}

// Load days
function loadDays() {
	// Get days from local storage
	const calendarData = JSON.parse(localStorage.getItem("calendarData"));

	// Check if days are available
	if (calendarData) {
		// Open days
		openDays(calendarData.openedDays);
	}
}

console.log("Main.js loaded");
