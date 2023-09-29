import { Button } from "./Movies,styled";
import getMoviesBySearch from "components/services/api";
// import { SearchBox } from "components/SearchBox/SearchBox";


const Movies = () => {

  const getResults = async () => {
    const data = await getMoviesBySearch('sex')
    console.log(data.results);
  }

  return (
    <div>
      <Button type="button" onClick={()=>getResults()}>Search</Button>
    </div>
  )
};

export default Movies;
 