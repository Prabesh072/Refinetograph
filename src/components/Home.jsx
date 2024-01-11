import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* <Navbar/> */}
            <Outlet/>
        </>
    )
}

export default Home