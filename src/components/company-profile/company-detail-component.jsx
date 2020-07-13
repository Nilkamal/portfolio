import React from 'react';
import companyData from './companyData';

import './company-detail-styles.css';
import { Link } from 'react-router-dom';

export default  ({ match, history }) => {
    const { company_name } = match.params;
    const data = companyData[company_name];
    return (
        <div className='company-detail'>
            <h1>{data.designation}</h1>
            <span className='company-name'>{data.company}</span>
            <div className='duration'>{data.duration}</div>
            
            <ul>
                {
                    data.functions.map((role, index) => {
                        return (<li key={index}>{role}</li>)
                    })
                }
            </ul>

            <Link to='/company-profile'>Go Back</Link>
        </div>
    )
}