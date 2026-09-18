import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">

                {/* Product Image */}
                <div className="col-6">
                    <img
                        src={imageURL}
                        alt={productName}
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                            margin: "0 auto",
                        }}
                    />
                </div>

                {/* Product Details */}
                <div className="col-6 p-5">
                    <h1>{productName}</h1>

                    <p>{productDesription}</p>

                    <div>
                        <a href={tryDemo}>Try Demo</a>

                        <a
                            href={learnMore}
                            style={{ marginLeft: "50px" }}
                        >
                            Learn More
                        </a>
                    </div>

                    {/* App Store Buttons */}
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Google Play"
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                alt="App Store"
                                style={{ marginLeft: "50px" }}
                            />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LeftSection;