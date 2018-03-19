import {UPDATA_USER, SHOW_ERROR} from '../actions/user'
export default function userReducer(state = '',{type,payload}){
	switch(type){
		case UPDATA_USER:
			return payload.user;
		case SHOW_ERROR:
			return payload.user;
		default:
			return state;
	}
}