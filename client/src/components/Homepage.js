import React from 'react';
import Nav from './Nav';
import HomeImg from '../home.jpg';
import Footer from './Footer';

const Homepage = () => (
    <React.Fragment>
        <Nav />
        <h1 className="title-books-comp">REVIEWING</h1>
        <img className="imgJPG" src={HomeImg} alt="Home image"/>
        <p className="slogan">Add a book, find a new book to read, check reviews of others about your favorite one, leave your mark</p>
        <Footer />
    </React.Fragment>
);

export default Homepage;