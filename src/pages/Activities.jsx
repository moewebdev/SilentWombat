import Header from "../components/Header";
import Footer from "../components/Footer";

import fishing from "../assets/images/fishing.jpeg";
import snorkeling from "../assets/images/snorkeling.jpeg"; 
import zipline from "../assets/images/zipline.jpeg"; 
import helicopter from "../assets/images/helicopter.jpeg"; 
import golf from "../assets/images/golf.jpeg"; 

function Activities(){
    return (
        <div>
            <Header pageTitle="ACTIVITIES" setBg="hero_img_general"/>
                <div className="container">
                    <div className="conatiner text-center p-5">
                        <h1 className="mx-auto">ACTIVITIES</h1>
                        <p className="mx-auto">
                            Most people visit Taniti to enjoy the beaches, 
                            explore the rainforest, and to visit the volcano. 
                            However, there are other things to do, including 
                            going on chartered fishing tours, snorkeling, 
                            zip-lining in the rainforest, taking helicopter 
                            rides, and playing golf! No matter what your 
                            interest is, we are confident that you will
                            find something fun to do during your visit to Taniti! 
                        </p>
                    </div>
                    
                    <section className="container d-flex flex-column flex-lg-row mb-5 gap-3 justify-content-center align-items-center">
                        <div className="container">
                            <img src={fishing} alt="fishing" className="img-fluid rounded"/>
                        </div>
                        <div className="container">
                            <h2 className="mb-3">Fishing Tours</h2>
                            <p>
                                Embark on an unforgettable fishing adventure 
                                in Taniti's pristine waters. Join experienced 
                                local guides to reel in exotic catches while surrounded 
                                by breathtaking ocean vistas. Whether you're a novice 
                                angler or a seasoned pro, our fishing tours will provide
                                an experience to remember!
                            </p>
                            <a href="https://www.tripshock.com/" className="btn btn-primary">Book Now</a>
                        </div>
                    </section>
                        
                    <section className="container d-flex flex-column flex-lg-row mb-5 gap-3 justify-content-center align-items-center">
                        <div className="container order-lg-2">
                            <img src={snorkeling} alt="snorkeling" className="img-fluid rounded"/>
                        </div> 
                        <div className="container order-lg-1">
                            <h2 className="mb-3">Snorkeling</h2>
                            <p>
                                Dive into Taniti's crystal-clear waters and 
                                discover a vibrant underwater world teeming 
                                with colorful coral reefs and exotic marine life!
                            </p>
                            <a href="https://www.tripshock.com/" className="btn btn-primary">Book Now</a>
                        </div>
                    </section>

                    <section className="container d-flex flex-column flex-lg-row mb-5 gap-3 justify-content-center align-items-center">
                        <div className="container">
                            <img src={zipline} alt="snorkeling" className="img-fluid rounded"/>
                        </div> 
                        <div className="container">
                            <h2 className="mb-3">Zip-lining</h2>
                            <p>
                                Elevate your senses as you soar through Taniti's 
                                lush rainforests on an exhilarating zip-lining adventure. 
                                Feel the rush of adrenaline as you glide high above the treetops, 
                                enjoying panoramic views of the island's stunning landscape. 
                            </p>
                            <a href="https://www.tripshock.com/" className="btn btn-primary">Book Now</a>
                        </div>
                    </section>
                    
                    <section className="container d-flex flex-column flex-lg-row mb-5 gap-3 justify-content-center align-items-center">
                        <div className="container order-lg-2">
                            <img src={helicopter} alt="helicopter rides" className="img-fluid rounded"/>
                        </div> 
                        <div className="container order-lg-1">
                            <h2 className="mb-3">Helicopter rides</h2>
                            <p>
                                Take your Taniti experience to new heights with a breathtaking 
                                helicopter ride. Get a bird's-eye view of the island's diverse terrain, 
                                from pristine beaches and dense rainforests to majestic mountains 
                                and volcanic craters. Our helicopter tours offer a unique perspective 
                                on Taniti's natural wonders, making it a must-do for sightseeing enthusiasts.
                            </p>
                            <a href="https://www.tripshock.com/" className="btn btn-primary">Book Now</a>
                        </div>
                    </section>

                    <section className="container d-flex flex-column flex-lg-row mb-5 gap-3 justify-content-center align-items-center">
                        <div className="container order-lg-1">
                            <img src={golf} alt="golf" className="img-fluid rounded"/>
                        </div> 
                        <div className="container order-lg-2">
                            <h2 className="mb-3">Golf</h2>
                            <p>
                                Tee off in paradise at Taniti's world-class golf courses. 
                                Enjoy a leisurely round of golf surrounded by stunning 
                                coastal views and tropical greenery. Whether you're a 
                                golf aficionado or a casual player, our courses offer the 
                                perfect blend of challenge and relaxation in an idyllic setting.
                            </p>
                            <a href="https://www.tripshock.com/" className="btn btn-primary">Book Now</a>
                        </div>
                    </section>
                </div>

            <Footer /> 
        </div>
    );
}

export default Activities; 