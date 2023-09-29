import { Button } from "./Movies,styled";
import getMoviesBySearch from "components/services/api";


const Movies = () => {
  return (
    <div>
      <Button type="button" onClick={()=>getMoviesBySearch('frog')}>Search</Button>
    </div>
  )
};

export default Movies;
