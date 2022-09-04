import React from 'react';
import './Footer.css';

export default function Footer() {

    const email = 'info@Agriverse.com';
    const fblink = 'https://facebook.com/theagriverse';
    const twtlink = 'https://twitter.com/theagriverse';
    const tellink = 'https://telegram.com';
    const yTubelink = 'https://youtube.com/channel/UCcstqRwtxzEJSz2ItuRdsSA';
    const Linkedlink = 'https://linkedin.com';
    const gitlink = 'https://github.com';
    const medlink = 'https://medium.com/@theagriverse';
    // const instlink = 'https://instagram.com/theagriverse';
    const Redditlink = 'https://reddit.com/r/theagriverse';
    return (
        <footer>
            <div className='top'>
                <form>
                    <h3 className='top--title'>Enter your email address for newsletter subscription</h3>
                    <input className='top--einput' type='email' placeholder='Your email address' />
                    <span></span>
                    <button className='top--btn' type='submit'>SUBSCRIBE</button>
                </form>
            </div>

            <div className='mid'>
                <div className='mid--left'>
                    <form className='mid--form'>
                        <h2 className='form--title'>Send a message</h2>
                        {/* <label className='form--label' for='name'> Full Name</label> */}
                        <input type='text' className='form--name' id='name' name='name' placeholder='Full Name' />
                        {/* <label className='form--label' for='mail' >Email Address</label> */}
                        <input className='form--email' type='email' id='mail' name='email' placeholder='Email Address' />
                        <textarea placeholder='Your Message' name='message' className='form--textarea' rows="5"></textarea>
                        <button className='form--btn btn'>
                        <span className="noselect">SEND MESSAGE</span></button>

                    </form>
                </div>
                <div className='mid--right'>
                    <h2 className='right--title'>Join us in the community</h2>
                    <div className='mid--right--links'>
                        <a target="_blank" rel='noreferrer' href={fblink}><i className='fab fa-facebook-f'></i>Facebook</a>
                        <a target="_blank" rel='noreferrer' href={Linkedlink}><i className='fab fa-linkedin-in'></i>Linkedin</a>
                        <a target="_blank" rel='noreferrer' href={twtlink}><i className='fab fa-twitter'></i>Twitter</a>
                        <a target="_blank" rel='noreferrer' href={Redditlink}><i className='fab fa-reddit-alien'></i>Reddit</a>
                        <a target="_blank" rel='noreferrer' href={tellink}><i className='fab fa-telegram'></i>Telegram</a>
                        <a target="_blank" rel='noreferrer' href={medlink}><i className='fab fa-medium-m'></i>Medium</a>
                        <a target="_blank" rel='noreferrer' href={gitlink}><i className='fab fa-github-alt'></i>Github</a>
                        <a target="_blank" rel='noreferrer' href={yTubelink}><i className='fab fa-youtube'></i>Youtube</a>
                    </div>
                    <div className='mid--right--email'>
                        <a href={`mailto:${email}`}><i className="fa fa-envelope-o"></i> {email}</a>

                    </div>
                </div>
            </div>
            <div className='bottom'>
                <p>&copy;2022. Designed by <a href="https://facebook.com/theagriverse">Mrlcreation</a></p>
            </div>
        </footer>
    )
}
