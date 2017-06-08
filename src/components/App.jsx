import React from 'react';
import Auth from '../auth/Auth';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.auth = new Auth();
        this.auth.handleAuthentication();
        this.state = { isAuthenticated: this.auth.isAuthenticated() };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.auth.login()
    }

    logout() {
        this.auth.logout()
        this.setState({ isAuthenticated: false });
    }

    render() {
        return (
            <div>
                <h1>Partei</h1>
                <button onClick={this.login}>login</button>
                <button onClick={this.logout}>logout</button>
                {this.state.isAuthenticated && <h2>logged in!</h2>}
            </div>
        );
    }
}