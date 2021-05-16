import React, { useEffect, useState } from 'react';
import classes from './AccessPage.module.css';
import axios from 'axios';

const AccessPage = () => {

    const [codes, setCodes] = useState([]);
    const [code, setCode] = useState('');

    useEffect(() => {
        axios.get('https://607ed59302a23c0017e8c2c6.mockapi.io/api/codes')
            .then(result => {
                const codesData = result.data;
                setCodes(codesData);
            });
    }, []);

    const inputChange = (event) => {
        const query = event.target.value;
        
        setCode(query);
    }

    const onSubmit = (event) => {
        let a =  codes.some(item => item.code === code);
        console.log(a, 'a')
        event.preventDefault();
    }

    let codeElements = codes.map(code => {
        return (
            <div key={code.id} className={classes.item}>
                {code.code}
            </div>
        )
    });

    return (
        <div className={classes.container} >
            <div className={classes.text}>
                <h2>This is now a beta page</h2>
                <h2>Enter the code and come in</h2>
            </div>
            <div className={classes.box}>
                <input type="text" name="" value={code} onChange={inputChange} placeholder="Enter the code" />
            </div>
            <div className={classes.box}>
                <button type="submit" onClick={(event) => onSubmit(event)}>Submit</button>
            </div>
            <div className={classes.box}>
                {codeElements}
            </div>
        </div>
    )
}

export default AccessPage;