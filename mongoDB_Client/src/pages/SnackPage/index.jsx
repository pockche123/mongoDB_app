import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SnackPage = () => {

    const [loading, setLoading] = useState(true);
    const [snack, setSnack] = useState({});
    const {id} = useParams()


    useEffect(() => {
        async function loadSnack() {
            console.log("id: ", id)
            const response = await fetch(`http://localhost:3000/snacks/${id}`);
            const data = await response.json();
            setSnack(data);
            setLoading(false)
            console.log("snack: ", snack)
        };

        loadSnack();

    }, [id])

    function displaySnack() {
        return (
            <main>
                <h1 className="close-title">{snack.name}</h1>
                <p><em>{snack.description}</em></p>
                <span className="votes-counter">Votes: {snack.votes}</span>
                <p className="snack-details-holder">
                    {snack.vegetarian ? <span className="vegetarian icon">V</span> : ""}
                    {snack.healthy ? <span className="healthy icon">H</span> : ""}
                </p>
                <Link to="/snacks">Back</Link>
            </main>
        )
    }

    return loading ? <h2><em>loading...</em></h2> : displaySnack();

};

export default SnackPage;
