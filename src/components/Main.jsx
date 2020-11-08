import React from 'react';
import AppBar from './AppBar';
import Buttons from './Buttons';
export default function Main() {
    return <div>
        <AppBar />
        <Buttons bookClicked={() => {
            window.location.href = "/bookingStatus";
        }} myBookingClicked={() => {
            window.location.href = "/my-bookings";
        }}/>
    </div>
}