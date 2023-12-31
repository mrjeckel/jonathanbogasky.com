import React from 'react';
import { Link } from 'gatsby';
import { footer, iconBox, linkIcon, textBox, copyrightBox } from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <div className={footer}>
            <div className={iconBox}>
                <a href="https://www.linkedin.com/in/jonathan-bogasky-530713b4" target='_blank' rel='noreferrer noopener'>
                    <FontAwesomeIcon className={linkIcon} icon={faLinkedin}  />
                </a>
                <a href="https://github.com/mrjeckel" target='_blank' rel='noreferrer noopener'>
                    <FontAwesomeIcon className={linkIcon} icon={faGithub} />
                </a>
            </div>
            <div className={textBox}>
                <Link to='/letschat' state={{ modal: true }}>Contact Me</Link>
            </div>
            <div className={copyrightBox}>
                <FontAwesomeIcon className={linkIcon} icon={faCopyright} />
                <span>2023 Jonathan Bogasky</span>
            </div>
        </div>
    )
}
