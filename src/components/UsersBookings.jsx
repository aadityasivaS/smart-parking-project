import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import CircularProgress from '@material-ui/core/CircularProgress';
var database = firebase.database();
export default function StatusTable() {
    const [compounds, update] = useState(null);
    firebase.auth().onAuthStateChanged(user => {
        if (compounds === null) {
            fetch('https://us-central1-smart-car-parking-system-b6c28.cloudfunctions.net/booking')
                .then(response => response.json())
                .then(data => update(data[`${user.uid}`]));
        }
            database.ref('Bookings/' + user.uid).on('child_changed', function (data) {
                update(prevVal => {
                    return {
                        ...prevVal,
                        [data.key]: data.val()
                    }
                });
            });
    });
    return compounds === null ? <div><CircularProgress /></div> : <table className="table">
    {console.log(compounds)}
        <thead>
            <tr>
                <th scope="col">My Bookings</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">{`(Compound ${compounds.Compound}) Slot ${compounds.Slot}`}</th>
                <td><button onClick={() => {
                    firebase.auth().onAuthStateChanged(user => {
                        database.ref('Bookings/' + user.uid).remove().then(() => {
                            database.ref('SlotStatus/Compound' + compounds.Compound).update({
                                [`Slot${compounds.Slot}`]: true
                            });
                            database.ref('CarNumber/' + compounds.CarNo).remove();
                        }).then(() => {
                            window.location.href = '/app';
                        });
                    })
                }} type="button" className="btn btn-primary">Stop</button></td>
            </tr>
        </tbody>
    </table>
}