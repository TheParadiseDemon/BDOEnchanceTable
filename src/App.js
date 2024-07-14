import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './style.css';
import GuessItemGame from "./GuessGame";
import Slides from "./ImageSlide";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <div className="interactive">
                <GuessItemGame/>
                <Slides/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
