import React from 'react'

interface Props {
    image: any
}

const Movie = (props: Props) => {

    const renderPosters = () => {
        if (props.image.poster_path === null) {
            return <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        } else {
            return <img src={`http://image.tmdb.org/t/p/w185${props.image.poster_path}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        }
    }

    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light" style={{width: '100%', height: '340px'}}>
                    {renderPosters()}
                </div>
                <div className="card-content" style={{height: 120}}>
                    <p style={{fontWeight: 'bold'}}>{props.image.title}</p>
                    <p><a href="#">View details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie