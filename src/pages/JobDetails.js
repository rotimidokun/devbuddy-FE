import React from 'react';
import './JobDetails.css';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import AppleIcon from '@material-ui/icons/Apple';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import { Link } from 'react-router-dom';

const JobDetails = () => {
    return (
        <div className="jd-bodyContainer">
            <div className="jd-navbar">

                <Link to="/" >
                    <div className="backArrowContainer">
                        <ArrowBackIosRoundedIcon className="backArrow" />
                    </div>
                </Link>

                <div className="jd-jobDetailsText">
                    <p>Job Details</p>
                </div>

            </div>

            <div className="jd-jobHighlight">
                <div className="jd-companyLogo">
                    <AppleIcon className="jd-appleLogo" />
                </div>

                <div className="jd-jobCaptionCont">

                    <div className="jd-jobTitle"><p>Frontend Developer Intern</p>
                    </div>

                    <div className="jd-companyName">
                        <p> Apple Inc. </p>
                    </div>

                    <div className="jd-jobSubDescription">
                        <div className="bottom-description">

                            <div className="jd-jobType">
                                <span> Fulltime </span>
                            </div>

                            <div className="jd-location">
                                <span> Singapore </span>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="jd-descriptionTextContainer">
                    <p>Description</p>
                </div>

            </div>



            <div className="jd-jobDescritptionContainer">
                <p> About the Opportunity </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

            <div className="jd-jobResponsibilityContainer">
                <p>
                    Job Responsibilities
                </p>

                <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>

                    <li> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>

                </ul>
            </div>

            <div className="jd-ctaBtnContPosition">

                <div className="jd-ctaBtnContainer">
                    <div className="jd-applyBtnContainer">
                        <p>Apply for Job</p>
                    </div>

                    <div className="jd-saveBtnContainer">
                        <BookmarkBorderRoundedIcon className="jd-bookmarkIcon" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JobDetails;
