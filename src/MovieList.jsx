import './DisplayMovie.css'
export default function MovieList(props) {
    return(
        <div className='entry'>
            <div className='photo'>
                <img src={props.photo} alt="zeta"/>
            </div>
            <div className='info'>
                <div className='title'>
                    <h2>{props.title}</h2>
                </div>
                <div className='type'>
                    <h2>{props.type}</h2>
                </div>
                <div className='category'>
                    <h3>{props.category}</h3>
                </div>
            </div>
            <div className='tags'>
                <div className='premiere'>{props.premiere}</div>
                <div className='forKids'>{props.forkids}</div>
            </div>
            <div className='airing'>
                <div className="airingDate">{props.airing}</div>
                <div className="airingDate">{props.airing1}</div>
                <div className="airingDate">{props.airing2}</div>
            </div>
        </div>
    )
}