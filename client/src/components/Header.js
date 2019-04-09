import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link className="ui item" to="/">Streamy</Link>
            <div className="right menu">
                <Link  className="ui item" to="/">All Streamy</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;