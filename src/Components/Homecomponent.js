import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container1">
          <img
            src="images/first.jpg"
            width="100%"
            height="660px"
            alt="falcon9"
          ></img>
          <div className="bottom-right">
            <p style={{ fontSize: "35px" }}>
              UPCOMING LAUNCH
            </p>
            <p style={{ fontSize: "40px", fontWeight: 'bold' }}>
              STARLINK MISSION
            </p>{" "}
            <br></br>
            <button className="btn btn-outline-light btn-lg">UPDATE</button>
          </div>
        </div>

        <div className="container2">
          <img
            src="images/flight.jpg"
            alt="human space flight"
            width="100%"
            height="650px"

          ></img>
          <div className="bottom-left">
            <h4>RETURNING HUMAN</h4>
            <h4>SPACEFLIGHTS TO THE</h4>

            <h4>TO THE UNITED STATES</h4>
            <a type="button" href="#" className="btn btn-outline-dark btn-lg">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-5 align-self-center ' style={{marginTop:'3rem'}}>
              <h3 style={{color:"white",fontSize:'50px'}}>CREW DRAGON ANIMATION</h3>
              <p  style={{color:"white"}}>Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.</p>
            </div>
            <div className='col-12 col-sm-5 '>
            <iframe
            width="600"
            height="445"
            title='ISS'
            style={{ margin: "4rem",fontSize:'10px' }}
            src="https://www.youtube.com/embed/sZlzYzyREAI?autoplay=1&mute=1"
          ></iframe>
            </div>
          </div>

        </div>
        <div className="container3" style={{ marginBottom: '2rem' }}>

          <img src="images/lunar.jpg" width="100%" height="570px"></img>
          <div className="text-right">
            <p style={{ fontSize: "20px" }}>05/01/20</p>
            <h4>NASA SELECTS LUNAR</h4>
            <h4>OPTIMIZED STARSHIP</h4>
            <p style={{ marginRight: "18px", fontSize: "15px" }}>
              NASA selected SpaceX to develop a lunar optimized Starship to{" "}
              <br></br>
                transport crew between lunar orbit and the surface of the Moon
                <br></br>
                as part of NASA’s Artemis program.
              </p>
            <a type="button" className="btn btn-outline-light btn-lg">
              LEARN MORE
              </a>
          </div>

        </div>

      </React.Fragment>
    );
  }
}
export default Home;