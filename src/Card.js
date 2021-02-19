import React from "react";



const Card = ({title ="Default title", subTitle="Default subTitle", src, alt, buttonTitle="Default button" }) =>
    (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={src}
                className="card-img-top"
                alt={alt}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {subTitle}
      </p>
                <a href="#" className="btn btn-success">{buttonTitle}</a>
            </div>
        </div>

    );

export default Card;