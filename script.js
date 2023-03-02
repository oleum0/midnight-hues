function updateTime() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();

		hours = (hours < 10 ? "0" : "") + hours;
		minutes = (minutes < 10 ? "0" : "") + minutes;

		document.getElementById("hours").textContent = hours;
		document.getElementById("minutes").textContent = minutes;
		}

		setInterval(updateTime, 1000);
		  