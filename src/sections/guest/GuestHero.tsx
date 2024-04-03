import { CSSProperties, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function GuestHero() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      function handleScroll() {
         const scrollPosition = window.scrollY;
         const imageHeight = document.getElementById('main-image')?.offsetHeight || 0;
         setIsScrolled(scrollPosition > imageHeight);
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const fullBgStyle = {
      background: 'url(../images/banner2.jpg)',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
  };

  const headerStyle: CSSProperties = {
      width: '100%',
      height: '90px',
      padding: '29px 20px',
      position: 'fixed',
      zIndex: '99999999999',
      top: '0',
      
      background: isScrolled ? '#f0f0f0' : 'transparent'
   };

   const containerStyle = {
      maxWidth: '1170px'
  };

  return (
    <body className="main-layout">
      <header style={fullBgStyle}>
         <div style={headerStyle}>
            <div style={containerStyle} className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <a href="index.html">Luiza&Italo</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <a className="nav-link" href="index.html">Home</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="about.html">About</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="service.html">Service</a>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/shop" 
                                  className="pix" 
                                  onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                                  onMouseLeave={(e) => (e.currentTarget.style.background = '#f0f0f0')}
                                > 
                                 <a className="nav-link" href="#">Lista de Presentes</a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#titlepage">Confirme Presença</a>
                              </li>
                           </ul>
                        </div>
                        <ul className="search">
                           <li><a href="Javascript:void(0)"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <section className="banner_main">
            <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="carousel-caption  banner_po">
                           <div className="row">
                              <div className="col-lg-8 col-md-9 ">
                                 <div className="build_box">
                                    <h1>Lista de <span className="orang"> Presentes</span></h1>
                                    <p style={{color: 'black'}}>Receber presentes da nossa lista de casamento enche nosso coração de alegria e gratidão. 
                                      Cada item escolhido com carinho por amigos e familiares representa não apenas um objeto,
                                       mas também o amor e os votos de felicidade para o nosso novo lar. Abrir cada presente é um momento especial, 
                                       pois sabemos que esses itens serão parte integrante da nossa vida juntos.</p>
                                       <Link
                                        to="/shop" 
                                        className="pix" 
                                        onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = '#f0f0f0')}
                                      >  
                                        <a className="read_more quote_btn" href="Javascript:void(0)" role="button">Lista de Presentes</a>
                                      </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="carousel-caption banner_po">
                           <div className="row">
                              <div className="col-lg-8 col-md-9 ">
                                 <div className="build_box">
                                    <h1>Confirme <span className="orang"> Presença</span></h1>
                                    <p>Receber presentes da nossa lista de casamento enche nosso coração de alegria e gratidão. 
                                      Cada item escolhido com carinho por amigos e familiares representa não apenas um objeto,
                                       mas também o amor e os votos de felicidade para o nosso novo lar. Abrir cada presente é um momento especial, 
                                       pois sabemos que esses itens serão parte integrante da nossa vida juntos.</p>
                                    <a className="read_more quote_btn" href="Javascript:void(0)" role="button">Confirmar Presença</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="carousel-caption banner_po">
                           <div className="row">
                              <div className="col-lg-8 col-md-9 ">
                                 <div className="build_box">
                                    <h1>Visualizar <span className="orang"> Endereço</span></h1>
                                    <p>Lossssrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <a className="read_more quote_btn" href="Javascript:void(0)" role="button">Visualize endereço</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
               <i className="fa fa-angle-left" aria-hidden="true"></i>
               <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
               <i className="fa fa-angle-right" aria-hidden="true"></i>
               <span className="sr-only">Next</span>
               </a>
            </div>
         </section>
      </header>
      <div className="plane">
         <div id="main-image" className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage">
                     <h2>Our Plane</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="plan_bax text_align_center">
                     <figure><img src="images/plan_img.jpg" alt="#"/></figure>
                     <div  id="ho_plan" className="plan_text">
                        <h3>FLOWER DECORATIONS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </p>
                        <a className="read_more" href="Javascript:void(0)">Read More</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="plan_bax text_align_center">
                     <figure><img src="images/plan_img1.jpg" alt="#"/></figure>
                     <div  id="ho_plan" className="plan_text">
                        <h3>BEST RESTAURANT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </p>
                        <a className="read_more" href="Javascript:void(0)">Read More</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="plan_bax text_align_center">
                     <figure><img src="images/plan_img2.jpg" alt="#"/></figure>
                     <div  id="ho_plan" className="plan_text">
                        <h3>HONEYMOON</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </p>
                        <a className="read_more" href="Javascript:void(0)">Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="groomsmen">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage">
                     <h2>Bridesmaids And Groomsmen</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="brid text_align_center">
                     <figure><img src="images/ber_img.jpg" alt="#"/></figure>
                     <h3> Voluptate </h3>
                  </div>
               </div>
               <div className="col-md-4 margin_top70">
                  <div className="brid text_align_center">
                     <figure><img src="images/ber_img1.jpg" alt="#"/></figure>
                     <h3> Voluptate </h3>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="brid text_align_center">
                     <figure><img src="images/ber_img2.jpg" alt="#"/></figure>
                     <h3> Voluptate </h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="about">
         <div className="container ">
            <div className="row d_flex">
               <div className="col-md-5">
                  <div className="titlepage">
                     <h2>About Our Company</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                     <a className="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <figure><img src="images/about.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="blog">
         <div className="container ">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>FROM THE BLOG</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-sm-12">
                  <div className="blog_bg margin_bottom30">
                     <div className="row d_flex">
                        <div className="col-md-6">
                           <div className="blog_img">
                              <figure><img src="images/blog_img1.jpg" alt="#"/></figure>
                              <span>06 Feb</span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="marriage_text">
                              <span>Post by : Marriage </span>
                              <h3>Tempor incididunt ut labore et dolore</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                              <h4><strong>Like</strong> <strong className="padd_right">Comment</strong></h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-12">
                  <div className="blog_bg">
                     <div className="row d_flex">
                        <div className="col-md-6">
                           <div className="blog_img">
                              <figure><img src="images/blog_img2.jpg" alt="#"/></figure>
                              <span>06 Feb</span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="marriage_text">
                              <span>Post by : Marriage </span>
                              <h3>Tempor incididunt ut labore et dolore</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                              <h4><strong>Like</strong> <strong className="padd_right">Comment</strong></h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="says">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>What Is Says Our GROOMS</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div id="proj" className="carousel slide says_ban" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#proj" data-slide-to="0" className="active"></li>
                        <li data-target="#proj" data-slide-to="1"></li>
                        <li data-target="#proj" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption relative3">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="readert">
                                          <div className="readert_img text_align_center">
                                             <figure><img src="images/saya.png" alt="#"/></figure>
                                          </div>
                                          <div className="readert_text">
                                             <h3>Jacksmith sand</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative3">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="readert">
                                          <div className="readert_img text_align_center">
                                             <figure><img src="images/saya.png" alt="#"/></figure>
                                          </div>
                                          <div className="readert_text">
                                             <h3>Jacksmith sand</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative3">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="readert">
                                          <div className="readert_img text_align_center">
                                             <figure><img src="images/saya.png" alt="#"/></figure>
                                          </div>
                                          <div className="readert_text">
                                             <h3>Jacksmith sand</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#proj" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#proj" role="button" data-slide="next">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="ru_bg">
                     <div className="row">
                        <div className="col-md-3">
                          <a href="#"> <h1>Luiza&Italo</h1></a>
                        </div>
                        <div className="col-md-9">
                           <ul className="lacation">
                              <li><i className="fa fa-map-marker" aria-hidden="true"></i> Av. Presidente Costa e Silva, 3601 - Mondubim, Fortaleza - CE, 60761-191 </li>
                              <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i> G(+085) 996361678</li>
                              <li><i className="fa fa-envelope" aria-hidden="true"></i> italo_barboza@hotmail.com</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="col-md-12">
                     <div id="titlepage">
                        <h2>Confirmar Presença</h2>
                     </div>
                  </div>
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone number" type="type" name="Phone number"/>                           
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message"></textarea>
                        </div>
                        <div className="col-md-6 col-sm-6">
                           <button className="send_btn">Confirmar</button>
                        </div>
                        <div className="col-md-6 col-sm-6">
                           <ul className="social_icon">
                              <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="Javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="Javascript:void(0)"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                              <li><a href="Javascript:void(0)"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-6">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Casa+Montenegro+Fortaleza+Cear" width="600" height="378"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <footer>
         <div className="footer">
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-8 offset-md-2">
                        <p>© All Rights Reserved. <a href="https://html.design/"> Italo Barboza</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
   </body>
  );
}
