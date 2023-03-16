import React, { useState, useEffect } from 'react';
import styles from './NavFoot.module.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])


    return (

        <nav>
            <ul className={styles.list}>
                <HashLink
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to="/">
                    <li>
                        <img className={styles.ilogo} src='./../logo.png' alt='img' />
                    </li>
                </HashLink>

                {(toggleMenu || screenWidth > 1000) && (
                    <>

                        <Link
                            to="/about">
                            <li className={styles.items}>
                                {/* <div className={styles.navFont}> */}
                                About Tadoba
                                {/* </div> */}
                            </li>
                        </Link>

                        <HashLink
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to="/#sitemap">
                            <li className={styles.items}>Site Map</li>
                        </HashLink>

                        <Link
                            to="/package">
                            <li className={styles.items}>Packages</li>
                        </Link>

                        <li className={styles.items}>
                            <img className={styles.navIcons} src='./../icons/fb.png' alt='img' />
                            <img className={styles.navIcons} src='./../icons/ig.png' alt='img' />
                            <img className={styles.navIcons} src='./../icons/twt.png' alt='img' />
                        </li>

                        <li className={styles.items}>
                            <img className={styles.loginIcon} src='./../icons/login.png' alt='img' />

                        </li>

                    </>

                )}
            </ul>

            <button onClick={toggleNav} className={styles.btn}><img src='./../line.png' alt='img' /></button>

        </nav>
    )
}

export default Navbar;