import React from 'react';
import styles from './NavFoot.module.css';

function Footer() {
    return (
        <div className={styles.footMain}>
            <div className={styles.foot1}>
                <center>
                    <div className={styles.footh1}>
                        Project by
                    </div>
                    <img className={styles.flogo} src="./../Home/flogo.png" alt='flogo' />
                </center>
            </div>
            <div className={styles.foot2}>
                <center>
                    <div className={styles.footh1}>
                        Contact us
                    </div>
                    <div className={styles.foot2a}>

                        <div className={styles.foot2ai}>
                            <img src='./../Home/loc.png' className={styles.loc} alt='loc' />
                        </div>
                        <div className={styles.foot2ad}>
                            Flat No.2-95/9, Beside Premila Gargen, Main Road, Asifabad, Tah.: Asifabad, Dist.: Kumram Shim (Asifabad) - 504293 Telangana
                            <br /><br />
                            Branch Office : Umrer Nagpur Road, Chimur, Tah. Chimur, Dist. Chandrapur - 442903 Maharashtra
                        </div>

                    </div>
                </center>
            </div>

            <div className={styles.foot3}>
                <div className={styles.footh4}>
                    Links
                </div>

                <div className={styles.foot3a}>
                    <div className={styles.foot3ai}>
                        <img src='./../Home/mail.png' className={styles.mail} alt='mail' />
                    </div>
                    <div className={styles.foot3ad}>
                        rajkalpresorts@gmail.com
                    </div>
                </div>

                <br />

                <div className={styles.foot3a}>
                    <div className={styles.foot3ai}>
                        <img src='./../Home/net.png' className={styles.net} alt='mail' />
                    </div>
                    <div className={styles.foot3ad}>
                        www.rajkalpresorts.com
                    </div>
                </div>

                <br /><br />

                <div className={styles.foot4a}>
                    <div className={styles.foot4ai}>
                        <img src='./../Home/fig.png' className={styles.fig} alt='mail' />
                    </div>
                    <div className={styles.foot4ai}>
                        <img src='./../Home/ffb.png' className={styles.ffb} alt='mail' />
                    </div>
                    <div className={styles.foot4ai}>
                        <img src='./../Home/fwa.png' className={styles.fwa} alt='mail' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;