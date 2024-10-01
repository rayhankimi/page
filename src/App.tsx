import React from 'react';
import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <LeftSection />
            <RightSection />
            <Footer />
        </div>
    );
};

export default App;
