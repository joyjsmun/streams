import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../action';

class GoogleAuth extends React.Component{
    state={isSignedIn:null}

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'984859911471-7qvdh6pjfre8cie6ij4s3mi1l6uumquq.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }

    signIn = () => {
        this.auth.signIn()
    }

    signOut = () => {
        this.auth.signOut()
    }


    renderList = () => {
        if(this.state.isSignedIn === null){
            return null
        }if(this.state.isSignedIn === true){
            return <button className="ui button red" onClick={this.signOut}><i className="google icon"/>Sign Out</button>
        }else{
            return <button className="ui button red" onClick={this.signIn}><i className="google icon"/>Sign In with Google</button>
        }
    }

    render(){
        return(
            <div>{this.renderList()}</div>
        )
    }
}

export default connect(null,{signIn,signOut})(GoogleAuth);