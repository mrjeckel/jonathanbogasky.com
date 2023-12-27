import * as React from 'react';
import { card } from './horizontal-card.module.css';
import headshot from '../images/headshot.jpg';

export default function Intro() {
    return (
        <div className={card}>
            <div>
                <img src={headshot} alt='headshot' />
                <h3>Hi, I'm Jonathan Bogasky. Welcome to my website!</h3>
            </div>
            <span>
                I'm a software engineer based out of northern Chicagoland. My expertise is in backend development and devops, 
                though I also have a non-insignificant amount of experience in bare-metal embedded systems and industrial automation. 
                I also like really nerdy things ⚔🧙.
            </span>
        </div>
    )
}
