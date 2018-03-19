import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import productsReducer from './reducers/producer.js';
import userReducer from './reducers/user.js';
import thunk from 'redux-thunk';

//片段一
// function reducer(state,action){
// 	console.log(action)
// 	if (action.type === 'changeState') {
// 		return action.payload.name
// 	};
// 	return 'state11'
// }
// const store = createStore(reducer)
// console.log(store.getState())

// const action = {
// 	type: 'changeState',
// 	payload:{
// 		name:'coco',
// 		age:'18'
// 	}
// }
// store.dispatch(action)
// console.log(store.getState())


//片段二
// function productsReducer(state = [],action){
// 	console.log(state)
// 	return state;
// }
// function userReducer(state = '',{type,payLoad}){
// 	switch(type){
// 		case 'updateUser':
// 			return payLoad
// 	}
// 	return state;
// }
// const allReducers = combineReducers({
// 	products:productsReducer,
// 	user:userReducer
// })
// //初始化state
// const store = createStore(
// 	allReducers,{
// 		products:[{name:'iphone'}],
// 		user:'coco'
// 	},
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// console.log(store.getState())

// const updateUserAction = {
// 	type:'updateUser',
// 	payLoad:{
// 		name:'wang'
// 	}
// }
// store.dispatch(updateUserAction)
// console.log(store.getState())

//片段三
const allReducers = combineReducers({
	products:productsReducer,
	user:userReducer
})
const allStoreEnhancers = compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
//初始化state
const store = createStore(
	allReducers,{
		products:[{name:'iphone'}],
		user:'coco'
	},
	allStoreEnhancers
)
//render是从目前store中取出state数据，然后输出呈现在网页上
ReactDOM.render(
	<Provider store = {store}>
		<App arrdom = 'whatever' />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();