import React from 'react'
import './Navbar.css'

export default function Navbar(){

    const [Btn, setBtn] = React.useState('')
    function nav_btn_click(){
        setBtn((btn)=>btn===''?'active':'')
    }

    const navlinks_styles = {
        left: Btn === 'active'? '-200px':'200px',
        // display: Btn === 'active'? 'block':'none',

    }

    const bg_styles = {
        backgroundColor: Btn === 'active'? 'hsl(0, 100%, 0)':'transparent',
    }

    function setPage(m){
        console.log(m)
    }
    
    return (
        <nav className='nav'>
            <div className='bg' style={bg_styles}></div>
            <div className='navbar'>
                <div className={`navbar--btn ${Btn}`} onClick={nav_btn_click}>
                    <span className='span'></span>
                    <span className='span'></span>
                    <span className='span'></span>
                    <span className='span'></span>
                </div>
                <div className='navbar--links'>
                    <ul className='navbar--links--list'>
                        <li style={navlinks_styles} onClick={()=>setPage('About')}>About</li>
                        <li style={navlinks_styles} onClick={()=>setPage('Application')}>Application</li>
                        <li style={navlinks_styles} onClick={()=>setPage('P2E')}>P2E game</li>
                        <li style={navlinks_styles} onClick={()=>setPage('Roadmap')}>Roadmap</li>
                        <li style={navlinks_styles} onClick={()=>setPage('Whitepaper')}>Whitepaper</li>
                        <li style={navlinks_styles} onClick={()=>setPage('Team')}>Team/Vision</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}