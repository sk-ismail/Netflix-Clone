import React, { useEffect, useState } from 'react'
import nclass from './Navbar.module.css'

function Navbar() {


    const [show, setshow] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setshow(true);
            }
            else
                setshow(false);

        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    return (
        <div className={` ${nclass.navbar} ${show && `${nclass.navblack}`}`}>

            <img className={nclass.logo}
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                alt="logo" ></img>
            <img className={nclass.avatar}
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="avatar"></img>

        </div>
    );
}

export default Navbar
