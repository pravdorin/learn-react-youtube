import axios from 'axios';

const KEY = 'AIzaSyBRWxfvm2O0tKMm45V-vz38jmgqqdnnP_s';

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: 'snippet',
		type: 'video',
		maxResult: 5,
		key: `${KEY}`,
	}
});
