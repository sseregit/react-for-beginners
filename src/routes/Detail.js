import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    async function getMovie() {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.large_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}/>)
            }
        </div>
    )
}

export default Detail;