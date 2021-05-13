import React from 'react'
import r from '../../assets/scss/client/review.module.scss'
import { Button, Avatar } from '../../mainStyles'

//Component
import Rate from './Rate'

const  Review = (props) => {
    return (
        <React.Fragment>
            <div className={r.reviewContainer}>
                <div className={r.reviewSummary}>
                    <Rate />
                    <Button to="/tour/north-to-south-15d-14n/review">Write a Review</Button>
                </div>

                <div className={r.reviewContent}>
                    <div className={r.reviewItem}>
                        <div className={r.reviewUser}>
                            <Avatar>
                                H
                            </Avatar>
                        </div>

                        <div className={r.reviewWrapper}>
                            <div className={r.reviewCard}>
                                <div className={r.reviewHeader}>
                                    <div className={r.reviewInfo}>
                                        <h2>Henry Gibson</h2>
                                        <Rate type="reviewRate"/>
                                    </div>
                                    <span>8 Jan 2020</span>
                                </div>

                                <div className={r.reviewCommnent}>
                                    <p>Went here with family, you need to take carabao ride its it's quite a walk, they charged us 400php per cart. The falls you get taked to are ok but not the one in the pics, they say they're a 2 day hike into the jungle. Also as well, as paying for the ride you'll pay an entrance fee and then you'll pay to use a picnic table. I wouldn't recommend going here</p>
                                    {/* <div>gallery</div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={r.reviewItem}>
                        <div className={r.reviewUser}>
                            <Avatar>
                                A
                            </Avatar>
                        </div>

                        <div className={r.reviewWrapper}>
                            <div className={r.reviewCard}>
                                <div className={r.reviewHeader}>
                                    <div className={r.reviewInfo}>
                                        <h2>April Boy</h2>
                                        <Rate type="reviewRate"/>
                                    </div>
                                    <span>24 Feb 2020</span>
                                </div>

                                <div className={r.reviewCommnent}>
                                    <p>Went here with family, you need to take carabao ride its it's quite a walk, they charged us 400php per cart. The falls you get taked to are ok but not the one in the pics, they say they're a 2 day hike into the jungle. Also as well, as paying for the ride you'll pay an entrance fee and then you'll pay to use a picnic table. I wouldn't recommend going here</p>
                                    {/* <div>gallery</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Review
