import $ from 'jquery';

export const UPDATA_USER = 'users:updateUser'
export const SHOW_ERROR  = 'users:showError'
export function updateUser(newUser){
	return{
		type:UPDATA_USER,
		payload:{
			user:newUser
		}
	}
}
export function showError(){
	return{
		type:SHOW_ERROR,
		payload:{
			user:"ERROR!"
		}
	}
}
export function apiRequest(){
	return dispatch => {
		$.ajax({
			url:'http://google.com',
			success(response){
				console.log('sucess')
				dispatch(updateUser(response.newUser))
			},
			error(){
				console.log('error');
				dispatch(showError());
			}
		})
	}
}