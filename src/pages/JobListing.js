import React from 'react';
import './JobListing.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Job from '../components/Job'
import { Link } from 'react-router-dom';


const JobListing = () => {
    return (
        <div className="homepage">
            <div className="header">
                <MenuRoundedIcon className="hamburger" />

                <div className="logo">
                    <h3> devbuddy </h3>
                </div>

            </div>

            <div className="about-text">
                <p>Find Entry Level </p>
                <p> Software Jobs </p>
            </div>

            <div className="search">
                <input type="text" placeholder="Search for job title" className="search-input" />

                <SearchRoundedIcon className="search-input-icon" />

                <div className="search-btn">
                    <SearchRoundedIcon className="search-btn-icon" />
                </div>

            </div>

            <div className="recent-jobs">
                <p>Recent Jobs</p>
                <BookmarkIcon className="bookmarkicon" />
            </div>

            <Job />
            <Job />
            <Job />

        </div>
    )
}

export default JobListing;
