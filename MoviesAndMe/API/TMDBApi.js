const API_TOKEN = "0faf5b4f007ab7e3707ae64912dbbecd";

export function getFilmsFromApiWithSearchedText (text, page) {
	const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
	return fetch(url)
	  .then((response) => response.json())
	  .catch((error) => console.error(error))
  }
export function getImageFromApi(name) {
	if (name == null) {
		return 'https://via.placeholder.com/150/0000FF/FFFFFF/?text=NoImage'
		
	} else {

		return 'https://image.tmdb.org/t/p/w300'+ name
	}
}