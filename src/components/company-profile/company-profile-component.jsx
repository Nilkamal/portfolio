import React from 'react';
import { Link } from 'react-router-dom'

import './company-profile-styles.css';

export default ({data}) => {
    return (
        <div className='company-profile'>
            <div className="company-profile-content">
                <span className="tag" style={{ background: data.category.color }}>
                    { data.category.tag }
                </span>
                <p>{data.duration}</p>
                <p>{data.title}</p>
                { data.links && (
                        <Link to={data.links.url} rel="noopener noreferrer">{data.links.text}</Link>
                )}

                
            </div>
        </div>
    )
}
