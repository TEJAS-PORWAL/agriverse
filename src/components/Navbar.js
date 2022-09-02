import React from 'react'
import './Navbar.css'

export default function Navbar(){

    const [Btn, setBtn] = React.useState('')
    const [ani,setani] = React.useState('unroll 0.8s ease 0s 1')
    const [pos,setpos] = React.useState('fixed')
    const [front,setfront] = React.useState(9998);
    function nav_btn_click(){
        let nav_ground = document.getElementById("nav-ground").style;
        setBtn((btn)=>btn===''?'active':'');
        window.scrollTo(0, 0);
        nav_ground.animation = ani;
        nav_ground.position = pos;
        if(front===-1){
            setTimeout(() => {
                nav_ground.zIndex = front;
            }, 500);
        }
        else{
            nav_ground.zIndex = front;
        }
        setfront((front)=>front === 9998 ? -1 : 9998)
        setani((ani)=>ani==='unroll 0.8s ease 0s 1'?'roll 0.8s ease 0s 1':'unroll 0.8s ease 0s 1');
        setpos((pos)=>pos==='fixed'?'absolute':'fixed');
        setTimeout(() => {
            nav_ground.animation = "none";
        }, 2000);
        
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
        <>
        <div id="nav-ground"></div>
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
        </>
    )
}