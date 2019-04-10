import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamCreate extends React.Component{

    renderInput(){
        return <div>input</div>
    }
    render(){
        return(
            <div>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput}/>
            </div>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);