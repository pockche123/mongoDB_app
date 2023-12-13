import React, { useState, useEffect } from 'react';
import { useSnacks } from "../../contexts";
import { SnackFilters, SnackCard } from '../../components';

const SnacksPage = () => {

    const { snacks, setSnacks } = useSnacks();
    const [healthyOnly, setHealthyOnly] = useState(false);
    const [vegetarianOnly, setVegetarianOnly] = useState(false);
    const [textFilter, setTextFilter] = useState("");


    async function vote(_id, value) {
        const options = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                votes: value
            })
        }
        const response = await fetch(`http://localhost:3000/snacks/${_id}`, options)
        const data = await response.json();

        setSnacks(snacks.map(s => s._id == data._id ? { ...s, votes: data.votes } : s))
    }

    async function deleteSnack(_id) {
        const options = {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch(`http://localhost:3000/snacks/${_id}`, options);
        await response.json();
    }

    useEffect(() => {
        async function loadSnacks() {
            const response = await fetch("http://localhost:3000/snacks");
            const data = await response.json();
            setSnacks(data);
        };

        loadSnacks();
    }, [snacks])

    function displaySnacks() {
        return snacks
            .filter(s => !vegetarianOnly || s.vegetarian)
            .filter(s => !healthyOnly || s.healthy)
            .filter(s => textFilter.length == 0 || s.name.toLowerCase().includes(textFilter.toLowerCase()))
            .map(s => <SnackCard
                key={s._id} id={s._id} name={s.name}
                healthy={s.healthy}
                vegetarian={s.vegetarian}
                votes={s.votes} vote={vote}
                deleteSnack={deleteSnack}
            />)
    }

    return (
        <main className="snack-main">
            <h1>Snacks</h1>
            <SnackFilters
                healthyOnly={healthyOnly} setHealthyOnly={setHealthyOnly}
                textFilter={textFilter} setTextFilter={setTextFilter}
                vegetarianOnly={vegetarianOnly} setVegetarianOnly={setVegetarianOnly}
            />
            <div className="snack-holder">
                {displaySnacks()}
            </div>
        </main>
    )
};

export default SnacksPage;
