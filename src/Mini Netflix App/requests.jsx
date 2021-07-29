const API_KEY = 'c7693ab566fbbee4a9521c0f46c02d82';
const baseURL = 'https://api.themoviedb.org/3';
// const marvelMovies =
// 	'https://api.themoviedb.org/3/discover/movie?api_key=c7693ab566fbbee4a9521c0f46c02d82&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=420|19551|38679|2301|13252';

const requests = {
	fecthTrending: `${baseURL}/trending/all/day?api_key=${API_KEY}&language=en-US`,

	fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fecthMarvelMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=2&with_companies=420|19551|38679|2301|13252`
};
export default requests;
