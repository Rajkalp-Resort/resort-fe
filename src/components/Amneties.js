import React from 'react'
import styles from './Amneties.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Amneties(props) {
    return (
        <div>
            {/* <img className={styles.bg2} src='./../Home/bg2.png' alt='bg2' /> */}



            <div className={styles.amniCaro}>

                <div className={styles.amHead}>
                    Amenities
                </div>

                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
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
                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am1.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Nature Walk
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am2.jpg' alt='img1' />

                        <text className={styles.amLabel}>
                            <center>
                                Swimming Pool
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am3.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Tornado Slider
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am4.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Water Game
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am5.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Mud Bath
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am6.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Swimming Fun
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am7.png' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Badminton
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am8.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Rain Dance
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am9.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Water Slider
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am10.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Billiards
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am11.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Banquet Service
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am12.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Adventure
                            </center>
                        </text>
                    </div>

                    <div className={styles.amBox}>
                        <img className={styles.homeCaro} src='./../home/am13.jpg' alt='img1' />
                        <text className={styles.amLabel}>
                            <center>
                                Table Tennis
                            </center>
                        </text>
                    </div>

                </Carousel>

            </div>





        </div>
    )
}

export default Amneties