import React, { Component } from 'react';
import Header from './Shared/Header.jsx';
import Footer from './Shared/Footer.jsx';

class About extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <h2>This is About page</h2>
                </div>

                <Footer />
            </div>
        );
    }
}

export default About;