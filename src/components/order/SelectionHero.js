import React from 'react';

function SelectionHero() {
    return (
        <div id="home">
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
                    <div className="carousel-item carousel-image-1 active">
                        <div className="container">
                            <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                        </div>
                    </div>

                    <div className="carousel-item carousel-image-2">
                        <div className="container">
                            <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                        </div>
                    </div>

                    <div className="carousel-item carousel-image-3">
                        <div className="container">
                            <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                        </div>
                    </div>

                    <div className="carousel-item carousel-image-4">
                        <div className="container">
                            <div className="carousel-caption d-none d-sm-block text-right mb-5" />
                        </div>
                    </div>
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
        </div>
    );
}

export default SelectionHero;
