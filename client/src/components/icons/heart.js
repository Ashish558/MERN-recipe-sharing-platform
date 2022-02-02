import React from 'react'

const Heart = ({ fill, stroke, width, height }) => {

    return (
        <svg className='heart-icon' xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 0 530 512"
            width={width || '1rem'}
            height={height || '1rem'}>
            <path stroke={stroke} fill={fill} strokeWidth="15" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>

    )
}

export default Heart