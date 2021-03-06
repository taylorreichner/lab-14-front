import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/search">Search</NavLink>
                {
                this.props.user && this.props.user.token && <>
                <NavLink to="/favorites">Favorites</NavLink>
                <button onClick={this.props.handleLogout}>Sign out</button>
                </>
                }
                {
                 (!this.props.user || !this.props.user.token) && <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                </>
                }
            </div>
        )
    }
}

