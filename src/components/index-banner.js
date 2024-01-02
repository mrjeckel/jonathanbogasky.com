import React from 'react';
import { bannerBox, imageBox, bannerImg, leftTile, rightTile } from './index-banner.module.css';
import chicago from '../images/chicago.jpg'

export default function IndexBanner() {
    
    return(
    <div className={bannerBox}>
        <div className={imageBox}>
            <img src={chicago} className={bannerImg} />
            <span>Image by Grzegorz Zdanowski</span>
        </div>
        <div className={leftTile} />
        <div className={rightTile} />
        <div className={rightTile} />
        <div className={rightTile} />
    </div>
    );
}
