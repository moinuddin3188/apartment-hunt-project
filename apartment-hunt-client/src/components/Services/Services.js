import React from 'react';
import apartment from '../../siteImages/logos/apartment 1.png';
import affordable from '../../siteImages/logos/affordable 1.png';
import lessee from '../../siteImages/logos/lessee 1.png';

const Services = () => {
    return (
        <div id="service" className="allServices pt-5 pb-5">
            <h4 className="colorMain text-center pt-5">Service</h4>
            <h1 className="colorMain text-center font-weight-bold pt-3 pb-5">We're an agency tailored to all<br/>clients' needs that always delivers</h1>
            <div className="service-info pt-5 pb-5">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-4 text-center">
                            <img src={apartment} alt=""/>
                            <h4 className="pt-3 pb-3">Wide Range of Properties</h4>
                            <p>With a robust selection of popular <br/>properties on hand, as well as<br/>learning properties from experts</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={affordable} alt=""/>
                            <h4 className="pt-3 pb-3">Financing Made Easy</h4>
                            <p>Our stress-free finance department<br/>that can find financial solutions to<br/>save you money</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={lessee} alt=""/>
                            <h4 className="pt-3 pb-3">Trusted by Thousands</h4>
                            <p>10 new offers every day.. 350 offers<br/>on site, trusted by a community of<br/>thousands of users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;