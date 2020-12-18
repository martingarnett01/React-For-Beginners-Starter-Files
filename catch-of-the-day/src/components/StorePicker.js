import React from 'react';

class StorePicker extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form className="store-selector">
                <h2>Please enter a store</h2>
                <input 
                    type="text" 
                    required 
                    placeholder="Store Name"
                />
                <button type="submit">Visit Store &rarr;</button>
            </form>
        )
    }
}

export default StorePicker;