import * as React from 'react';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

export default function ContactMe() {
    return (
        <ModalRoutingContext.Consumer>
            {({ modal, closeTo }) => (
                <div>
                    {modal ? (
                    <Link to={closeTo}>
                        Close
                    </Link>
                    ) : (
                    <header>
                        <h1>
                        Website Title
                        </h1>
                    </header>
                    )}

                    <h2>Modal Page</h2>

                    <Link to="/">Go back to the homepage</Link>
                </div>
            )}
        </ModalRoutingContext.Consumer>
    );
}
