import React from 'react'
import Prabesh1 from '../../assets/prabesh1.jpg'
import Robin1 from '../../assets/robin1.jpg'
import Santosh1 from '../../assets/robin2.jpg'


const TeamMembers = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#a2ab9f" }}>
      <div
        style={{
          padding: '10px 15px',
          fontSize: '22px',
          height: '150px',
          backgroundColor: "#2a2a2a",
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          color: "#fff"
        }}>
        <h1> Team Members</h1>
      </div>

      <div
        style={{
          textAlign: 'center',
          height: "88vh",
          backgroundColor: "var(--color-1)",
        }}>

        <div class="container mt-5">
          <div class="card-deck"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>

            {/* <!-- Card 1 --> */}
            <div class="card" style={{ width: "300px" }}>
              <img src={Prabesh1} class="card-img-top" alt="Prabesh" style={{ height: "200px", objectFit: "cover" }} />
              <div class="card-body">
                <h5 class="card-title">Prabesh Aryal</h5>
                <p class="card-text">Hey, I am known as the most handsome guy of my college.</p>
                <a href="#" class="btn btn-outline-primary btn-social">Twitter</a>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="card" style={{ width: "300px" }}>
              <img src={Robin1} class="card-img-top" alt="Robinson" style={{ height: "200px", objectFit: "cover" }} />
              <div class="card-body">
                <h5 class="card-title">Robinson Pujara</h5>
                <p class="card-text">Hey, I am the Namuna of my college, I'm in the position of CR because of mercy of lord Prabesh</p>
                <a href="#" class="btn btn-outline-primary btn-social">Facebook</a>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="card" style={{ width: "300px" }} >
              <img src={Santosh1} class="card-img-top" alt="Santosh" style={{ height: "200px", objectFit: "cover" }} />
              <div class="card-body">
                <h5 class="card-title">Santosh Gaire</h5>
                <p class="card-text">Hey, you might be known by the tag of Richest person of BCT B, sabb lai kindinxu ma ta.</p>
                <a href="#" class="btn btn-outline-primary btn-social">LinkedIn</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TeamMembers