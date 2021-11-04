import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Nav";

function Header (props){
    const {
        sections =[],
        setCurrentSection
    } = props;
    return (
        <Navigation
        sections={sections}
        setCurrentSection={setCurrentSection}>
        </Navigation>
    )
}

export default Header;