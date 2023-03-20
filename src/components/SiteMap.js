import React from 'react'
import styles from './SiteMap.module.css';
export default function SiteMap() {
    return (
        <div className={styles.smapOutlier}>
            <h1 className={styles.headSmap}>Site Map</h1>
            <hr />
            <div className={styles.smap}>
                <img src="./../Home/map1.png" alt="" className={styles.image} />
                <div className={styles.accessibility}>
                    <h2>Nearest attraction from RJR</h2>
                    <img src="./../Home/access.png" alt="" />
                </div>
            </div>
            <div className={styles.faqs}>
                <h2>FAQs</h2>
            </div>
        </div>
    )
}
