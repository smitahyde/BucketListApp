import axios from 'axios';

export const 'CREATE_POST' = 'CREATE_POST';

const ROOT_URL = 'http://rest.learncode.academy/api/smita';

export function createPost(props) {
	const request = axios.post('${Root_URL}/posts', props);
	return{
		 type: CREATE_POST,
		 payload: request
	};
}