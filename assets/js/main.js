// Get current month and day
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

// Service worker
const registerServiceWorker = async () => {
	if ("serviceWorker" in navigator) {
		try {
			const registration = await navigator.serviceWorker.register("/sw.js", {
				scope: "/",
			});
			if (registration.installing) {
				console.log("Service worker installing");
			} else if (registration.waiting) {
				console.log("Service worker installed");
			} else if (registration.active) {
				console.log("Service worker active");
			}
		} catch (error) {
			console.error(`Registration failed with ${error}`);
		}
	}
};

registerServiceWorker();

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
	// If current day bigger than day and current month is october
	if (day.dataset.day <= currentDay && currentMonth === 10) {
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
	// Save days to local storagess
	localStorage.setItem(
		"calendarData",
		JSON.stringify({ openedDays: openedDays, lastUpdated: (lastUpdated = new Date()) })
	);
}

// Load days
function loadDays() {
	// Get days from local storage
	const days = JSON.parse(localStorage.getItem("calendarData"));

	// Check if days are available
	if (days) {
		// Open days
		openDays(days);
	}
}
