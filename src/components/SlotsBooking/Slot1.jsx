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
                message: 'Are you sure you want to book Slot1',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            firebase.auth().onAuthStateChanged(user => {
                                if (user.uid !== null) {
                                    database.ref('Bookings/' + user.uid).set({
                                        CarNo: carNumber,
                                        Compound: 1,
                                        Slot: 1
                                    }).then(() => {
                                        database.ref('SlotStatus/Compound1').update({
                                            Slot1: false
                                        });
                                        database.ref('CarNumber/' + carNumber).set({
                                            number: carNumber
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