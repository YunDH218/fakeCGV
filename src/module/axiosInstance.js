import axios from "axios";
import url from "../resource/string/url.json";
import getCookie from "./getCookie";

const axiosInstance = axios.create({
	baseURL: url.baseURL,
	headers:{
		'accessToken': getCookie('accessToken'),
		'refreshToken': getCookie('refreshToken')
	},
	timeout: 1000
});

export default axiosInstance;