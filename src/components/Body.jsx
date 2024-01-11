import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div
            style={{
                // display: "flex",
                // flexDirection:"column",
                height:"88vh",
                backgroundColor: "var(--color-1)",
                padding: "20px",
            }}>
            <h1>Welcome to our webapp Refinetograph...</h1>
            <p>Upscale Image/ Deblur Image/ Enhance Night Image</p>

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
