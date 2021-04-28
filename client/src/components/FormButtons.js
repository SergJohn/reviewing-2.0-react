import React from 'react';

function FormButtons() {

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <button>read reviews</button>
                <button>make review</button>
            </form>
        </React.Fragment>
    );
}

export default FormButtons;