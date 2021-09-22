import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AppleIcon from '@material-ui/icons/Apple';
import { Link } from 'react-router-dom';
import './Job.css';

const Job = () => {
    return (
        <>
            <Link to="jobdetails" className="link-job">
                <div className="job">

                    <div className="company-logo">
                        <AppleIcon className="apple-logo" />
                    </div>

                    <div className="jobdescriptioncont">

                        <div className="job-title"><p>Frontend Developer Intern</p>
                        </div>

                        <div className="company">
                            <p> Apple Inc. </p>
                        </div>

                        <div className="job-subdescription">
                            <div className="bottom-description">

                                <div className="job-type">
                                    <span> Fulltime </span>
                                </div>

                                <div className="location">
                                    <span> Singapore </span>
                                </div>

                            </div>

                            <div className="date-posted">
                                <span>2days ago</span>
                            </div>

                        </div>

                    </div>

                    <div className="option">
                        <MoreHorizIcon className="option" />
                    </div>

                </div>
            </Link>
        </>
    )
}

export default Job;
