import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

function luckyNumber(){
    var randomNumber = Math.floor((Math.random()* 1000)+1);
    return randomNumber;
}

function greeting(user){
    return <div className = "container">
        <h1>Hello {user.name}</h1>
        <h2 className = "text-muted">Your lucky number is : {user.luckyNumber}</h2>
        </div>
}

const user = {
    name: 'Hanna',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
