import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import CircularProgress from '@material-ui/core/CircularProgress';
var database = firebase.database();
export default function StatusTable() {
    const [compounds, update] = useState(null);
    if (compounds === null) {
        fetch('https://us-central1-smart-car-parking-system-b6c28.cloudfunctions.net/db')
            .then(response => response.json())
            .then(data => update(data));
    }
    database.ref('SlotStatus').on('child_changed', function (data) {
        update(prevVal => {
            return {
                ...prevVal,
                [data.key]:data.val()
            }
        });
    });
    return compounds === null ? <div><CircularProgress /></div> : <table className="table">
        {console.log()}
        <thead>
            <tr>
                <th scope="col">Parking Slot</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">(Compound 1) slot 1</th>
                <td>{compounds.Compound1.Slot1 ? <button type="button" className="btn btn-primary" onClick={() => {
                    window.location.href = '/slot1';
                }}>Book</button> : 'Booked'}</td>
            </tr>
            <tr>
                <th scope="row">(Compound 1) slot 2</th>
                <td>{compounds.Compound1.Slot2 ? <button type="button" className="btn btn-primary" onClick={() => {
                    window.location.href = '/slot2';
                }}>Book</button> : 'Booked'}</td>
            </tr>
            <tr>
                <th scope="row">(Compound 1) slot 1</th>
                <td>{compounds.Compound2.Slot1 ? <button type="button" className="btn btn-primary" onClick={() => {
                    window.location.href = '/slot3';
                }}>Book</button> : 'Booked'}</td>
            </tr>
            <tr>
                <th scope="row">(Compound 1) slot 1</th>
                <td>{compounds.Compound2.Slot2 ? <button type="button" className="btn btn-primary" onClick={() => {
                    window.location.href = '/slot4';
                }}>Book</button> : 'Booked'}</td>
            </tr>
        </tbody>
    </table>
}