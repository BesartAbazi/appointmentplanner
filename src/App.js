import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
    /*
    Define state variables for 
    contacts and appointments 
    */
    let [contacts, setContacts] = useState([]);
    const addContact = (name, phoneNumber, email) => {
        setContacts((prev) => [
            ...prev,
            {
                name: name,
                phoneNumber: phoneNumber,
                email: email
            }
        ]);
    }

    /*
    Implement functions to add data to
    contacts and appointments
    */
    let [appointments, setAppointments] = useState([]);
    const addAppointment = (name, contact, date) => {
        setAppointments((prev) => [
            ...prev,
            {
                name: name,
                contact: contact,
                date: date
            }
        ])
    }

    /*  
        different way for routing instead of BroswerRouter:
        const router = createBrowserRouter(createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
                <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact}/>  />
                <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> } />
            </Route>
        ));
    */

    return (
        /*
            different way for routing instead of BroswerRouter:
            <RouterProvider router={router} />
        */
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
                    <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */} />
                    <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
