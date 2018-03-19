import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import{updateUser, apiRequest} from './actions/user'

class Text extends Component{
  componentDidMount(){
    setTimeout(() => {
      this.props.onApiRequest();
    },1500) 
  }
  onUpdateUser = (event) => {
    this.props.onUpdateUser(event.target.value)
  }
  render(){
    console.log(this.props)
    return(
      <div>
        hello,{this.props.user}
        <input onChange = {this.onUpdateUser} />
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  // console.log(props)
  return{
    products:state.products,
    user:state.user,
    userPlusProp:`${state.user} ${props.arrdom}`
  }
};
const mapActionToProps = {
  onUpdateUser:updateUser,
  onApiRequest:apiRequest
};
export default connect(mapStateToProps,mapActionToProps) (Text);
// const mapActionToProps = (dispatch,props) => {
//  console.log(props)
//  return bindActionCreators({
//    onUpdateUser:updateUser
//  },dispatch);
// };
// const mergeProps = (propsFromState,
//  propsFromDispath,ownProps) => {
//  console.log(propsFromState, propsFromDispath, ownProps)
//  return {};
// };

//export default connect(mapStateToProps,mapActionToProps,mergeProps) (Text);