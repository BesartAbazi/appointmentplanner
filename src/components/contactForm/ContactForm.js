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
            <label htmlFor="name">Name: </label> <input name="name" id="name" type='text' value={name} onChange={changeName}/>
            <label htmlFor="phone">Phone: </label> <input name="phone" id="phone" type='text' value={phone} onChange={changePhone} pattern='[0-9]{2,}'/>
            <label htmlFor="email">Email: </label> <input name="email" id="email" type='text' value={email} onChange={changeEmail}/>
            <button type='submit'>
                Submit
            </button>
        </form>
    );
};

