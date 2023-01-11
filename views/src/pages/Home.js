import React from "react";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { NavBar } from "../components/NavBar";
import { Rover } from "../components/Rover";
import { Phrase } from "../components/Phrase";
import { Team } from "../components/Team";
import { Sponsorship } from "../components/Sponsorship";

function Home() {
    return (
        <div className="Home-container">
            <NavBar />
            <Banner/>
            <Rover/>
            <Phrase/>
            <Team/>
            <Projects/>
            <Sponsorship/>
            <Footer/>
        </div>
    );
}

export default Home;