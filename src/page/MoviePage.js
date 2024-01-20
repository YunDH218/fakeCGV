import styled from 'styled-components';
import Wrapper from '../component/Wrapper';
import MovieTile from '../component/MovieTile';

export default function MovieContainer() {
    return (
        <MovieContainerBox>
        	<p className="title">MOVIE CHART</p>
        	<MovieTiles>
                <MovieTile
                    title='Seoul-ui bom'
                    poster='https://url.kr/ti3goc'
                    onBtnInfoClick={ e => {console.log('show info')} }
                    onBtnTicketClick={ e => {console.log('to ticket')} }
                />
                <MovieTile
                    title='Elemental'
                    poster='https://url.kr/jd5fsz'
                />
                <MovieTile
                    title='Wish'
                    poster='https://url.kr/dawsqp'
                />
            </MovieTiles>
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