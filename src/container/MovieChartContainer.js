import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Wrapper from '../component/Wrapper';
import leftArrow from '../resource/image/left_arrow.png';
import rightArrow from '../resource/image/right_arrow.png';

export default function MovieChartContainer () {
	return (
		<MovieChartContainerBox>
			<p className="title">MOVIE CHART</p>
			<Swiper
				modules={[Navigation]}
				slidesPerView={5}
				navigation
			>
				<SwiperSlide><MovieTile /></SwiperSlide>
				<SwiperSlide><MovieTile /></SwiperSlide>
				<SwiperSlide><MovieTile /></SwiperSlide>
				<SwiperSlide><MovieTile /></SwiperSlide>
				<SwiperSlide><MovieTile /></SwiperSlide>
				<SwiperSlide><MovieTile /></SwiperSlide>
			</Swiper>
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
			background-image: url(${leftArrow});
			background-repeat: no-repeat;
			background-position: center;
			background-size: 9px 13px;
		}
	}
	.swiper-button-next {
		&::after {
			background-image: url(${rightArrow});
		}
	}
`
const MovieTile = styled.div`
	width: 170px;
	height: 234px;
	margin: 0 auto;
	background-color: #d9d9d9;
	border-radius: 10px;
`