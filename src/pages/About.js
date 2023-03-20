import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.aboutOutlier}>
            <div className={styles.about}>
                <h1>About us</h1>
                <hr />
                <p className={styles.aboutPara}>
                    Welcome to Rajkalp Resorts & Precious Services, a dynamic group with
                    over 12 years of experience in <br /> royal estate development. We
                    specialize in providing a wide range of luxurious properties, including{" "}
                    <br /> NATP plots, villas, cottages, resorts, holiday homes, and weekend
                    homes, all of which are designed to <br /> generate a good monthly cash
                    flow income.
                </p>
                <p className={styles.aboutPara}>
                    At Rajkalp Resorts & Precious Services, our vision is to provide every
                    Indian with the opportunity to own <br /> a luxurious property and generate
                    their own cash flow. We are committed to delivering the highest level <br /> of
                    customer service and ensuring that each of our clients has a memorable
                    and enjoyable experience <br /> when working with us.
                </p>
                <p className={styles.aboutPara}>
                    Our team of experienced professionals is dedicated to helping our
                    clients find the perfect property to <br /> suit their needs and budget.
                    Whether you are looking for a holiday home or a lucrative investment <br />
                    opportunity, we are here to help.
                </p>
            </div>
        </div>
    );
}

export default About;
