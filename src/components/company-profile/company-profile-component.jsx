import React from 'react';
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
                        <a href={data.links.url} rel="noopener noreferrer">{data.links.text}</a>
                )}

                
            </div>
        </div>
    )
}