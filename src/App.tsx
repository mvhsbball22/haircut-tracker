import React, { useState, useEffect } from 'react';
import './App.css';

// Hardcoded last haircut date
const LAST_HAIRCUT_DATE = new Date('2025-03-12');

function App() {
    const [daysSinceHaircut, setDaysSinceHaircut] = useState(0);

    useEffect(() => {
        const calculateDaysSince = () => {
            const today = new Date();
            const timeDifference =
                today.getTime() - LAST_HAIRCUT_DATE.getTime();
            const daysDifference = Math.floor(
                timeDifference / (1000 * 3600 * 24)
            );
            setDaysSinceHaircut(daysDifference);
        };

        calculateDaysSince();
        // Update every day at midnight
        const timer = setInterval(calculateDaysSince, 24 * 60 * 60 * 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='app-container'>
            <div className='tracker-card'>
                <div className='haircut-counter'>
                    <h2>Days Since Last Haircut</h2>
                    <p className='counter'>{daysSinceHaircut}</p>
                </div>

                <div className='photo-section'>
                    <h2>Most Recent Photo</h2>
                    <img
                        src='/LatestHairPhoto.jpg'
                        alt='Latest Photo'
                        className='latest-photo'
                    />
                </div>

                <div className='photo-date-section'>
                    <p>Photo Taken: March, 21 2025</p>
                </div>
            </div>
        </div>
    );
}

export default App;
