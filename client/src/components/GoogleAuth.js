import React from 'react';

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


    renderList = () => {
        if(this.state.isSignedIn === null){
            return <div>not sure</div>
        }if(this.state.isSignedIn === true){
            return <div>Signed In</div>
        }else{
            return <div>No Not Yet</div>
        }
    }

    render(){
        return(
            <div>{this.renderList()}</div>
        )
    }
}

export default GoogleAuth;