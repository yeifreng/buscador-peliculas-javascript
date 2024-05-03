document.getElementById('searchButton').addEventListener('click', searchMovies)


let apiKey = '047661fd4f945020de274f7f9cceb56b';
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let pelicula = 'titanic'
// ?query=Jack+Reacher&api_key=047661fd4f945020de274f7f9cceb56b

function searchMovies(){
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?query=${pelicula}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
}