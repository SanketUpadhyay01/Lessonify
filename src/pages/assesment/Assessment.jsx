import React from 'react'
import { NavLink } from 'react-router-dom'

const Assessment = () => {
    return (
        <div style={{ marginTop: '150px'}}>
            <h1 style={{  backgroundColor: ' #4bb3f9', color: 'white'}}>Assessment </h1>
            <ul type="circle" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <li className='mt-2'><NavLink to='/spell'><h3>Spell</h3></NavLink></li>
                <li className='mt-2'> <NavLink to='/read'><h3>Reading</h3></NavLink></li>
                <li className='mt-2'><NavLink to='/math'><h3>Math</h3></NavLink></li>
                <li className='mt-2'><NavLink to='/imagequiz'><h3>ImageQuiz</h3></NavLink></li>
            </ul>
        </div>
    );
}

export default Assessment