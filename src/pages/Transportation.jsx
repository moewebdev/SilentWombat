import Header from "../components/Header";
import Footer from "../components/Footer";

import airplane from "../assets/images/airplane.jpeg";
import taxi from "../assets/images/taxi.jpeg"; 

function Transportation(){
    return (
        <div>
            <Header pageTitle="TRANSPORTATION" setBg="hero_img_general" className="h-50"/> 
                <div className="container">
                    <div className="container text-center p-5">
                        <h1 className="mx-auto">TRANSPORTATION</h1>
                        <p className="mx-auto">
                            Traveling to and navigating Taniti is a breeze! Whether you opt for a 
                            flight or a cruise ship, the island can accommodate your chosen mode of 
                            transportation. Upon arrival, you'll discover a convenient selection of
                            rental cars, readily available taxis, and bikes, all ready to make 
                            exploring the island effortlessly enjoyable!
                        </p>
                    </div>

                    <section className="container d-flex flex-column flex-lg-row mb-5 gap-3">
                        <div className="container w-lg-50">
                            <img src={airplane} alt="airplane" className="img-fluid rounded"/>
                        </div>
                        <div className="container w-lg-50 d-lg-flex flex-lg-column justify-content-center">
                            <h2 className="mb-3">GETTING HERE</h2>
                            <p>
                                Almost all visitors arrive to Taniti by air, 
                                though some arrive on a small cruise ship that 
                                docks in Yellow Leaf Bay for one night per week. 
                                Taniti is served by a small airport that can 
                                accommodate small jets and propeller planes. 
                                Taniti is in the process of expanding the 
                                airport so larger jets will be able 
                                to land on the island within the next few years.      
                            </p>
                            <a href="https://www.kayak.com/" className="btn btn-primary w-25">Book Now</a>
                        </div> 
                        
                    </section>

                    <section className="container d-flex flex-column flex-lg-row mb-5 gap-3 gap-lg-5">
                        
                        <div className="cotainer w-lg-50 order-lg-2">
                            <img src={taxi} alt="taxi" className="img-fluid rounded"/> 
                        </div>
                        <div className="container w-lg-50 order-lg-1 d-lg-flex flex-lg-column justify-content-center">
                            <h2 className="mb-3">GETTING AROUND THE ISLAND</h2>
                            <p>
                                Public buses serve Taniti City and run from 
                                5 a.m. to 11 p.m. every day. Private buses serve 
                                the rest of the island. Taxis are available in 
                                Taniti City, and rental cars can be rented from 
                                a local rental agency near the airport. Bikes and 
                                helmets are available to rent from several vendors 
                                (helmets are required by law). Taniti City is fairly 
                                flat and very walkable. Many tourists stay in the area 
                                surrounding Merriton Landing: this area is easy to explore on foot.
                            </p>
                            <a href="https://www.hertz.com/rentacar/reservation/" className="btn btn-primary w-25">Book Now</a>
                        </div>
                        
                    </section>
                </div>
                
            
            <Footer /> 
        </div>
    );
}

export default Transportation; 