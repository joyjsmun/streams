import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../action';

class GoogleAuth extends React.Component{
  
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'984859911471-7qvdh6pjfre8cie6ij4s3mi1l6uumquq.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
       if(isSignedIn){
           this.props.signIn()
       }else{
           this.props.signOut()
       }
    }

    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }


    renderList = () => {
        if(this.props.isSignedIn === null){
            return null
        }if(this.props.isSignedIn === true){
            return <button className="ui button red" onClick={this.onSignOut}><i className="google icon"/>Sign Out</button>
        }else{
            return <button className="ui button red" onClick={this.onSignIn}><i className="google icon"/>Sign In with Google</button>
        }
    }

    render(){
        return(
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {isSignedIn:state.auth.isSignedIn}
}


export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);