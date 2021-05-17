import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './AccessPage.css';

const AccessPage = (props) => {

    const [codesData, setCodesData] = useState([]);
    const [codeUser, setCodeUser] = useState('');

    useEffect(() => {
        axios.get('https://607ed59302a23c0017e8c2c6.mockapi.io/api/codes')
            .then(result => {
                setCodesData(result.data);
            });
    }, []);

    const inputChange = (event) => {
        setCodeUser(event.target.value);
    }

    const onSubmit = (event) => {
        let findCode = codesData.find(item => item.code === codeUser);

        if(findCode) {
            const user = {firstName: 'Olya', lastName: 'Shcherbakova'};
            localStorage.setItem('user', JSON.stringify(user));
            props.setUser(user);
            window.location.href = '/hello';
        }
    }

    return (
        <div className="container">
            <div className="text">
                <h2>This is now a beta page</h2>
                <h2>Enter the code and come in</h2>
            </div>
            {!props.currentUser &&
            <div className="box">
                <input type="text" className="form-control" value={codeUser} onChange={inputChange} placeholder="Enter the code" />

                <button className="btn btn-primary" type="submit" onClick={(event) => onSubmit(event)}>Submit</button>
            </div>} 
        </div>
    )
}

export default AccessPage;