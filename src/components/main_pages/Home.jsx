import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{
            height: "90vh",
            overflow: "hidden"
        }}>

            <Outlet />
        </div>
    )
}

export default Home