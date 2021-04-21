import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => (
    <React.Fragment>
        <div className="footer-style">
            <div className="footer-style-inner">
                <div className="App-external-link">
                    <a className="App-external-link" href="https://github.com/SergJohn">
                        <GitHubIcon />
                    </a>
                </div>
                <div className="App-external-link">
                    <a className="App-external-link" href="https://www.linkedin.com/in/mario-franca-7b3020149/">
                        <LinkedInIcon />
                    </a>
                </div>
                <div className="App-external-link">
                    <a className="App-external-link" href="https://twitter.com/MarioRo17928767">
                        <TwitterIcon />
                    </a>
                </div>

            </div>
            <p> mariorosa©2021</p>
        </div>

    </React.Fragment>

);

export default Footer;