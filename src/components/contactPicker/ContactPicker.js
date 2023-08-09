import React from "react";

export const ContactPicker = ({ contacts, changeContact }) => {
    const handleChange = (e) => {
        changeContact(e.target.value);
    }

    return (
        <>
            <label for="contacts">Choose a contact:</label>

            <select name="contacts" id="cacontactsrs" onChange={handleChange} def>
                <option value="none" selected disabled hidden>No Contact Selected</option>
                {
                    contacts.map((contact) => {
                        return <option value={contact.name}>{contact.name}</option>;
                    })
                }
            </select>
        </>
    );
};
