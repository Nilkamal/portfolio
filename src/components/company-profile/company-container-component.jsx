import React from 'react';
import CompanyProfile from './company-profile-component';
import data from './data';

import './company-container-styles.css';

export default () => {
    return (
        data.length > 0 && (
            <div className='company-container'>
                {
                    data.map((item, index) => {
                        return <CompanyProfile data={item} key={index} />
                    })
                }
            </div>
        )
    )
}