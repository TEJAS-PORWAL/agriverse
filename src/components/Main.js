// import React from 'react'
// import Video from '../images/video.mp4'
// import './Main.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function Main() {
//     AOS.init({ duration : 2000});
//     return (
//         <main className='main' data-aos="fade" data-aos-duration='1500' data-aos-delay='100' data-aos-mirror="true">
//             <video src={Video} muted width={'100%'} height={'10%'} autoplay loop>
//             </video>
//             <div className="icon">
//                 <div className='icon-1'></div>
//                 <div className='icon-2'></div>
//             </div>
//         </main>
//     )
// }

import React from 'react'
import Video from '../images/video.mp4'
import './Main.css'

export default function Main() {
    return (
        <main className='main'>
            <video src={Video} muted width={'100%'} height={'10%'} autoPlay loop>
            </video>
            <div className="icon">
                <div className='icon-1'></div>
                <div className='icon-2'></div>
            </div>
        </main>
    )
}