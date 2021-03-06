import React from "react";

import "./Style.css";

const PortfolioItem = ({imgSrc,target}) =>
    (
        <div className="portfolio-item mx-auto" data-toggle="modal" data-target={target}>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={imgSrc} alt="" />
        </div>
    );

export default PortfolioItem;