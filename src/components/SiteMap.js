import React from 'react'
import styles from './SiteMap.module.css';
export default function SiteMap() {
    return (
        <div className={styles.smapOutlier}>
            <div className={styles.headSmap}>Site Map</div>
            <div className={styles.smap}>
                <div className={styles.map1}>
                    <center>
                        <img src="./../Home/map1.png" alt="" className={styles.image} />
                    </center>
                </div>
                <div className={styles.accessibility}>
                    <div className={styles.head1}>Nearest attraction from RJR</div>
                    <img className={styles.access} src="./../Home/access.svg" alt="" />
                </div>
            </div>

            <br />

            <div className={styles.headSmap}>About us</div>

            <p className={styles.aboutPara}>
                Welcome to Rajkalp Resorts & Precious Services, a dynamic group with
                over 12 years of experience in  royal estate development. We
                specialize in providing a wide range of luxurious properties, including
                NATP plots, villas, cottages, resorts, holiday homes, and weekend
                homes, all of which are designed to  generate a good monthly cash
                flow income.
            </p>
            <p className={styles.aboutPara}>
                At Rajkalp Resorts & Precious Services, our vision is to provide every
                Indian with the opportunity to own  a luxurious property and generate
                their own cash flow. We are committed to delivering the highest level  of
                customer service and ensuring that each of our clients has a memorable
                and enjoyable experience  when working with us.
            </p>
            <p className={styles.aboutPara}>
                Our team of experienced professionals is dedicated to helping our
                clients find the perfect property to  suit their needs and budget.
                Whether you are looking for a holiday home or a lucrative investment
                opportunity, we are here to help.
            </p>



        </div>
    )
}
