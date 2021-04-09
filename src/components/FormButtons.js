import React from 'react';
// import FormAddReview from './FormAddReview';

function FormButtons() {

    const handleSubmit = e => {
        e.preventDefault();

        

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>read reviews</button>
                <button>make review</button>
                {/* <FormAddReview /> */}
            </form>
        </>
    );
}

export default FormButtons;