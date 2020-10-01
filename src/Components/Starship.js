import React, { Component } from "react";
class Starship extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-1">
          <img
            src="images/star1.jpg"
            height="660px"
            width="100%"
            style={{ opacity: "0.6" }}
            alt='starship'
          ></img>
          <div className="falcon-center">
            <h1 style={{ color: "white", fontSize: "100px" }}>STARSHIP</h1>
            <p style={{fontWeight:'bold',fontsize:'30px'}}>SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND</p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 col-sm-6 ">
              <p style={{ color: "white" }}>
                SpaceX’s Starship spacecraft and Super Heavy rocket
                (collectively referred to as Starship) represent a fully
                reusable transportation system designed to carry both crew and
                cargo to Earth orbit, the Moon, Mars and beyond. Starship will
                be the world’s most powerful launch vehicle ever developed, with
                the ability to carry in excess of 100 metric tonnes to Earth
                orbit.
              </p>
            </div>
            <div className="col-12 col-sm-3 ">
              <img src="images/star.gif"   alt='starship'></img>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-sm-5 ">
              <h3 style={{ color: "white", fontSize: "3rem" }}>OVERVIEW</h3>
              <table className="table text-white mt-3  ">
                <tbody>
                  <tr>
                    <td>HEIGHT</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      120 m / <i style={{ color: "#ccc" }}> 394 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>DIAMETER</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      9 m /<i style={{ color: "#ccc" }}>30 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>PAYLOAD TO LEO</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      100+t /<i style={{ color: "#ccc" }}>220+klb </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1 ">
              <img
                src="images/starstruc.png"
                style={{ height: "50vh", width: "40vw", margin: "2rem" }}
                alt='starship' ></img>
            </div>
          </div>
          <div className="row " style={{ margin: "4rem" }}>
            <div className="col-12 col-sm-12 ">
              <h1 style={{ color: "white" }}>STARSHIP UPDATE</h1>
              <iframe
                style={{ margin: "auto" }}
                src="https://www.youtube.com/embed/sOpMrVnjYeY?autoplay=1&mute=1"
                width="1000px"
                height="500px"
                title='starship'
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-5">
              <p style={{ color: "white", fontSize: "2rem" }}>STARSHIP USES</p>
              <h1 style={{ color: "white" }}>SATELLITES</h1>
              <p style={{ color: "white" }}>
                Starship is designed to deliver satellites further and at a
                lower marginal cost per launch than our current Falcon vehicles.
                With a payload compartment larger than any fairing currently in
                operation or development, Starship creates possibilities for new
                missions, including space telescopes even larger than the James
                Webb.
              </p>
            </div>
            <div className="col-12 col-sm-5 offset-sm-1  ">
              <img src="images/satel.gif" style={{ margin: "1.3rem" }} alt='starship'></img>
            </div>
          </div>
          <div className="row mt-3 " style={{ marginBottom: "8rem" }}>
            <div className="col-12 col-sm-12">
              <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li
                    data-target="#demo"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                  <li data-target="#demo" data-slide-to="3"></li>
                </ul>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="images/s1.jpg"
                      alt='starship'
                      style={{ height: "80vh", width: "100vw" }}
                    ></img>
                     <span
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Starship approaching Mars
                    </span>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/s2.jpeg"
                      alt='starship'
                      style={{ height: "80vh", width: "100vw" }}
                    ></img>
                     <span
                      style={{
                        color: "white",
                        fontSize: "17px",
                        fontWeight: "bold",
                        
                      }}
                    >
                      Artist's rendering of Starship approaching saturn and its moons
                    </span>
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="images/s01.png"
                      alt='starship'
                      style={{ height: "80vh", width: "100vw" }}
                    ></img>
                    
                    <span
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Starship Prototype test vehicle in Flight
                    </span>
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="images/s4.jpg"
                      alt='starship'
                      style={{ height: "80vh", width: "100vw" }}
                    ></img>
                      <span
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Starship landing on Moon
                    </span>
                  </div>
                </div>
                <a
                  href="#demo"
                  className="carousel-control-prev"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a
                  href="#demo"
                  className="carousel-control-next"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Starship;
