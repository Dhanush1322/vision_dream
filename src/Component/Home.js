import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import xImage from '../banner/x.jpg';
import Chenna from '../img/Chenna.png';
import Raghu from '../img/Raghu.jpg';
import Sasi from '../img/Sasi.png';
function Home() {
    return (
        <div>
            <Header />
            <Banner />
            {/* Who We Are Section */}
            <section className="row who_depts" style={{ padding: '0px 0' }}>
                <div className="container">
                    <div className="row">
                        {/* Who We Are Content */}
                        <div className="col-sm-12 col-md-8 who_weR" style={{width:'100%'}} >
                            <div className="row m0 titleRow text-left">
                                <h5 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0072a0' }}>Who We Are</h5>
                                <h2 style={{ fontSize: '38px', fontWeight: '700', color: '#333' }}>About  <span style={{textTransform: 'none',}}> GaloreTx®</span></h2>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <span>
                                        <img
                                            src={xImage}
                                            alt="About GaloreTx"
                                            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                                        />
                                    </span>
                                </div>
                                <div className="media-body">
                                    <p style={{ fontSize: '18px', fontWeight: '500', color: '#555', lineHeight: '1.6' }}>
                                       <span style={{textTransform: 'none',}}> GaloreTx®</span>, based in Bangalore, specializes in peptide and peptidomimetic synthesis and discovery services. The company excels in designing innovative solutions to transform peptides into orally bioavailable small molecules, advancing drug discovery and therapeutic development.        </p>
                                    <Link
                                        to="/BookanAppointment"
                                        className="view_all"
                                        style={{
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            backgroundColor: '#0072a0',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Book Appointment
                                    </Link>
                                </div>
                            </div>
                        </div>


                        {/* Our Departments Section */}
                        {/* <div className="col-sm-12 col-md-4 our_depts_list">
                            <div className="row m0 titleRow text-left">
                                <h5 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0072a0' }}>Variety of Services</h5>
                                <h2 style={{ fontSize: '38px', fontWeight: '700', color: '#333' }}>Our Departments</h2>
                            </div>
                            <ul className="list-unstyled depts_list" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> General Health Care</span></li>
                                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Rehabilitation Center</span></li>
                                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Cancer Care</span></li>
                                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Cardiac Clinic</span></li>
                                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Neurology</span></li>
                                <li><span style={{ color: '#333', fontWeight: '500' }}><i className="fa fa-arrow-right" style={{ color: '#0072a0' }}></i> Dental Care</span></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>
            {/*
            <section className="row service_tab">
    <div className="container">
        <div className="row titleRow">
            <h5>GET WELL SOON</h5>
            <h2>MEDICALPRO SERVICES</h2>
        </div>
        <div className="row">
            <ul className="nav nav-tabs nav-justified" role="tablist" id="service_tab">
                <li role="presentation" className="active">
                    <span></span> heart surgery
                </li>
                <li role="presentation">
                    <span></span> dna testing
                </li>
                <li role="presentation">
                    <span></span> gen treatment
                </li>
                <li role="presentation">
                    <span></span> emergency care
                </li>
                <li role="presentation">
                    <span></span> ear treatment
                </li>
                <li role="presentation">
                    <span></span> dental care
                </li>
            </ul>

            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="heart_surgery">
                    <div className="col-sm-6">
                        <div className="row m0">
                            <img src="images/pages/service/tab.png" alt="" className="img-responsive" />
                            <div className="ts">trusted services</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row m0">
                            <h3>HEART SURGERY</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit sque quis varius raesent lacinia elit nec nisl.</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                            <p><strong>Read more:</strong> <a href="single-service.html">single-service.html</a></p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="dna_testing">
                    <div className="col-sm-6">
                        <div className="row m0">
                            <img src="images/pages/service/tab.png" alt="" className="img-responsive" />
                            <div className="ts">trusted services</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row m0">
                            <h3>Dna Testing</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit sque quis varius raesent lacinia elit nec nisl.</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                            <p><strong>Read more:</strong> <a href="single-service.html">single-service.html</a></p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="gen_treatment">
                    <div className="col-sm-6">
                        <div className="row m0">
                            <img src="images/pages/service/tab.png" alt="" className="img-responsive" />
                            <div className="ts">trusted services</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row m0">
                            <h3>General Treatment</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit sque quis varius raesent lacinia elit nec nisl.</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                            <p><strong>Read more:</strong> <a href="single-service.html">single-service.html</a></p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="emergency_care">
                    <div className="col-sm-6">
                        <div className="row m0">
                            <img src="images/pages/service/tab.png" alt="" className="img-responsive" />
                            <div className="ts">trusted services</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row m0">
                            <h3>Emergency Care</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit sque quis varius raesent lacinia elit nec nisl.</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                            <p><strong>Read more:</strong> <a href="single-service.html">single-service.html</a></p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="ear_treatment">
                    <div className="col-sm-6">
                        <div className="row m0">
                            <img src="images/pages/service/tab.png" alt="" className="img-responsive" />
                            <div className="ts">trusted services</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row m0">
                            <h3>Ear Treatment</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit sque quis varius raesent lacinia elit nec nisl.</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                            <p><strong>Read more:</strong> <a href="single-service.html">single-service.html</a></p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="dental_care">
                    <div className="col-sm-6">
                        <div className="row m0">
                            <img src="images/pages/service/tab.png" alt="" className="img-responsive" />
                            <div className="ts">trusted services</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row m0">
                            <h3>Dental Care</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit sque quis varius raesent lacinia elit nec nisl.</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                            <p><strong>Read more:</strong> <a href="single-service.html">single-service.html</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</section>*/}


            <section className="row team_section_type2 bgf">
                <div className="container">
                    <div className="row m0 titleRow text-left">
                        <h2>Founders</h2>
                    </div>
                    <div className="row dorctors_row">
                        <div className="col-sm-6 col-md-4 team_member">
                            <div className="row m0 inner">
                                <Link to="#">
                                    <div className="row m0 image">
                                        <img
                                            src={Sasi}
                                            alt=""
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="row m0 title_row">
                                        <h5>Sasikumar PG, Ph.D.</h5>
                                    </div>
                                </Link>
                                <p>
                                    20 Years of experience in peptide drug discovery and development. Co-Inventor of several drugs in cancer immunotherapy, most advanced drug currently in Phase 2b/3 clinical trials.
                                </p>
                                <ul className="social_list">
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-google-plus" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 team_member">
                            <div className="row m0 inner">
                                <Link to="#">
                                    <div className="row m0 image">
                                        <img
                                            src={Chenna}
                                            alt=""
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="row m0 title_row">
                                        <h5>Chennakrishnareddy Gundala, Ph.D.</h5>
                                    </div>
                                </Link>
                                <p>
                                    14 years experience in Pharma industry in peptide chemistry and peptide therapeutics. Experience in peptide route optimization and scale up. Co-inventor of multiple patents, most advanced drug in Phase 1 Clinical Trial.
                                </p>
                                <ul className="social_list">
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-google-plus" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 team_member">
                            <div className="row m0 inner">
                                <Link to="#">
                                    <div className="row m0 image">
                                        <img
                                            src={Raghu}
                                            alt=""
                                            className="img-responsive"
                                            style={{ width: '400px' }}
                                        />
                                    </div>
                                    <div className="row m0 title_row">
                                        <h5>Raghuveer Ramachandra, Ph.D.</h5>
                                    </div>
                                </Link>
                                <p>
                                    Pharmacologist, with 14 years experience in drug discovery. Extensive experience in developing and optimizing screening funnels for drug discovery programs including in vitro, DMPK and in vivo model systems. Several drugs are in his credits which are in various phases of clinical development.
                                </p>
                                <ul className="social_list">
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fa fa-google-plus" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row team_section">
                <div className="container">
                    <div className="row m0 titleRow text-center">
                        <h5>Meet Our Team</h5>
                        <h2>Experts in Peptide Chemistry</h2>
                    </div>
                    <div className="row team_content">
                        <ul className="team_list">
                            <li>
                                <i className="fa fa-check-circle"></i> Team with a blend of peptide and organic chemists
                            </li>
                            <li>
                                <i className="fa fa-check-circle"></i> Synthetic expertise in peptides, peptidomimetics and peptide conjugates with small molecules
                            </li>
                            <li>
                                <i className="fa fa-check-circle"></i> Executed projects of varying complexity using both solution and solid-phase chemistry
                            </li>
                            <li>
                                <i className="fa fa-check-circle"></i> Team has knowledge of driving programs from hit to IND/IMPD
                            </li>
                            <li>
                                <i className="fa fa-check-circle"></i> CMC activities to execute both peptide and peptidomimetic programs
                            </li>
                            <li>
                                <i className="fa fa-check-circle"></i> Process development can be tailored to customers’ needs in a cost-effective manner
                            </li>
                            <li>
                                <i className="fa fa-check-circle"></i> Operational flexibility and highly adaptable to project requirements
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="row recent_post_home2">
                <div className="container">
                    <div className="row titleRow">
                        <h5>What People Say</h5>
                        <h2>Our Testimonials</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 recent_post">
                            <div className="row m0 inner">
                                <div className="postText row m0">
                                    Etiam tristique sagittis pulvinar. Cras scelerisque dui ut, bibendum ante. dit neque eget lobortis. Nam eleifend sollicitudin nulla quis Interdum et malesuada fames.
                                </div>
                                <div className="media authorMeta">
                                    <div className="media-left"><img src="images/pages/doctors/1.png" alt="" /></div>
                                    <div className="media-body media-middle">
                                        <h5>Johnathan doe</h5>
                                        <div className="row designation">www.themedesigner.in</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 recent_post">
                            <div className="row m0 inner">
                                <div className="postText row m0">
                                    Etiam tristique sagittis pulvinar. Cras scelerisque dui ut, bibendum ante. dit neque eget lobortis. Nam eleifend sollicitudin nulla quis Interdum et malesuada fames.
                                </div>
                                <div className="media authorMeta">
                                    <div className="media-left"><img src="images/pages/doctors/1.png" alt="" /></div>
                                    <div className="media-body media-middle">
                                        <h5>Angelina johnson</h5>
                                        <div className="row designation">www.themeforest.net</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 recent_post">
                            <div className="row m0 inner">
                                <div className="postText row m0">
                                    Etiam tristique sagittis pulvinar. Cras scelerisque dui ut, bibendum ante. dit neque eget lobortis. Nam eleifend sollicitudin nulla quis Interdum et malesuada fames.
                                </div>
                                <div className="media authorMeta">
                                    <div className="media-left"><img src="images/pages/doctors/1.png" alt="" /></div>
                                    <div className="media-body media-middle">
                                        <h5>bekka adkins</h5>
                                        <div className="row designation">www.themedesigner.in</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home