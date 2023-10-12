import Header from "../components/Header";
import Footer from "../components/Footer";

import airplane from "../assets/images/airplane.jpeg";
import taxi from "../assets/images/taxi.jpeg"; 

function Transportation(){
    return (
        <div>
            <Header pageTitle="TRANSPORTATION" setBg="hero_img_general" className="h-50"/> 
                <div className="p-5">
                    <div className="text-center mb-5">
                        <h1 className="w-50 mx-auto">TRANSPORTATION</h1>
                        <p className="w-50 mx-auto">
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

                    <section className="d-flex mb-5 gap-5  align-items-center">
                    
                        <div className="w-50">
                            <img src={airplane} alt="airplane" className="img-fluid"/>
                        </div>
                        <div className="w-50">
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
                        </div>
                       
                    </section>

                    <section className="d-flex mb-5 gap-5 align-items-center">
                        
                        <div className="w-50 order-2">
                            <img src={taxi} alt="taxi" className="img-fluid"/> 
                        </div>
                        <div className="w-50 order-1">
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
                        </div>
                        
                    </section>
                </div>
                
            
            <Footer /> 
        </div>
    );
}

export default Transportation; 