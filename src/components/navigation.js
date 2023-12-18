import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { navLink, activeNavLink, navigation, navBox, linkIcon, logo } from './navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function NavLink({ to, children }) {
	return (
		<Link to={to} className={navLink} activeClassName={activeNavLink}>{children}</Link>
	)
}

function ExternalNavLink({ to, children }) {
	return (
        <a href={to} className={navLink} target='_blank' rel='noreferrer noopener'>
			{children}
			<FontAwesomeIcon className={linkIcon} icon={faUpRightFromSquare} />
		</a>
    )
}

export default function Navbar() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					menuLinks {
						name
						link
						external
					}
				}
			}
		}
	`)

	return ( 
		<nav className={navigation}>
			<div className={logo}>jonathanbogasky.is</div>
			<div className={navBox}>
				{
					data.site.siteMetadata.menuLinks.map(link => {
						if (link.external === true) {
							return <ExternalNavLink to={link.link}>{link.name}</ExternalNavLink>
						} 
						else {
							return <NavLink to={link.link}>{link.name}</NavLink>
						}
					})
				}
			</div>
		</nav>
	)
}
