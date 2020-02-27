import React from 'react'
import Movie from './Movie'

interface Props {
    movies: Object[]
}

const MovieList = (props: Props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return <Movie key={i} image={movie}/>
                        })
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList