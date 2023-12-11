import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { navLink, activeNavLink, navigation, navBox } from './navigation.module.css'
import link from '../images/link.png'

const NavLink = ({ to, children }) => {
	return (
		<Link to={to} className={navLink} activeClassName={activeNavLink}>{children}</Link>
	)
}

const ExternalNavLink = ({ to, image, children }) => {
	return (
        <a href={to} className={navLink}>
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
							return <ExternalNavLink to='https://github.com/mrjeckel' image={link}>Github</ExternalNavLink>
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
