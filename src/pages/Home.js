import React from 'react';
import Banner from '../components/Home/Banner';
import Contact from '../components/Home/Contact';
import Feedback from '../components/Home/Feedback';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Service from '../components/Home/Service';
import Sponsor from '../components/Home/Sponsor';
import Work from '../components/Home/Work';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <Service></Service>
            <Work></Work>
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;