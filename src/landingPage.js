import React from 'react';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdOutlineNotStarted } from "react-icons/md";
import css from "./style/style.css"
import { FaCheck } from "react-icons/fa";



const LandingPage = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#FFFBEB"}}>
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FFFBEB" }}>
          <a className="navbar-brand ms-5" style={{ color: '#78350F' }} href="#">Collapse</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" style={{ color: '#78350F' }} href="#">Products<span className="sr-only"></span></a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" style={{ color: '#78350F' }} href="#">Solutions</a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" style={{ color: '#78350F' }} href="#">Pricing</a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" style={{ color: '#78350F' }} href="#">Resources</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" style={{ color: '#78350F' }} href="#">Log In</a>
              </li>
              <li className="nav-item">
                <button className="btn me-5" style={{ border: "1px solid #78350F", backgroundColor: "#FFFBEB", color: "#78350F" }}>Sign up now</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container" style={{marginRight: "0px"}}>
          <div className="left">
            <h1 style={{fontWeight:"bold", fontSize:"65px", marginTop:"10%"}}>Collectible Sneakers</h1>
            <br/>
            <div style={{width: "50%"}}>
              <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            </div>
            <br/>
            <div className='row' style={{width: "50%"}}>
              <div className='col-md-6'>
                <button className="btn me-5" style={{ border: "1px solid #78350F", backgroundColor: "#FFFBEB", color: "#78350F" }}>Sign up now</button>
              </div>
              <div className='col-md-6'>
                <button className="btn me-5" style={{ backgroundColor: "#FFFBEB", color: "#78350F" }}><MdOutlineNotStarted /> Watch Demo</button>
              </div>
            </div>
            <div class="square-container">  
              <div class="square"></div>
              <img src="/images/ayakkabi.png" alt="Placeholder" class="square-img" />
              <div className='row zindex' style={{ zIndex: 3, textAlign:"center" }}>
                <div className='col-md-4' style={{marginTop:"10%", marginLeft:"-11%", fontWeight:"bold"}}>Nibh viverra <br/> <p style={{fontWeight:"normal", marginLeft:"39%", textAlign:"left"}}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p></div>
                <div className='col-md-4' style={{marginTop:"10%", marginLeft:"1%", fontWeight:"bold"}}>Nibh viverra <br/> <p style={{fontWeight:"normal", marginLeft:"39%", textAlign:"left"}}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p></div>
                <div className='col-md-4' style={{marginTop:"10%", marginLeft:"2%", fontWeight:"bold"}}>Nibh viverra <br/> <p style={{fontWeight:"normal", marginLeft:"39%", textAlign:"left"}}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p></div>
              </div>
            </div>
          </div>
          <div className="right">b</div>
        </div>
      </div> 


      <div style={{ backgroundColor: "#0F172A", minHeight: "100vh", padding: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <h1 className="mt-5 ms-5 ab" style={{ color: "white", fontWeight:"bold" }}>The best of the best</h1>
          </div>
          <div className="col-md-6" style={{ textAlign: "right" }}>
            <button className="btn btn-lg mt-5 me-5" style={{ border: "1px solid white", backgroundColor: "#0F172A", color: "white" }}>Sign up now</button>
          </div>
        </div>
        <div className="row mt-5 ms-5 me-5">
          <div className="col-md-4">
            <div className="card mb-3" style={{ backgroundColor: "#1E293B", color: "white", borderRadius: "10px" }}>
              <img src="/images/card-1.jpeg" alt="Placeholder" className='card-img-top' style={{ width: "100%", borderRadius: "10px 10px 0 0" }} />
              <div style={{ padding: "20px" }}>
                <h2>Title</h2>
                <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              </div>
              <div className='justify-content-center align-items-center d-flex'>
                  <button className="btn btn-lg mt-5 mb-3" style={{ border: "1px solid white", backgroundColor: "#0F172A", color: "white", width:"80%" }}><LiaShoppingCartSolid style={{fontSize:"25px"}}/> Buy now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card mb-3" style={{ backgroundColor: "#1E293B", color: "white", borderRadius: "10px"}}>
              <img src="/images/card-2.jpeg" alt="Placeholder" className='card-img-top' style={{ width: "100%", borderRadius: "10px 10px 0 0" }} />
              <div style={{ padding: "20px" }}>
                <h2>Title</h2>
                <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              </div>
              <div className='justify-content-center align-items-center d-flex'>
                  <button className="btn btn-lg mt-5 mb-3" style={{ border: "1px solid white", backgroundColor: "#0F172A", color: "white", width:"80%" }}><LiaShoppingCartSolid style={{fontSize:"25px"}}/> Buy now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card mb-3" style={{ backgroundColor: "#1E293B", color: "white", borderRadius: "10px" }}>
              <img src="/images/card-3.jpeg" alt="Placeholder" className='card-img-top' style={{ width: "100%", borderRadius: "10px 10px 0 0" }} />
              <div style={{ padding: "20px" }}>
                <h2>Title</h2>
                <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              </div>
              <div className='justify-content-center align-items-center d-flex'>
                  <button className="btn btn-lg mt-5 mb-3" style={{ border: "1px solid white", backgroundColor: "#0F172A", color: "white", width:"80%" }}><LiaShoppingCartSolid style={{fontSize:"25px"}}/> Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center" style={{ backgroundColor: "#FFFBEB" }}>
        <div className='card' style={{ marginTop: "15%", width: "80%" }}> 
          <div className='row'>
            <div className='col-md-5 mt-5 ms-5'><h1 style={{fontWeight: "bold"}}>Why join us</h1><br/>
              <FaCheck style={{color:"green", marginRight:"3%"}} /> Est et in pharetra magna adipiscing ornare aliquam. <br/>
              <FaCheck style={{color:"green", marginRight:"3%"}} /> Tellus arcu sed consequat ac velit ut eu blandit. <br/>
              <FaCheck style={{color:"green", marginRight:"3%"}} /> Ullamcorper ornare in et egestas dolor orci. <br/>
              <button className="btn me-5 mt-5" style={{ border: "1px solid #78350F", backgroundColor: "#FFFFFF", color: "#78350F" }}>Sign up now</button>
            </div>
            <div className='col-md-6 mt-5'>
              <div className="cross-rectangle"></div>
              <div class="circle top-circle">
              <div></div><p ></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
