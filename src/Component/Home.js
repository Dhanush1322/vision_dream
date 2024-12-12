import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <section className="row service_tab">
                <div className="container">
                    <div className="row titleRow">
                        <h5>GET WELL SOON</h5>
                        <h2>MEDICALPRO SERVICES</h2>
                    </div>
                    <div className="row">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs nav-justified" role="tablist" id="service_tab">
                            <li role="presentation" className="active">
                                <a href="#heart_surgery" aria-controls="heart_surgery" role="tab" data-toggle="tab">
                                    <span></span>heart surgery
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#dna_testing" aria-controls="dna_testing" role="tab" data-toggle="tab">
                                    <span></span>dna testing
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#gen_treatment" aria-controls="gen_treatment" role="tab" data-toggle="tab">
                                    <span></span>gen treatment
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#emergency_care" aria-controls="emergency_care" role="tab" data-toggle="tab">
                                    <span></span>emergency care
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#ear_treatment" aria-controls="ear_treatment" role="tab" data-toggle="tab">
                                    <span></span>ear treatment
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#dental_care" aria-controls="dental_care" role="tab" data-toggle="tab">
                                    <span></span>dental care
                                </a>
                            </li>
                        </ul>

                        {/* Tab panes */}
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
                                        <a href="single-service.html" className="view_all">read more</a>
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
                                        <a href="single-service.html" className="view_all">read more</a>
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
                                        <a href="single-service.html" className="view_all">read more</a>
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
                                        <a href="single-service.html" className="view_all">read more</a>
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
                                        <a href="single-service.html" className="view_all">read more</a>
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
                                        <a href="single-service.html" className="view_all">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row recentpost_acc contentRowPad">
                <div className="container">
                    <div className="row m0 titleRow">
                        <h5>recent posts</h5>
                        <h2>from our blog</h2>
                    </div>
                    <div className="row recent_post_home recent_post_home3">
                        <div className="col-sm-12 col-md-6">
                            <div className="media">
                                <div className="media-left">
                                    <a href="single-post.html"><img src="images/blog/1.jpg" alt="" className="img-reponsive" /></a>
                                </div>
                                <div className="media-body">
                                    <a href="single-post.html"><h4>We are having new department added to us</h4></a>
                                    <div className="row m0 meta">By : <a href="#">John Doe</a> &nbsp; on : <a href="#">29th June 2015</a></div>
                                    <p>Lorem ipsum dolor sit amet, conseings ctetur adipiscing elit. </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="single-post.html"><img src="images/blog/1.jpg" alt="" className="img-reponsive" /></a>
                                </div>
                                <div className="media-body">
                                    <a href="single-post.html"><h4>We are having new department added to us</h4></a>
                                    <div className="row m0 meta">By : <a href="#">John Doe</a> &nbsp; on : <a href="#">29th June 2015</a></div>
                                    <p>Lorem ipsum dolor sit amet, conseings ctetur adipiscing elit. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="media">
                                <div className="media-left">
                                    <a href="single-post.html"><img src="images/blog/1.jpg" alt="" className="img-reponsive" /></a>
                                </div>
                                <div className="media-body">
                                    <a href="single-post.html"><h4>We are having new department added to us</h4></a>
                                    <div className="row m0 meta">By : <a href="#">John Doe</a> &nbsp; on : <a href="#">29th June 2015</a></div>
                                    <p>Lorem ipsum dolor sit amet, conseings ctetur adipiscing elit. </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="single-post.html"><img src="images/blog/1.jpg" alt="" className="img-reponsive" /></a>
                                </div>
                                <div className="media-body">
                                    <a href="single-post.html"><h4>We are having new department added to us</h4></a>
                                    <div className="row m0 meta">By : <a href="#">John Doe</a> &nbsp; on : <a href="#">29th June 2015</a></div>
                                    <p>Lorem ipsum dolor sit amet, conseings ctetur adipiscing elit. </p>
                                </div>
                            </div>
                        </div>
                        <a href="blog.html" className="view_all">view all posts</a>
                    </div>
                </div>
            </section>
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
            <section className="row book_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-9">
                            <div className="row m0">
                                <h3 className="bannerTitle">ONLINE HASSLE FREE Appointment BOOKING</h3>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia, ipsum eu vulputate pulvinar,</h5>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3">
                            <div className="row m0">
                                <a href="#" data-toggle="modal" data-target="#appointmefnt_form_pop" className="view_all">book your appointment</a>
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