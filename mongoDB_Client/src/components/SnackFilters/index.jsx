import React from 'react';

const SnackFilters = (props) => {

    const{healthyOnly, setHealthyOnly, vegetarianOnly, setVegetarianOnly, textFilter, setTextFilter} = props

    function setHealthy() {
        setHealthyOnly(!healthyOnly)
    }

    function setVegetarian() {
        setVegetarianOnly(!vegetarianOnly)
    }

    function updateTextFilter(e) {
        setTextFilter(e.target.value);
    }

    return (
        <div role="snack-filters" aria-label="snack-filters" className="snack-filters">
            <label htmlFor="healthy-input">Healthy:<input type="checkbox"
                id="healthy-input"
                checked={healthyOnly}
                onChange={setHealthy}></input></label>

            <label htmlFor="vegetarian-input">Vegetarian:<input type="checkbox"
                id="vegetarian-input"
                checked={vegetarianOnly}
                onChange={setVegetarian}></input></label>

            <label>Search:<input type="text" value={textFilter} onChange={updateTextFilter} /></label>
        </div>
    )
};

export default SnackFilters;
