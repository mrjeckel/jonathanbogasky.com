import React from 'react';
import headshot from '../images/headshot.jpg'
import { aboutMe } from './about-me.module.css'

export default function AboutMe() {
    return (
        <div className={aboutMe}>
            <img src={headshot} />
            <span>
                Hi, thanks for visiting my website! My name is Jonathan "Jake" Bogasky.
                I'm a software engineer based out of the northern suburbs of Chicago, IL.
                I have around seven years of experience working across different technologies:
                industrial automation, embedded systems, and finally, web. My most recent experience
                involves heading a small platform team responsible for developer tooling, web applications, 
                CI pipelines, and on-premesis infrastructure for a department of 40+ engineers globally. 
                Feel free to reach out with any business inquiries.
            </span>
        </div>
    );
}
