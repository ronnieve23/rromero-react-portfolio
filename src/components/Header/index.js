import React from "react";
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