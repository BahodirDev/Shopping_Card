import React from 'react';

function Header(props) {
    return (
        <nav>
            <div className="nav-wrapper header">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>React_Shopping_Card</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;