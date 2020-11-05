import React from 'react';
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
export default function Login() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "/app";
        } else {
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', {
                signInOptions: [
                    {
                        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        recaptchaParameters: {
                            type: 'image',
                            size: 'invisible',
                            badge: 'bottomleft'
                        },
                        defaultCountry: 'IN',
                        whitelistedCountries: ['IN', '+91']
                    }
                ]
            });
        }
    })
    return <div>
        <div id="firebaseui-auth-container"></div>
    </div>
}