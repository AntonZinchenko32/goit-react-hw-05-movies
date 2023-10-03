import axios from 'axios';

const getMovieCastInfo = async id => {
      const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/credits',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjc0M2RlNDU3ZDViMzBiYWZkMmIzNWRiOWI2NjVjYyIsInN1YiI6IjY1MTZiN2U0OTY3Y2M3MDBjNTE4NjNhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._d9AXpjTuGyWcGExFAjlG2UnavuMrCOWucVNjUGVUgg'
  }
};

    const { data } = await axios.request(options)
    return data
}
  
export default getMovieCastInfo;