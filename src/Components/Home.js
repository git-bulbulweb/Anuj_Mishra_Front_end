import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {BiStopCircle,BiLogoVuejs,BiLogoGit,BiLogoMongodb,BiLogoPostgresql} from "react-icons/bi"; 
import {GiWorld} from "react-icons/gi"; 
import {BsSearch,BsFiletypeJson,BsFiletypeXml,BsFiletypeSass,BsFillAspectRatioFill,BsDatabaseFillCheck,BsDiscord} from "react-icons/bs";
import {SiKotlin,SiTaichigraphics,SiBoxysvg,SiPlaycanvas,SiNumpy,SiPandas,SiScipy,SiTypescript,SiDjango} from "react-icons/si";
import {TbBrandMysql} from "react-icons/tb";
import {TiMessageTyping,TiTick} from "react-icons/ti";
import {FcStatistics} from "react-icons/fc";
import {MdWorkspaces} from "react-icons/md";
import {HiOutlineColorSwatch} from "react-icons/hi";
import {AiFillGithub,AiOutlineAppstoreAdd,AiFillQuestionCircle,AiFillFacebook,AiOutlineInstagram,AiFillLinkedin} from "react-icons/ai";
import {PiCurrencyKrwDuotone} from "react-icons/pi";
import {FaNode,FaReact,FaFonticonsFi,FaRaspberryPi,FaAngular,FaGamepad} from "react-icons/fa";
import { useState } from 'react'; 
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  }
  return (
    <div>
      <div className='container-fluid' style={{backgroundColor:'#282A35'}}>
        <Navbar expand="lg" className="">
          <Container fluid>
            <Navbar.Toggle style={{backgroundColor:'aliceblue'}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" id="l1">
                <Nav.Link href="#home">HTML</Nav.Link>
                <Nav.Link href="#link">CSS</Nav.Link>
                <Nav.Link href="#link">JAVASCRIPT</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">SQL</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">PYTHON</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">JAVA</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">PHP</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">BOOTSRAP</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">HOW TO</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">W3.CSS</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">C</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">C++</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">C#</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">REACT</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">R</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">JQUERRY</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">DJANGO</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">TYPESCRIPT</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">NODEJS</Nav.Link>
                <Nav.Link href="#link" className="d-lg-none">MYSQL</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav className="ms-auto">
            <Nav.Link className='text-white' href="#home"><BiStopCircle /></Nav.Link>
            <Nav.Link className='text-white' href="#link"><GiWorld /></Nav.Link>
            {isInputVisible && <input style={{ borderRadius: "20px" }} type='text' />}
            <Nav.Link className='text-white' href="#link" onClick={toggleInputVisibility}>
              <BsSearch />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container-fluid text-center mt-5" style={{ backgroundColor: '#282A35' }}>
        <h1 className='text-white' style={{ fontSize: '70px', fontFamily: "'Kanit', sans-serif" }}>Learn to Code</h1>
        <p style={{fontSize:'23px',color:'#FFC0C7',fontFamily: "'Kanit', sans-serif"}}>With the world's largest web developer site.</p>
        <div className='mt-3'>
          <input  type='text' placeholder='Search our tutorials, e.g. HTML' className='form-control'></input>
          <Button variant="success" className='mt-2'><BsSearch /></Button>
          <div className='mt-2'>
            <Link id="l2" to="/tutorials">Not Sure Where To Begin?</Link>
          </div>
        </div>
    </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: '#D9EEE1' }}>
        <div className="row">
          <div className="col-md-4">
            <h1 className="head1">HTML</h1>
            <p className="para1">
              The language for building web pages
              <br />
              It is one of the most basic building blocks of every
              <br />
              website, so it's crucial to learn if you want to have a career
              <br />
              in web development.
            </p>
          </div>
          <div className="col-md-4">
            <div className="card mx-auto m-5" style={{ maxWidth: '25rem' }}>
              <div className="card-header" style={{ fontSize: '24px', fontFamily: "'Kanit', sans-serif" }}>
                HTML EXAMPLE:
              </div>
              <div className="card-body">
                <img className="card-img-top img-fluid" src="./images/Html.png" alt="HTML Example" />
              </div>
              <div className="card-footer">
                <button style={{ borderRadius: '30px' }} className="btn btn-success btn-block">
                  Try It Yourself
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="btg">
              <div className="m-3 m-md-5">
                <button className="btn btn-success btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                  Learn HTML
                </button>
              </div>
              <div className="m-3 m-md-5">
                <button className="btn btn-success btn-block" style={{ backgroundColor:'#FFF4A3',color:'black', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                  Video Tutorial
                </button>
              </div>
              <div className="m-3 m-md-5">
                <button className="btn btn-dark btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                  HTML References
                </button>
              </div>
              <div className="m-3 m-md-5">
                <button className="btn btn-success btn-block" style={{ backgroundColor:"#FFC0C7",color:'black',fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                  Get Certified
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container-fluid" style={{ backgroundColor: '#FFF4A3' }}>
          <div className="row">
            <div className="col-md-4">
              <h1 className="head1">CSS</h1>
              <p className="para1">
                The language for styling web pages
                <br />
                CSS stands for Cascading Style Sheets
                <br />
                CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                <br />
                CSS saves a lot of work. It can control the layout of multiple web pages all at once.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card mx-auto m-5" style={{ maxWidth: '25rem' }}>
                <div className="card-header" style={{ fontSize: '24px', fontFamily: "'Kanit', sans-serif" }}>
                  CSS EXAMPLE:
                </div>
                <div className="card-body">
                  <img className="card-img-top img-fluid" src="./images/css.jpg" alt="CSS Example" />
                </div>
                <div className="card-footer">
                  <button style={{ borderRadius: '30px' }} className="btn btn-success btn-block">
                    Try It Yourself
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btg">
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Learn CSS
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ backgroundColor:'#FFF4A3',color:'black', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Video Tutorial
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-dark btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    CSS References
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ backgroundColor:"#FFC0C7",color:'black',fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Get Certified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: '#282A35' }}>
          <div className="row">
            <div className="col-md-4 text-center text-md-left">
              <h1 style={{ color: 'white', fontSize: '50px' }} className="head1">JAVASCRIPT</h1>
              <p style={{ color: 'white' }} className="para1">
                JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS
              </p>
            </div>
            <div className="col-md-4">
              <div className="card mx-auto m-5" style={{ maxWidth: '25rem' }}>
                <div className="card-header" style={{ fontSize: '24px', fontFamily: "'Kanit', sans-serif" }}>
                  JAVASCRIPT EXAMPLE:
                </div>
                <div className="card-body">
                  <img className="card-img-top img-fluid" src="./images/js.jpg" alt="JavaScript Example" />
                </div>
                <div className="card-footer">
                  <button style={{ borderRadius: '30px' }} className="btn btn-success btn-block">
                    Try It Yourself
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btg">
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Learn JAVASCRIPT
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ backgroundColor:'#FFF4A3',color:'black', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Video Tutorial
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-dark btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    JAVASCRIPT References
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ backgroundColor:"#FFC0C7",color:'black',fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Get Certified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: '#F3ECEA' }}>
          <div className="row">
            <div className="col-md-4">
              <h1 className="head1">Python</h1>
              <p className="para1">
                Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built-in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card mx-auto m-5" style={{ maxWidth: '25rem' }}>
                <div className="card-header" style={{ fontSize: '24px', fontFamily: "'Kanit', sans-serif" }}>
                  PYTHON EXAMPLE:
                </div>
                <div className="card-body">
                  <img className="card-img-top img-fluid" src="./images/python1.png" alt="Python Example" />
                </div>
                <div className="card-footer">
                  <button style={{ borderRadius: '30px' }} className="btn btn-success btn-block">
                    Try It Yourself
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btg">
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Learn PYTHON
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ backgroundColor:'#FFF4A3',color:'black', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Video Tutorial
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-dark btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    PYTHON References
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ backgroundColor:"#FFC0C7",color:'black',fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Get Certified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: '#96D4D4' }}>
          <div className="row">
            <div className="col-md-4 mx-auto text-center">
              <h1 style={{fontSize:"80px",fontWeight:'bold', fontFamily: "'Kanit', sans-serif"}}>SQL</h1>
              <p style={{fontSize:"18px",fontWeight:'bold', fontFamily: "'Kanit', sans-serif"}}>
                Structured Query Language (SQL) is a standardized programming language that is used to manage relational databases and perform various operations on the data in them. Initially created in the 1970s, SQL is regularly used not only by database administrators, but also by developers writing data integration scripts and data analysts looking to set up and run analytical queries.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card mx-auto m-5" style={{ maxWidth: '25rem' }}>
                <div className="card-header" style={{ fontSize: '24px', fontFamily: "'Kanit', sans-serif" }}>
                  SQL EXAMPLE:
                </div>
                <div className="card-body">
                  <img className="card-img-top img-fluid" src="./images/SQL.png" alt="SQL Example" />
                </div>
                <div className="card-footer">
                  <button style={{ borderRadius: '30px' }} className="btn btn-success">
                    Try It Yourself
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btg">
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Learn SQL
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-block" style={{ backgroundColor:'#FFF4A3',color:'black', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Video Tutorial
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-dark btn-block" style={{ fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    SQL References
                  </button>
                </div>
                <div className="m-3 m-md-5">
                  <button className="btn btn-success btn-block" style={{ backgroundColor:"#FFC0C7",color:'black',fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }}>
                    Get Certified
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid' style={{backgroundColor:'#282A35'}}>
          <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                      <Card className='my-5' style={{backgroundColor:"#FFC0C7" }}>
                        <Card.Body className='text-center'>
                          <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>PHP</Card.Title>
                          <Card.Text  style={{fontSize:"18px",fontFamily:"'Kanit', sans-serif"}}>
                            A web server programming language
                          </Card.Text>
                          <Button style={{borderRadius:'30px'}} variant="dark">Learn PHP</Button>{' '}
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                      <Card className='my-5' style={{backgroundColor:'#FFF4A3'}}>
                          <Card.Body className='text-center'>
                            <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>jQueryY</Card.Title>
                            <Card.Text  style={{fontSize:"18px",fontFamily:"'Kanit', sans-serif"}}>
                            A JS library for developing web pages
                            </Card.Text>
                            <Button style={{borderRadius:'30px'}} variant="dark">Learn jQueryY</Button>{' '}
                          </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                      <Card className='my-5' style={{backgroundColor:"#F3ECEA" }}>
                          <Card.Body className='text-center'>
                            <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Java</Card.Title>
                            <Card.Text  style={{fontSize:"18px",fontFamily:"'Kanit', sans-serif"}}>
                              A programming language in coding world
                            </Card.Text>
                            <Button style={{borderRadius:'30px'}} variant="dark">Learn Java</Button>{' '}
                          </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                      <Card className='my-5' style={{backgroundColor:'#D9EEE1' }}>
                        <Card.Body className='text-center'>
                          <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>C++</Card.Title>
                          <Card.Text  style={{fontSize:"18px",fontFamily:"'Kanit', sans-serif"}}>
                            A programming language in coding world for developer
                          </Card.Text>
                          <Button style={{borderRadius:'30px'}} variant="dark">Learn C++</Button>{' '}
                        </Card.Body>
                      </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                      <Card className='my-5' style={{backgroundColor:"#96D4D4" }}>
                          <Card.Body className='text-center'>
                            <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>W3.CSS</Card.Title>
                            <Card.Text  style={{fontSize:"18px",fontFamily:"'Kanit', sans-serif"}}>
                              A CSS framework for faster responsive web pages
                            </Card.Text>
                            <Button style={{borderRadius:'30px'}} variant="dark">Learn W3.CSS</Button>{' '}
                          </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                      <Card className='my-5' style={{backgroundColor:"#E7E9EB" }}>
                          <Card.Body className='text-center'>
                            <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Bootstrap</Card.Title>
                            <Card.Text  style={{fontSize:"18px",fontFamily:"'Kanit', sans-serif"}}>
                                A CSS framework for designing better web pages
                            </Card.Text>
                            <Button style={{borderRadius:'30px'}} variant="dark">Learn Bootstrap</Button>{' '}
                          </Card.Body>
                        </Card>
                    </div>
                  </div>
              </div>
              </div>
              <div className='container-fluid'  style={{backgroundColor:'#282A35'}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                        <Card className='m-5' style={{backgroundColor:"#FFC0C7" }}>
                          <Card.Body className='text-center'>
                            <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>C</Card.Title>
                          </Card.Body>
                        </Card>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                        <Card className='m-5' style={{backgroundColor:'#FFF4A3'}}>
                          <Card.Body className='text-center'>
                            <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>C#</Card.Title>
                          </Card.Body>
                        </Card>
                        </div>
                    </div>
                  </div>
              </div>
              <div className='container-fluid' style={{backgroundColor:'#282A35'}}>
                  <div className='conatiner d-flex flex-column justify-content-center align-items-center'>
                    <div className='row'>
                      <div className=' col-lg-3 col-md-6 col-sm-12'>
                        <Card style={{backgroundColor:"#E7E9EB" }} className='m-5'>
                          <Card.Body className='text-center'>
                          <Card.Img variant="top" style={{width:'50px',padding:'5px'}} height={'50px'} src="./images/R.png" alt="" />
                            <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>R</Card.Title>
                          </Card.Body>
                        </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Card style={{backgroundColor:'#D9EEE1' }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiKotlin/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Kotlin</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Card style={{backgroundColor:"#96D4D4" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><FaNode/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Node.js</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#FFC0C7" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><FaReact/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>React</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#FFF4A3'}} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BsFiletypeJson/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>JSON</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#E7E9EB" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BiLogoVuejs/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Vue</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#D9EEE1' }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><TbBrandMysql/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>MySQL</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#96D4D4" }}  className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BsFiletypeXml/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>XML</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#FFC0C7" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BsFiletypeSass/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Sass</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#FFF4A3'}} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><FaFonticonsFi/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Icons</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#E7E9EB" }}  className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><PiCurrencyKrwDuotone/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>RWD</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#D9EEE1' }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiTaichigraphics/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Graphics</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#96D4D4" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiBoxysvg/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>SVG</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#FFC0C7" }}  className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiPlaycanvas/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Canvas</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#FFF4A3'}} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><FaRaspberryPi/></Card.Title>
                              <Card.Title style={{fontSize:"43px",fontFamily:"'Kanit', sans-serif"}}>Raspberry Pi</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#E7E9EB" }}   className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiTaichigraphics/></Card.Title>
                              <Card.Title style={{fontSize:"37px",fontFamily:"'Kanit', sans-serif"}}>Cyber Security</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#D9EEE1' }}  className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><HiOutlineColorSwatch/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Colors</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#96D4D4" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><AiFillGithub/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Git</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#FFC0C7" }} className='m-5'>
                            <Card.Body className='text-center'>
                            <Card.Img variant="top" style={{width:'50px',padding:'5px'}} height={'50px'} src="./images/mat.png" alt="" />
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Matplotlib</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#FFF4A3'}} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiNumpy/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>NumPy</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#E7E9EB" }}  className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiPandas/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Pandas</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#D9EEE1' }}  className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiScipy/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>SciPy</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#96D4D4" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BsFillAspectRatioFill/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>ASP</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#FFC0C7" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><FaAngular/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>AngularJS</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#FFF4A3'}} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><AiOutlineAppstoreAdd/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>AppML</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card  style={{backgroundColor:"#E7E9EB" }}  className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BiLogoGit/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Go</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#D9EEE1' }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiTypescript/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>TypeScript</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#96D4D4" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><SiDjango/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Django</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#FFC0C7" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BiLogoMongodb/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>MongoDB</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#FFF4A3'}} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><FcStatistics/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Statistics</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#E7E9EB" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BsDatabaseFillCheck/></Card.Title>
                              <Card.Title style={{fontSize:"43px",fontFamily:"'Kanit', sans-serif"}}>Data Science</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#D9EEE1' }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><TiMessageTyping/></Card.Title>
                              <Card.Title style={{fontSize:"41px",fontFamily:"'Kanit', sans-serif"}}>Typing Speed</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#96D4D4" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><AiFillQuestionCircle/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>How to</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#FFC0C7" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><FaGamepad/></Card.Title>
                              <Card.Title style={{fontSize:"45px",fontFamily:"'Kanit', sans-serif"}}>Code Game</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:'#FFF4A3'}} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><MdWorkspaces/></Card.Title>
                              <Card.Title style={{fontSize:"43px",fontFamily:"'Kanit', sans-serif"}}>Spaces</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                          <Card style={{backgroundColor:"#E7E9EB" }} className='m-5'>
                            <Card.Body className='text-center'>
                              <Card.Title style={{fontSize:'34px'}}><BiLogoPostgresql/></Card.Title>
                              <Card.Title style={{fontSize:"41px",fontFamily:"'Kanit', sans-serif"}}>PostgreSQL</Card.Title>
                            </Card.Body>
                          </Card>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='container-fluid' style={{backgroundColor:'#282A35'}}>
                <div className="container">
                  <h1 className="text-center text-white" style={{fontSize:'4vw', fontFamily:"'Kanit', sans-serif"}}>Code Editor</h1>
                  <p className="text-center text-white" style={{fontSize:'1.0vw', fontFamily:"'Kanit', sans-serif"}}>With our online code editor, you can edit code and view the result in your browser</p>
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                          <img src="./images/h1.webp"  width={'300px'} height={'300px'} className="img-responsive my-5" alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                          <img src="./images/htmloutput.png" width={'300px'} height={'300px'} className="img-responsive my-5" alt=""/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                      <div class="m-3">
                        <button style={{fontSize:'1.0vw',borderRadius:"30px", fontFamily:"'Kanit', sans-serif"}} class="btn btn-success btn-block">Try Frontend Editor (HTML, CSS, JS)</button>
                      </div>
                      <div className="m-3">
                        <button style={{color:'black',backgroundColor:'#FFF4A3',fontSize:'1.0vw',borderRadius:"30px", fontFamily:"'Kanit', sans-serif"}} className="btn btn-success btn-block">Try Backend Editor (.PYTHON, PHP, JAVA, C...)</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container-fluid text-center' style={{backgroundColor:'#282A35'}}>
                <h1 className='text-white' style={{fontSize:'2.8vw', fontFamily:"'Kanit', sans-serif"}}>W3Schools Spaces</h1>
                <p  className="text-white" style={{fontSize:'1.0vw', fontFamily:"'Kanit', sans-serif"}}>If you want to create your own website, check out W3Schools Spaces. It is free to use and does not require any setup:</p>
                <img src='./images/w3.jpg' className='img-fluid' alt="" style={{ maxWidth: '80%' }} />
                <img src='./images/flow.png' className='img-fluid' alt="" style={{ maxWidth: '80%' }} />
                <div>
                  <Button className='text-center m-5' style={{ width:'40%', fontFamily:"'Kanit', sans-serif",borderRadius:'30px'}} variant="success">Learn more</Button>{' '}
                </div>
              </div>
        <div className='container-fluid'>
          <div className='row'>
              <div className='col-md-6 text-center' style={{backgroundColor:'#D9EEE1'}}>
                  <h1 className='m-4 m-md-5' style={{ fontSize: '2.8vw', fontFamily: "'Kanit', sans-serif" }}>My Learning</h1>
                  <p  className='m-4 m-md-5' style={{ fontSize: '1.0vw', fontFamily: "'Kanit', sans-serif" }}>Track your progress with our free "My Learning" program. Log in to your account and start earning points!</p>
                  <img src='./images/ch.png' className='m-4 m-md-5 img-fluid' alt="" style={{ maxWidth: '80%' }} />
                  <Button className='text-center m-4 m-md-5' style={{ width: '40%', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }} variant="success">Sign Up for Free</Button>{' '}
              </div>
              <div className='col-md-6 d-flex flex-column justify-content-center align-items-center text-center' style={{backgroundColor:'#282A35'}}>
                  <h1  className='text-center text-white mt-5' style={{ fontSize: '2.8vw', fontFamily: "'Kanit', sans-serif" }}>Become a Pro User</h1>
                  <p className='text-center' style={{fontSize: '1.0vw', color:'#FFC0C7', fontFamily: "'Kanit', sans-serif" }}>And unlock powerful features:</p>
                  <div className="d-flex flex-column align-items-start">
                      <p className='tick'><TiTick style={{ fontSize: '1.0vw', backgroundColor: 'white', color: 'black', borderRadius: '30px', marginRight: '1vw' }}></TiTick><span className='text-white' style={{ fontSize: '1.0vw', fontFamily: "'Kanit', sans-serif" }}>Browse W3Schools without ads</span></p>
                      <p className='tick'><TiTick style={{ fontSize: '1.0vw', backgroundColor: 'white', color: 'black', borderRadius: '30px', marginRight: '1vw' }}></TiTick><span className='text-white' style={{ fontSize: '1.0vw', fontFamily: "'Kanit', sans-serif" }}>Website hosting (Includes Spaces PRO)</span></p>
                      <p className='tick'><TiTick style={{ fontSize: '1.0vw', backgroundColor: 'white', color: 'black', borderRadius: '30px', marginRight: '1vw' }}></TiTick><span className='text-white' style={{ fontSize: '1.0vw', fontFamily: "'Kanit', sans-serif" }}>Access to our HTML Video Tutorial</span></p>
                  </div>
                  <Button className='text-center mt-2 my-5 mt-md-5' style={{ width: '40%', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }} variant="success">Learn More</Button>{' '}
              </div>
          </div>
          <div className='conatiner-fluid'>
              <div className='row'>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center text-center' style={{backgroundColor:'#F3ECEA'}}>
                  <h1 className='text-center' style={{ fontSize: '2.8vw', fontFamily: "'Kanit', sans-serif" }}>Color Picker</h1>
                  <p className='text-center' style={{ fontSize: '1.0vw', fontFamily: "'Kanit', sans-serif" }}>W3Schools' famous color picker:</p>
                  <img src='./images/color.png' className='my-4 img-fluid' alt="" style={{ maxWidth: '90%' }} />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center text-center' style={{backgroundColor:'#96D4D4'}}>
                  <h1 className='text-center my-5' style={{ fontSize: '2.9vw', fontFamily: "'Pacifico', cursive" }}>Code Game</h1>
                  <p className='text-center' style={{ fontSize: '1.0vw', fontFamily: "'Pacifico', cursive" }}>Help the Lynx collect pine cones!</p>
                  <img src='./images/game.png' className='my-4 img-fluid' alt="" style={{ maxWidth: '80%' }} />
                  <div className="d-flex justify-content-center">
                    <Button id="btn11" className='text-center text-white mt-4 my-5' style={{ width: '100%', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }} variant="dark">Learn More</Button>{' '}
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className='container-fluid text-center' style={{backgroundColor:'#E7E9EB'}}>
            <h1 className='text-center' style={{ fontSize: '2.8vw', fontFamily: "'Kanit', sans-serif" }}>Web Templates</h1>
            <p className='text-center' style={{ fontSize: '1.0vw', fontFamily: "'Kanit', sans-serif" }}>Browse our selection of free responsive HTML Templates</p>
            <img src='./images/temp.jpg' className='my-4 img-fluid' alt="" style={{ maxWidth: '80%' }} />
            <div className="d-flex justify-content-center">
              <Button className='text-center text-white mt-4 m-5' style={{ width: '50%', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }} variant="dark">Learn More</Button>{' '}
            </div>
          </div>
          <div className='container-fluid' style={{backgroundColor:'#282A35'}}>
            <div className='container text-center'>
              <h1 className='text-white p-5' style={{ fontSize: '2.8vw', fontFamily: "'Kanit', sans-serif" }}>Kickstart your career</h1>
              <p className='text-white' style={{ fontSize: '1vw', fontFamily: "'Kanit', sans-serif" }}>Get certified by completing a course</p>
              <Button  className='text-center mt-4 mt-md-5 my-5' style={{ width: '50%', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }} variant="success">Get Started</Button>{' '}
            </div>
          </div>
          <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'#E7E9EB'}}>
            <h1 style={{ fontSize: '2.8vw', fontFamily: "'Kanit', sans-serif" }}>How To Section</h1>
            <p style={{ fontSize: '1vw', fontFamily: "'Kanit', sans-serif" }}>Code snippets for HTML, CSS and JavaScript</p>
            <p style={{ fontSize: '1vw', fontFamily: "'Kanit', sans-serif" }}>For example, how to create a slideshow:</p>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
              <div className="carousel-container">
                <Carousel style={{maxwidth:'800px', border:"5px solid black",zIndex:1}} data-bs-theme="dark">
                  <Carousel.Item>
                  <div className="carousel-image-container">
                      <img
                        className="d-block w-100"
                        src="./images/cq.jpg"
                        alt="First slide"
                      />
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className='carousel-image-container'>
                      <img
                        className="d-block w-100"
                        src="./images/cq1.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className='carousel-image-container'>
                      <img
                        className="d-block w-100"
                        src="/images/cq2.jpg"
                        alt="Third slide"
                      />
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <Button className='text-center mt-3' style={{ width: '100px', height: '40px', transform: 'rotate(90deg)', color: 'black' }} variant="dark"></Button>
              <Button className='text-center mt-3' id="bot1" style={{ width: '50%', fontFamily: "'Kanit', sans-serif", borderRadius: '30px' }} variant="dark">Learn How To</Button>
            </div>
            <p className='mt-5' style={{ fontSize: '1vw', fontFamily: "'Kanit', sans-serif" }}>Follow us on</p>
            <div style={{fontSize:'1.5vw'}} className="social-icons my-5">
              <AiFillFacebook  className="icon" />
              <AiOutlineInstagram className="icon" />
              <AiFillLinkedin className="icon" />
              <BsDiscord className="icon" />
            </div>
          </div>
          <footer style={{backgroundColor:'#E7E9EB'}}>
            <div id="btng" className='container-fluid d-flex flex-wrap justify-content-center'>
              <Button className='text-center text-white mt-4 mx-2 flex-fill' style={{ fontFamily: "'Kanit', sans-serif"}} variant="dark">Spaces</Button>{' '}
              <Button className='text-center text-white mt-4 mx-2 flex-fill' style={{ fontFamily: "'Kanit', sans-serif"}} variant="dark">Upgrade</Button>{' '}
              <Button className='text-center text-white mt-4 mx-2 flex-fill' style={{ fontFamily: "'Kanit', sans-serif"}} variant="dark">Newsletter</Button>{' '}
              <Button className='text-center text-white mt-4 mx-2 flex-fill' style={{ fontFamily: "'Kanit', sans-serif"}} variant="dark">Get Certified</Button>{' '}
              <Button className='text-center text-white mt-4 mx-2 flex-fill' style={{ fontFamily: "'Kanit', sans-serif"}} variant="dark">Report Error</Button>{' '}
            </div>
            <div className='container-fluid mt-5' style={{backgroundColor:'#E7E9EB'}}>
                   <div className='row align-items-center'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                      <h4 className='text-center' style={{ fontFamily: "'Kanit', sans-serif"}}>Top Tutorials</h4>
                      <ul className='list-unstyled text-center'>
                        <li className='_links'>HTML tutorials</li>
                        <li className='_links'>CSS tutorials</li>
                        <li className='_links'>JavaScript tutorials</li>
                        <li className='_links'>Bootstrap tutorials</li>
                        <li className='_links'>PHP tutorials</li>
                        <li className='_links'>JAVA tutorials</li>
                        <li className='_links'>C++ tutorials</li>
                        <li className='_links'>JQuery tutorials</li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h4 className='text-center' style={{ fontFamily: "'Kanit', sans-serif"}}>Top References</h4>
                      <ul className='list-unstyled text-center'>
                        <li className='_links'>HTML References</li>
                        <li className='_links'>CSS References</li>
                        <li className='_links'>JavaScript References</li>
                        <li className='_links'>Bootstrap References</li>
                        <li className='_links'>PHP References</li>
                        <li className='_links'>JAVA References</li>
                        <li className='_links'>C++ References</li>
                        <li className='_links'>JQuery References</li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h4 className='text-center' style={{ fontFamily: "'Kanit', sans-serif"}}>Top Examples</h4>
                      <ul className='list-unstyled text-center'>
                        <li className='_links'>HTML Examples</li>
                        <li className='_links'>CSS Examples</li>
                        <li className='_links'>JavaScript Examples</li>
                        <li className='_links'>Bootstrap Examples</li>
                        <li className='_links'>PHP Examples</li>
                        <li className='_links'>JAVA Examples</li>
                        <li className='_links'>C++ Examples</li>
                        <li className='_links'>JQuery Examples</li>
                      </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                    <h4 className='text-center' style={{ fontFamily: "'Kanit', sans-serif"}}>Get Certified</h4>
                      <ul className='list-unstyled text-center'>
                        <li className='_links'>HTML Certificate</li>
                        <li className='_links'>CSS Certificate</li>
                        <li className='_links'>JavaScript Certificate</li>
                        <li className='_links'>Bootstrap Certificate</li>
                        <li className='_links'>PHP Certificate</li>
                        <li className='_links'>JAVA Certificate</li>
                        <li className='_links'>C++ Certificate</li>
                        <li className='_links'>JQuery Certificate</li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className='container-fluid text-center' style={{backgroundColor:'#E7E9EB'}}>
                <div className='container mt-5'>
                  <p style={{fontSize:'12px'}}>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.</p>
                  <p style={{fontSize:'12px'}}>Copyright 1999-2023 by Refsnes Data. All Rights Reserved.W3Schools is Powered by W3.CSS.</p>
                </div>
            </div>
          </footer>
    </div>
  );
};

export default Home;
