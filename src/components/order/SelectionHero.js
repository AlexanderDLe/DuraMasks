import React from 'react';

import LandingMask from '../../img/LandingMask.jpg';

function SelectionHero() {
    const renderCarouselItem = (index, img, state) => {
        return (
            <div
                style={{
                    minHeight: 450,
                    background: `url(${img}) no-repeat center`,
                }}
                className={`carousel-item carousel-image-${index} ${state}`}
            >
                <div className="container">
                    <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                </div>
            </div>
        );
    };

    return (
        <div
            id="myCarousel"
            className="Landing carousel slide center"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                />
                <li data-target="#myCarousel" data-slide-to="1" />
                <li data-target="#myCarousel" data-slide-to="2" />
                <li data-target="#myCarousel" data-slide-to="3" />
            </ol>
            <div className="carousel-inner">
                {renderCarouselItem(1, LandingMask, 'active')}
                {renderCarouselItem(2, LandingMask)}
                {renderCarouselItem(3, LandingMask)}
                {renderCarouselItem(4, LandingMask)}
            </div>

            <a
                href="#myCarousel"
                data-slide="prev"
                className="carousel-control-prev carousel-control"
            >
                <span className="carousel-control-prev-icon carousel-control" />
            </a>
            <a
                href="#myCarousel"
                data-slide="next"
                className="carousel-control-next carousel-control"
            >
                <span className="carousel-control-next-icon carousel-control" />
            </a>
        </div>
    );
}

export default SelectionHero;
