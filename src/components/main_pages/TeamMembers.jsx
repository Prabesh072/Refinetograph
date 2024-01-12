import React from 'react';
import Prabesh1 from '../../assets/photos/prabesh.jpg';
import Robin1 from '../../assets/photos/robinson.jpg';
import Santosh1 from '../../assets/photos/sante.jpg';

import Fb1 from '../../assets/logos/facebook.svg';
import IS1 from '../../assets/logos/instagram.svg';
import GH1 from '../../assets/logos/github.svg';
import LI1 from '../../assets/logos/linkedin.svg';
import WS1 from '../../assets/logos/website.svg';





const TeamMembers = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#a2ab9f",
    }}>
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

      <div className='asa'
      >

        <div class="container">
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
              <img src={Prabesh1} class="card-img-top" alt="Prabesh"
                style={{
                  height: "200px",
                  objectFit: "cover"
                }} />
              <div class="card-body">
                <h5 class="card-title">Prabesh Aryal</h5>
                <p class="card-text">Hey, I am known as the most handsome guy of my college. The living Legend.</p>

                <span style={{ display: 'flex', gap: "10px", justifyContent: 'center' }}>

                  <a href="https://www.facebook.com/prabesh072" >
                    <img src={Fb1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.instagram.com/prabesh072" >
                    <img src={IS1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.github.com/prabesh072" >
                    <img src={GH1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.linkedin.com/in/prabesh072" >
                    <img src={LI1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.prabesharyal.com.np/" >
                    <img src={WS1} style={{ height: '20px' }} />
                  </a>
                </span>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="card" style={{ width: "300px" }}>
              <img src={Robin1} class="card-img-top" alt="Robinson"
                style={{
                  height: "200px",
                  objectFit: "cover"
                }} />
              <div class="card-body">
                <h5 class="card-title">Robinson Pujara</h5>
                <p class="card-text">Hey, I am the Namuna of my college, I'm in the position of CR because of mercy of lord Prabesh.</p>

                <span style={{
                  display: 'flex',
                  gap: "10px",
                  justifyContent: 'center'
                }}>

                  <a href="https://www.facebook.com/robinson.pujara" >
                    <img src={Fb1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.instagram.com/robin_pujara754" >
                    <img src={IS1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.github.com/robin754" >
                    <img src={GH1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.linkedin.com/in/robinson-pujara-0a9083141" >
                    <img src={LI1} style={{ height: '20px' }} />
                  </a>

                </span>

              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="card" style={{ width: "300px" }} >
              <img src={Santosh1} class="card-img-top" alt="Santosh"
                style={{
                  height: "200px",
                  objectFit: "cover"
                }} />
              <div class="card-body">
                <h5 class="card-title">Santosh Gaire</h5>
                <p class="card-text">Hey, you might know me by the tag of Richest person of BCT B, sabb lai kindinxu ma ta.</p>
                <span style={{
                  display: 'flex',
                  gap: "10px",
                  justifyContent: 'center'
                }}>

                  <a href="https://www.facebook.com/santosh.gaire.3950" >
                    <img src={Fb1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.instagram.com/santoshgairesharma" >
                    <img src={IS1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.github.com/santey624" >
                    <img src={GH1} style={{ height: '20px' }} />
                  </a>

                  <a href="https://www.linkedin.com/in/santosh-gaire-sharma-54141a255" >
                    <img src={LI1} style={{ height: '20px' }} />
                  </a>

                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TeamMembers