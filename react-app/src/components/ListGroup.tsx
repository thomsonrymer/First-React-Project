// import { Fragment } from "react";
    // commented out code is long-hand for returning a react fragment

import { useState } from "react";

    //what is uncommented is the short-hand for returning a react fragment
function ListGroup() {
    const items = [
        'New York',
        'Philadelphia',
        'Washington D.C.',
        'Boston',
        'Miami'
    ]

    // const handleClick = (event: React.MouseEvent) => console.log(event);
    
    // Hook
        // the useState(initialValue) fxn returns an array of 2 elements
        // [0] = a state variable to be updated
        // [1] = an updater function
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const message = items.length === 0 ? <p>No items found</p> : null;

    return (
        // <Fragment>
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                {items.map((item, index) => (
                <li
                    key={item}
                    className={
                        // does the state variable match current index that is being rendered?
                        // if yes, set to active class
                        // else, set to normal class
                        selectedIndex === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    // on click, this sets the state variable to the li element's index
                    // react is listening for changes to the selectedIndex variable, which is changed below.
                    // This causes React to re-render the DOM
                    onClick={() => {setSelectedIndex(index)}}
                >
                    {item}
                </li>
                ))}
                {items.length === 0 && <p>No items found</p>}
            </ul>
        </>
        // </Fragment>
    );
}

export default ListGroup;