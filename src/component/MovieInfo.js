import styled from 'styled-components';
import Button from './Button';

const MovieInfo = props => {
    return (
        <InfoBox>
            <StyledButton onClick={props?.onBtnTicketClick}>Buy Ticket</StyledButton>
            <div className='movie-info-headerline'>movie info</div>
            <span className='movie-title'>{props?.movie?.title}</span>
            <span className='release-and-runtime'>{'(' + props?.movie?.releasedate?.slice(0, 4) + ', ' + props?.movie?.runtime + ')'}</span>
            <div className='preview-section' />
            <img className='poster' src={props?.movie?.poster} alt={props?.movie?.title} />
            <div className='genre-list'>{
                props?.movie?.genre?.map((genre, key) => 
                    <div className='genre' title={`search "#${genre}"`} key={key}>{genre}</div>
                )
            }</div>
            <span className='label'>Director : </span>{props?.movie?.director?.join(', ')}<br />
            <span className='label'>Stars : </span>{props?.movie?.stars?.join(', ')}<br /><br />
            <span className='description'>{props?.movie?.description}</span>
        </InfoBox>
    );
};

const InfoBox = styled.div`
    font-size: 16px;
    .movie-info-headerline {
        color: #f00;
        text-transform: capitalize;
        margin-left: 50px;
        margin-bottom: 8px;
    }
    .movie-title {
        margin-left: 50px;
        color: #000;
        font-size: 30px;
    }
    .release-and-runtime {
        color: #aaa;
        font-size: 16px;
    }
    .preview-section {
        width: 100%;
        height: 350px;
        position: absolute;
        top: 120px;
        right: 0;
        left: 0;
        margin: 0 auto;
        background: #000;
    }
    .poster {
        display: block;
        position: absolute;
        top: 120px;
        left: 0;
        right: 0;
        height: 350px;
        margin: 0 auto;
    }
    .genre-list {
        display: flex;
        margin-top: 370px;
        margin-bottom: 10px;
        gap: 10px;
        
        .genre {
            height: 30px;
            color: #888;
            font-size: 16px;
            padding: 5px 10px;
            border: solid 2px #888;
            border-radius: 15px;
            box-sizing: border-box;
            cursor: pointer;
            transition: .5s;
            
            &:hover {
                color: #fff;
                background: #888;
            }
        }
    }
    .label {
        color: #f00;
        line-height: 25px;
    }
    .description {
        line-height: 25px;
    }
`;

const StyledButton =styled(Button)`
    position: absolute;
    right: 50px;
`;

export default MovieInfo;