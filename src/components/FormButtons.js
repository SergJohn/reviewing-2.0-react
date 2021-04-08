import React from 'react';
import FormAddReview from './FormAddReview';

function FormButtons() {

    const handleSubmit = e => {
        e.preventDefault();

        

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>see all reviews</button>
                <button>make a review</button>
                <FormAddReview />
            </form>
        </>
    );
}

export default FormButtons;