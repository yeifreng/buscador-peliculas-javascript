document.getElementById('searchButton').addEventListener('click', searchMovies)


let apiKey = '047661fd4f945020de274f7f9cceb56b';
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImage = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

function searchMovies(){

    
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => displayMovies(data.results))
}

function displayMovies(movies){

    
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p>No se econtraron resultados para tu busqueda</p>'
        return
    }
    for(movie of movies){
       let movieDiv = document.createElement('div')
       movieDiv.classList.add('movie')

       let title = document.createElement('h2')
       title.textContent = movie.title

       let releaseDate = document.createElement('p')
       releaseDate.textContent = `La fecha del lanzamiento fue: ${movie.release_date}`

       let overview = document.createElement('p')
       overview.textContent = movie.overview

       let posterPath = urlImage + movie.poster_path
       let poster = document.createElement('img')
       poster.src = posterPath


       movieDiv.appendChild(poster)
       movieDiv.appendChild(title)
       movieDiv.appendChild(releaseDate)
       movieDiv.appendChild(overview)


       resultContainer.appendChild(movieDiv)

    }
}