import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker.js';

const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString("en-US")
        .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
    contacts,
    name,
    setName,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
}) => {

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeDate = (e) => {
        setDate(e.target.value);
    }

    const changeTime = (e) => {
        setTime(e.target.value);
    }

    const changeContact = (contactValue) => {
        setContact(contactValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label> <input id="name" type='text' value={name} onChange={changeName} />
            <label htmlFor="date">Date: </label> <input id="date" type='date' min={getTodayString()} value={date} onChange={changeDate} />
            <label htmlFor="time">Time: </label> <input id="time" type='time' value={time} onChange={changeTime} />
            <ContactPicker contacts={contacts} changeContact={changeContact}/>
            <button type='submit'>
                Submit
            </button>
        </form>
    );
};
