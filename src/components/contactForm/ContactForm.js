import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changePhone = (e) => {
        setPhone(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={changeName}/>
            <input type='text' value={phone} onChange={changePhone}/>
            <input type='text' value={email} onChange={changeEmail}/>
            <button type='submit'>
                Submit
            </button>
        </form>
    );
};

