import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MainPage.css';

const MainPage = (props) => {
    const logout = () => {
        props.setUser(null);
        localStorage.removeItem('user');
        window.location.href = '/';
    }
    return (
        <div className="container" >
            <div className="text">
                <h2>Greet you!</h2>
                <h2>Welcome</h2>

                <div className="box">
                    {props.currentUser ? '' : <button className="btn btn-primary" onClick={() => logout()}>Logout</button>}
                </div>

            </div>
        </div>
    )
}

export default MainPage;