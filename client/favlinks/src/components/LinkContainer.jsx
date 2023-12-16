import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

function LinkContainer() {
    const [favLinks, setFavLinks] = useState([]);

    useEffect(() => {
        getLinks();
    }, []);

    const getLinks = async () => {
        try {
            const response = await fetch('/api/links');
            const data = await response.json();
            setFavLinks(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addLink = async (newLink) => {
        try {
            await fetch('/api/links', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newLink)
            });
            getLinks();
        } catch (error) {
            console.error(error);
        }
    };

    const updateLink = async (id, updatedLink) => {
        try {
            await fetch(`/api/links/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedLink)
            });
            getLinks();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteLink = async (id) => {
        try {
            await fetch(`/api/links/${id}`, {
                method: 'POST'
            });
            getLinks(); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table linkData={favLinks} removeLink={deleteLink} />

            <h1>Add New</h1>
            <Form handleSubmit={addLink} />
        </div>
    );
}

export default LinkContainer;
