import getMovieReviews from "components/services/get-movie-reviews";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Container, ListItem, ReviewBox, NotFoundMessage } from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Записуємо дані з бекенду
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
        
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchMovie();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {reviews && reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <ListItem key={review.id}>
              <ReviewBox>
                <b>Author: {review.author}</b>
                <p>{review.content}</p>
              </ReviewBox>
            </ListItem>
          ))}
        </ul>
      ) : (
        reviews !== null && (
          <NotFoundMessage>Reviews is not avaliable</NotFoundMessage>
        )
      )}
    </Container>
  )
};

export default Reviews;
