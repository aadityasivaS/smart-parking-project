import React, { useState } from 'react';
import AppBar from './AppBar';
import firebase from 'firebase/app';
export default function Home() {
    const [loggedIn, change] = useState(firebase.auth().currentUser ? true : false);
    firebase.auth().onAuthStateChanged((user) => {
        change(user ? true : false);
    });
    return <div>
        {loggedIn ? window.location.href = "/app" : <div>
            <AppBar />
            <h1 className="log-in-text">Please log in to continue</h1>
        </div>}
    </div>
}