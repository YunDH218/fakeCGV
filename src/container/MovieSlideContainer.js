import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Wrapper from '../component/Wrapper';
import MovieTile from '../component/MovieTile';
import Images from '../resource/image/Images.png';

export default function MovieSlideContainer () {
	return (
		<MovieChartContainerBox>
			<p className="title">MOVIE CHART</p>
			<SwiperWithPadding
				modules={[Navigation]}
				slidesPerView={5}
				navigation
			>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
				<SwiperSlide><MovieTile noRank /></SwiperSlide>
			</SwiperWithPadding>
		</MovieChartContainerBox>
	);
}

const MovieChartContainerBox = styled(Wrapper)`
	font-size: 20px;
	padding-top: 40px;
	.title {
		margin: 0;
		margin-bottom: 20px;
	}
	.swiper-button-prev, .swiper-button-next {
		&::after {
		  content: ' ';
			color: #000;
			min-width: 40px;
			min-height: 40px;
			max-height: 40px;
			border-radius: 20px;
			box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
			background-color: rgba(255, 255, 255, .8);
			background-image: url(${Images});
			background-position: 0 -86px;
		}
	}
	.swiper-button-next {
		&::after {
			background-position: -36px -86px;
		}
	}
`;

const SwiperWithPadding = styled(Swiper)`
	padding-top: 5px;
`