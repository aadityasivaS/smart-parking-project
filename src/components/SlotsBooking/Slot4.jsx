import React, { useState } from 'react';
import AskPlateNumber from './reusable-items/AskPlateNumber';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import firebase from 'firebase/app';
import 'firebase/database';
let database = firebase.database();
export default function Slot1() {
    const [carNumber, update] = useState();
    return <div>
        <AskPlateNumber onClick={() => {
            confirmAlert({
                title: 'Are youy sure?',
                message: 'Are you sure you want to book Slot4',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            firebase.auth().onAuthStateChanged(user => {
                                if (user.uid !== null) {
                                    database.ref('Bookings/' + user.uid).set({
                                        CarNo: carNumber,
                                        Compound: 2,
                                        Slot: 2
                                    }).then(() => {
                                        database.ref('SlotStatus/Compound2').update({
                                            Slot2: false
                                        });
                                    }).then(() => {
                                        window.location.href = '/app';
                                    });
                                }
                            });
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => {
                            window.location.href = '/app';
                        }
                    }
                ]
            });
        }} onChange={(event) => {
            let val = event.target.value;
            update(val);
        }} />
    </div>
}