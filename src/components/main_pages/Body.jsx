import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "88vh",
                backgroundColor: "var(--color-1)",
                padding: "20px",
            }}>
            <h1>Welcome to our webapp Refinetograph...</h1>
            <h4 style={{ padding: "20px" }}>Select the feature you want to use.</h4>

            <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
                <Link to="/upscale">

                    <button
                        type="button"
                        className="btn btn-primary me-2"
                        style={{ fontSize: "16px", padding: "10px 20px" }}
                    >
                        Upscale Image
                    </button>
                </Link>


                <Link to="/deblur-image">
                    <button
                        type="button"
                        className="btn btn-primary me-2"
                        style={{ fontSize: "16px", padding: "10px 20px" }}
                    >
                        Deblur Image
                    </button>
                </Link>



                <Link to="/night-image" >
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{ fontSize: "16px", padding: "10px 20px" }}
                    >
                        Enhance Night Image
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Body;
