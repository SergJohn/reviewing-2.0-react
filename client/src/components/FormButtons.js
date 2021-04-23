import React from 'react';

function FormButtons() {

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>read reviews</button>
                <button>make review</button>
            </form>
        </>
    );
}

export default FormButtons;