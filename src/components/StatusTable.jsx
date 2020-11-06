import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
var database = firebase.database();
export default function StatusTable() {
    const [slotStatus, update] = useState();
    database.ref('SlotStatus/Compound 1/Slot 1').on('value', (snapshot) => {
        console.log(snapshot.val());
    });
    return <table className="table">
        <thead>
            <tr>
                <th scope="col">Parking Slot</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">(Compound 1) slot 1</th>
            </tr>
            <tr>
                <th scope="row">(Compound 1) slot 2</th>
                <td><button type="button" className="btn btn-primary">Book</button></td>
            </tr>
            <tr>
                <th scope="row">(Compound 1) slot 1</th>
                <td>Booked</td>
            </tr>
            <tr>
                <th scope="row">(Compound 1) slot 1</th>
                <td>Booked</td>
            </tr>
        </tbody>
    </table>
}