


const fetchMovies = async (getFromBackEndFn, fetchDistination) => {
    try {
        const data = await getFromBackEndFn;
        console.log(data.results);

        fetchDistination(prevState => [...prevState, ...data.results]);
    } catch (error) {
        console.log(error.message);
    }
}


    
export default fetchMovies