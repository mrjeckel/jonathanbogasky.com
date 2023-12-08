import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { navLink, activeNavLink, navigation, navBox } from './navigation.module.css'

const NavLink = ({ to, image, children }) => {
	return (
		<Link to={to} className={navLink} activeClassName={activeNavLink}>{children}</Link>
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
					data.site.siteMetadata.menuLinks.map(link => (
						<NavLink to={link.link}>{link.name}</NavLink>
					))
				}
				<a href='https://github.com/mrjeckel'>Github</a>
			</div>
		</div>
	)
}
