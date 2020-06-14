import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

class RestoList extends Component {
    render() {
        let restaurants = this.props.restaurants;

        const data = restaurants.map((item, index) => {
            var thumb = item.restaurant.thumb;

            if (thumb.length === 0) {
                thumb = "https://via.placeholder.com/200";
            }

            var restaurantName = item.restaurant.name;
            var restaurantAddress = item.restaurant.location.address;

            // var googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${restaurantName},${item.restaurant.location.latitude},${item.restaurant.location.longitude}`;

            var googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${restaurantName},${restaurantAddress}`;

            return (
                <Col
                    key={index}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-5 text-center"
                >
                    <a
                        className="text-decoration-none"
                        href={item.restaurant.menu_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={thumb}
                            className="img-fluid rounded"
                            alt={restaurantName}
                        />
                        <br />
                        <span className="font-weight-bold text-dark">
                            {restaurantName}
                        </span>
                        <br />
                        {restaurantAddress}
                    </a>

                    <div>
                        <a
                            href={googleMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-warning btn-sm"
                        >
                            Buka Peta
                        </a>
                    </div>
                </Col>
            );
        });

        return <Row>{data}</Row>;
    }
}

export default RestoList;
