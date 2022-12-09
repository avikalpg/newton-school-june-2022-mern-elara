// randomly arrange the images
const imageSources = [
	"https://th.bing.com/th/id/R.1e993c78c81c183bb75e6a4cbfc560d4?rik=XzK42rVsoOsA8Q&riu=http%3a%2f%2fimages.clipartpanda.com%2fwalrus-clip-art-gg68723273.jpg&ehk=zKpi3TxYFHyziSMNKHI32Jegm%2f%2b%2fPh39UP8Ll8e0fkE%3d&risl=&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.39069400544f65937d990b2226c94be2?rik=cVf1ZCMXdBcK5Q&riu=http%3a%2f%2fimages.clipartpanda.com%2fferret-clip-art-TN_ferret_01A_116.jpg&ehk=betaPDenVDrEUig8hPysqvjMIAL1%2fKbxThOs5NezwuI%3d&risl=&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.59f0053506449ef5136dc06fe9afbd84?rik=4yPXJSy%2fvtF9bQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fmagpie-clip-art-toonvectors-67418-140.jpg&ehk=BkopJAQE3v0O32rg6wLFAkwCCaZIN527HJADMP4D75s%3d&risl=&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.5b5d986337bb675f3a6445261e24ebb9?rik=2NiOlGwyU9jQVw&riu=http%3a%2f%2fimages.clipartpanda.com%2fpony-clip-art-4987624-vector-illustration-of-horse.jpg&ehk=8QGzRjBNHN7rHX8UOJUnEZsbErNwAT4wl3jwihOklW0%3d&risl=&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.03d9c054107a15a8e33d4c03ecff211f?rik=796gPc4bmOxbQQ&riu=http%3a%2f%2fclipart-library.com%2fnewimages%2fchicken-clip-art-23.jpg&ehk=HIldtLaEVdLnMGZD8j%2fuljFlNxUlgIrlQ4CsW%2bQk1kE%3d&risl=&pid=ImgRaw&r=0"
]

const repeatImg = Math.floor(Math.random() * imageSources.length);
const allImageSources = imageSources.concat([imageSources[repeatImg]]);
allImageSources.sort(function (a, b) { return 0.5 - Math.random() });

const clickedImages = [];
const imageContainer = document.getElementById("container");
for (let i = 0; i < allImageSources.length; i++) {
	const imgSrc = allImageSources[i];
	const image = document.createElement("img");
	image.classList.add("image");
	image.setAttribute("src", imgSrc);
	image.setAttribute("data-ns-test", imageSources.indexOf(imgSrc));
	image.setAttribute("id", i);
	image.addEventListener("click", () => {
		if (!image.classList.contains("clicked")) {
			image.classList.add("clicked");
		} else {
			image.classList.remove("clicked");
		}
		setState();
	})
	imageContainer.appendChild(image);
}

function setState() {
	const clickedTiles = [];
	const allImageElements = document.getElementsByTagName("img");
	for (const elem of allImageElements) {
		if (elem.classList.contains("clicked")) {
			clickedTiles.push(elem.getAttribute("data-ns-test"));
		}
	}
	// console.log(clickedTiles);
	if (clickedTiles.length == 0) {
		document.getElementById("reset").hidden = true;
	} else {
		document.getElementById("reset").hidden = false;
	}
	if (clickedTiles.length != 2) {
		document.getElementById("verify").hidden = true;
	} else {
		const verifyBtn = document.getElementById("verify");
		verifyBtn.hidden = false;
		verifyBtn.addEventListener("click", () => {
			const msgElem = document.getElementById("message");
			if (clickedTiles[0] == clickedTiles[1]) {
				msgElem.innerHTML = "You are a human. Congratulations!";
			} else {
				msgElem.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
			}
			verifyBtn.hidden = true;
		})
	}
}

function reset() {
	const allImageElements = document.getElementsByTagName("img");
	for (const elem of allImageElements) {
		if (elem.classList.contains("clicked")) {
			elem.classList.remove("clicked");
		}
	}
}
setState();