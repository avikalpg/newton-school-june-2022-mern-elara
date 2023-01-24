import { fetchMovieList, fetchMovieAvailability } from './api.js';

const main = document.getElementById("container");
main.innerHTML = "<div id='loader'>Loading...</div>"

fetchMovieList().then(data => {
	const movie_holder = document.createElement("div")
	movie_holder.className = "movie-holder";
	data.forEach(movie => {
		const movie_anchor = document.createElement("a");
		movie_anchor.classList.add("movie-link");
		movie_anchor.href = "/" + movie.name;

		const movie_div = document.createElement("div");
		movie_div.classList.add("movie");
		movie_div.setAttribute("data-d", movie.name);

		const movie_img_wrapper = document.createElement("div");
		movie_img_wrapper.classList.add("movie-img-wrapper");
		movie_img_wrapper.style.backgroundImage = `url(${movie.imgUrl})`;
		movie_img_wrapper.style.backgroundSize = "cover";

		const movie_heading = document.createElement("h4");
		movie_heading.innerHTML = movie.name;

		movie_div.replaceChildren(movie_img_wrapper, movie_heading);

		movie_anchor.addEventListener("click", movie_anchor_handler(movie.name));

		movie_anchor.appendChild(movie_div);
		movie_holder.appendChild(movie_anchor);
	});
	main.replaceChildren(movie_holder);
})

const movie_anchor_handler = (movie_name) => (event) => {
	event.preventDefault();
	const booker_div = document.getElementById('booker');
	booker_div.innerHTML = "Loading...";
	// booker_div.id = "loader";
	fetchMovieAvailability(movie_name).then(data => {
		console.log(data);
	})
}