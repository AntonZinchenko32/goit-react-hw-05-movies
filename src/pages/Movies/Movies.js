import { Button } from "./Movies,styled";
import getMoviesBySearch from "components/services/api";
// import { SearchBox } from "components/SearchBox/SearchBox";


const Movies = () => {
  return (
    <div>
      <Button type="button" onClick={()=>getMoviesBySearch('frog')}>Search</Button>
    </div>
  )
};

export default Movies;
