import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { navLink, activeNavLink, navigation, navBox } from './navigation.module.css'
import linkIcon from '../images/link_icon.png'

function NavLink({ to, children }) {
	return (
		<Link to={to} className={navLink} activeClassName={activeNavLink}>{children}</Link>
	)
}

function ExternalNavLink({ to, image, children }) {
	return (
        <a href={to} className={navLink} target='_blank' rel='noreferrer noopener'>
			{children}
			<img src={image} alt='link' />
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
		<div className={navigation}>
			<div className={navBox}>
				{
					data.site.siteMetadata.menuLinks.map(link => {
						if (link.external === true) {
							return <ExternalNavLink to={link.link} image={linkIcon}>{link.name}</ExternalNavLink>
						} 
						else {
							return <NavLink to={link.link}>{link.name}</NavLink>
						}
					})
				}
			</div>
		</div>
	)
}
