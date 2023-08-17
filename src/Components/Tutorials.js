import React from 'react';
import "./Tutorials.css";
import { Link } from 'react-router-dom';

const Tutorials = () => {
  return (
    <div className='container-fluid' id="cont">
      <div className="d-flex justify-content-end">
        <Link className='_l1' to='/'><h2 className="text-white my-5">X</h2></Link>
      </div>
      <div className='container'>
          <h2 className='my-5' style={{color:'#FFF4A3',fontWeight:'bold'}}>Tutorials and References</h2>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <h3 style={{color:'#FFF4A3'}}>HTML and CSS</h3>
              <ul className='list-unstyled'>
                <li className='_links1'>Learn HTML</li>
                <li className='_links1'>Learn CSS</li>
                <li className='_links1'>Learn RWD</li>
                <li className='_links1'>Learn W3.CSS</li>
                <li className='_links1'>Learn Sass</li>
                <li className='_links1'>Learn Colors</li>
                <li className='_links1'>Learn Icons</li>
                <li className='_links1'>Learn SVG</li>
                <li className='_links1'>Learn Bootstrap</li>
                <li className='_links1'>Learn Canvas</li>
                <li className='_links1'>Learn Graphics</li>
                <li className='_links1'>Learn How to</li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <h3 style={{color:'#FFF4A3'}}>JavaScript</h3>
              <ul className='list-unstyled'>
                <li className='_links1'>Learn JavaScript</li>
                <li className='_links1'>Learn React</li>
                <li className='_links1'>Learn JQuery</li>
                <li className='_links1'>Learn Vue</li>
                <li className='_links1'>Learn Angular</li>
                <li className='_links1'>Learn Json</li>
                <li className='_links1'>Learn AJAX</li>
                <li className='_links1'>Learn AppML</li>
                <li className='_links1'>Learn W3.JS</li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <h3 style={{color:'#FFF4A3'}}>Backend</h3>
              <ul className='list-unstyled'>
                  <li className='_links1'>Learn Python</li>
                  <li className='_links1'>Learn SQL</li>
                  <li className='_links1'>Learn MySQL</li>
                  <li className='_links1'>Learn PHP</li>
                  <li className='_links1'>Learn Java</li>
                  <li className='_links1'>Learn C</li>
                  <li className='_links1'>Learn C++</li>
                  <li className='_links1'>Learn C#</li>
                  <li className='_links1'>Learn R</li>
                  <li className='_links1'>Learn Kotlin</li>
                  <li className='_links1'>Learn Go</li>
                  <li className='_links1'>Learn Django</li>
                  <li className='_links1'>Learn PostgreSQL</li>
                  <li className='_links1'>Learn TypeScript</li>
                  <li className='_links1'>Learn ASP</li>
                  <li className='_links1'>Learn Node.js</li>
                  <li className='_links1'>Learn Raspberry</li>
                  <li className='_links1'>Learn Git</li>
                  <li className='_links1'>Learn MongoDB</li>
                  <li className='_links1'>Learn AWS cloud</li>
                  <li className='_links1'>Learn XML</li>
                </ul>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <h3 style={{color:'#FFF4A3'}}>Data analytics</h3>
              <ul className='list-unstyled'>
                <li className='_links1'>Learn AI</li>
                <li className='_links1'>Generate AI</li>
                <li className='_links1'>Learn ChatGPT-3.5</li>
                <li className='_links1'>Learn ChatGPT 4</li>
                <li className='_links1'>Learn Google brand</li>
                <li className='_links1'>Learn MAchine learning</li>
                <li className='_links1'>Learn Data Science</li>
                <li className='_links1'>Learn Numpy</li>
                <li className='_links1'>Learn Pandas</li>
                <li className='_links1'>Learn SciPy</li>
                <li className='_links1'>Learn Matplotlib</li>
                <li className='_links1'>Learn Statistics</li>
                <li className='_links1'>Learn Excel</li>
                <li className='_links1'>Learn Google sheets</li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <h3 style={{color:'#FFF4A3'}}>Web building</h3>
              <ul className='list-unstyled'>
                <li className='_links1'>Create a website</li>
                <li className='_links1'>Create a server</li>
                <li className='_links1'>Where to start</li>
                <li className='_links1'>Web templates</li>
                <li className='_links1'>Web Statistics</li>
                <li className='_links1'>Web Certificates</li>
                <li className='_links1'>Web development</li>
                <li className='_links1'>Code editors</li>
                <li className='_links1'>Test your typing Speed</li>
                <li className='_links1'>Play a code game</li>
                <li className='_links1'>Cyber Security</li>
                <li className='_links1'>Accessbility</li>
                <li className='_links1'>Join our Newsletter</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Tutorials
