import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Home.module.css';
import Amneties from '../components/Amneties';
import SiteMap from '../components/SiteMap';
import About from './About';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Home(props) {
    return (
        <div>
            <Navbar />


            {/* <img className={styles.homeCaro} src='./../home/img1.png' alt='img1' /> */}
            {/* <img className={styles.homeCaro2} src='./../home/img2.png' alt='img1' /> */}

            <div className={styles.caroDiv}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    // customTransition="all 2"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <img className={styles.homeCaro} src='./../home/img1.png' alt='img1' />
                    <img className={styles.homeCaro} src='./../home/img2.png' alt='img2' />
                    <img className={styles.homeCaro} src='./../home/img1.png' alt='img3' />
                    <img className={styles.homeCaro} src='./../home/img4.png' alt='img4' />

                </Carousel>
            </div>

            <div className={styles.caroDiv2}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    // customTransition="all 2"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <img className={styles.homeCaro} src='./../home/img1b.jpg' alt='img1' />
                    <img className={styles.homeCaro} src='./../home/img2b.jpg' alt='img2' />
                    <img className={styles.homeCaro} src='./../home/img1b.jpg' alt='img3' />
                    <img className={styles.homeCaro} src='./../home/img4b.jpg' alt='img4' />

                </Carousel>
            </div>

            <div className={styles.caroDiv3}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    // customTransition="all 2"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <img className={styles.homeCaro} src='./../home/img1c.jpg' alt='img1' />
                    <img className={styles.homeCaro} src='./../home/img2c.jpg' alt='img2' />
                    <img className={styles.homeCaro} src='./../home/img1c.jpg' alt='img3' />
                    <img className={styles.homeCaro} src='./../home/img4c.jpg' alt='img4' />

                </Carousel>
            </div>


            <div className={styles.caroText}>
                RAJKALP RESORTS & <br />
                PRECIOUS SERVICES
            </div>

            <button className={styles.caroBtn}>
                Get in Touch
            </button>
            <button className={styles.caroBtn2}>
                Know More
            </button>


            <Amneties />
            <SiteMap />
            {/* <About /> */}



        </div>
    )
}

export default Home