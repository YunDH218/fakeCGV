import { useState } from 'react';
import styled from 'styled-components';
import MovieInfo from '../component/MovieInfo';
import MovieTile from '../component/MovieTile';
import Wrapper from '../component/Wrapper';
import PopUp from '../component/PopUp';
import movieList from '../resource/string/movieList.json';

export default function MovieContainer() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    return (
        <MovieContainerBox>
        	<p className="title">MOVIE CHART</p>
        	<MovieTiles>
        	    {movieList.map(movie =>
        	        <MovieTile
        	            title={movie.title}
        	            poster={movie.poster}
                        onBtnInfoClick={e => { setOpenModal(true); setSelectedMovie(movie); }}
                        onBtnTicketClick={ e => {console.log('to ticket')} }
        	        />
        	    )}
            </MovieTiles>
            {openModal && 
                <PopUp handleCloseButton={e => { setOpenModal(false) }}>
                    <MovieInfo movie={selectedMovie} />
                </PopUp>
            }
        </MovieContainerBox>
    );
}

const MovieContainerBox = styled(Wrapper)`
	font-size: 20px;
	padding-top: 40px;
	.title {
		margin: 0;
		margin-bottom: 20px;
	}
`;
const MovieTiles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 50px;
`;