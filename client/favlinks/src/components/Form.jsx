import React, { useState } from 'react';

function Form({ handleSubmit }) {
    const [linkName, setLinkName] = useState('');
    const [linkURL, setLinkURL] = useState('');

    const submitForm = () => {
        handleSubmit({ name: linkName, url: linkURL });
        setLinkName('');
        setLinkURL('');
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="linkName">Link Name:</label>
            <input type="text" value={linkName} onChange={(e) => setLinkName(e.target.value)} />
            <br/>
            <br/>
            <label htmlFor="linkURL">Link URL:</label>
            <input type="text" value={linkURL} onChange={(e) => setLinkURL(e.target.value)} />
            <br/>
            <br/>
            <button type="button" onClick={submitForm}>Submit</button>
        </form>
    );
}

export default Form;


