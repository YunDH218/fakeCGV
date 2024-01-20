import styled from 'styled-components';
import Images from '../resource/image/Images.png';

const MovieTile = props =>
    <MovieTileBox>
        <img className='poster' src={props.poster} alt={props.title}/>
        <div className='title'>{props.title}</div>
        { props.noRank || <div className='rank' /> }
        <div className='button-group'>
	        <div className='button' onClick={props.onBtnInfoClick}>Movie Info</div>
	        <div className='button' onClick={props.onBtnTicketClick}>Buy Ticket</div>
        </div>
    </MovieTileBox>

const MovieTileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .poster {
        content: "";
        width: 170px;
        height: 234px;
        display: inline-block;
        border-radius: 10px;
        background: #d9d9d9;
        transition: .5s;
    }
    .title {
        padding-top: 10px;
    }
    .rank {
        position: absolute;
        left: 10px;
        bottom: 20px;
        background: url(${Images});
    }
    .button-group {
        position: absolute;
        top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 120px;
        height: 90px;
        box-sizing: border-box;
        transition: .5s;
        visibility: hidden;
        opacity: 0;
        .button {
            width: 120px;
            height: 40px;
            color: #ec6d6d;
            text-align: center;
            padding-top: 8px;
            border: solid 2px #ec6d6d;
            border-radius: 10px;
            box-sizing: border-box;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            transition: .5s;
            cursor: pointer;
            &:hover {
                background: #ec6d6d;
                color: #ffffff;
                border: solid 2px rgba(255, 0, 0, 0);
            }
        }
    }
    &:hover {
        .poster {
            filter: brightness(0.5) blur(2px);
        }
        .button-group {
            visibility: visible;
            opacity: 1;
        }
    }
    &:nth-child(1) .rank {
        width: 26px;
        height: 93px;
        background-position: 0 -200px;
    }
    &:nth-child(2) .rank {
        width: 35px;
        height: 93px;
        background-position: -26px -200px;
    }
    &:nth-child(3) .rank {
        width: 37px;
        height: 93px;
        background-position: -61px -200px;
    }
    &:nth-child(4) .rank {
        width: 38px;
        height: 93px;
        background-position:  -98px -200px;
    }
    &:nth-child(5) .rank {
        width: 42px;
        height: 93px;
        background-position:  -136px -200px;
    }
`;

export default MovieTile;