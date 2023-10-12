import Header from "../components/Header";
import Footer from "../components/Footer"; 

import hotel from "../assets/images/hotel.jpeg"; 
import resort from "../assets/images/resort.jpeg"; 
import bedandbreakfast from "../assets/images/bedandbreakfast.jpeg"; 
import hostel from "../assets/images/hostel.jpeg"; 

function Accommodations(){
    return (
        <div>
            <Header pageTitle="ACCOMMODATIONS" setBg="hero_img_general"/> 
            
            <div className="container">
                <div className="container text-center p-5">
                    <h1 className="mx-auto">WHERE TO STAY</h1>
                    <p className="mx-auto">
                        Taniti has a wide variety of lodging that ranges 
                        from an inexpensive hostel to one large, four-star resort. 
                        There are many small, family-owned hotels and a growing 
                        number of bed and breakfasts. All types of lodging are 
                        strictly regulated and regularly inspected by the Tanitian government.
                    </p>
                </div>

                <div className="container d-flex flex-column flex-lg-row gap-5 gap-lg-0 mb-5 justify-content-center">
                    <div className="container w-lg-25">
                        <div className="container mb-3">
                            <img src={hotel} alt="hotel" className="img-fluid"/>
                        </div>
                    
                        <div className="container">
                            <h2 className="mb-3">Hotel</h2>
                            <p>
                                Discover Taniti's charming hotels, where comfort 
                                meets affordability. Whether you seek a cozy 
                                boutique hotel or a larger, well-appointed 
                                establishment, our hotels cater to diverse 
                                preferences. Enjoy the warm hospitality and 
                                meticulous attention to detail that 
                                defines Tanitian accommodations. 
                            </p>
                        </div>
                    </div>
                    
                    <div className="container w-lg-25">
                        <div className="container mb-3">
                            <img src={resort} alt="resort" className="img-fluid"/>
                        </div>

                        <div className="container">
                            <h2 className="mb-3">Resort</h2>
                            <p>
                                Indulge in paradise at Taniti's exquisite 
                                resorts, where luxury meets natural beauty. 
                                Our four-star havens offer a harmonious blend 
                                of opulence and tropical splendor. Immerse 
                                yourself in lavish amenities, breathtaking 
                                landscapes, and unparalleled service 
                                for an unforgettable escape. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container d-flex flex-column flex-lg-row gap-5 gap-lg-0 mb-5 justify-content-center">
                    <div className="container w-lg-25">
                        <div className="container mb-3">
                            <img src={bedandbreakfast} alt="Bed and Breakfast" className="img-fluid"/>
                        </div>
                    
                        <div className="container">
                            <h2 className="mb-3">Bed and Breakfast</h2>
                            <p>
                                Experience the heart of Taniti at our 
                                welcoming bed and breakfasts. These family-owned 
                                gems provide a personal touch to your stay, 
                                offering cozy rooms, homemade breakfasts, 
                                and a warm, inviting atmosphere. Immerse 
                                yourself in the local culture and 
                                create lasting memories with our hospitable hosts.
                            </p>
                        </div>
                    </div>

                    <div className="container w-lg-25">
                        <div className="container mb-3">
                            <img src={hostel} alt="Hostel" className="img-fluid"/>
                        </div>
                        <div className="container">
                            <h2 className="mb-3">Hostel</h2>
                            <p>
                                For budget-conscious travelers, Taniti's hostels 
                                provide a comfortable and affordable option. 
                                Perfect for backpackers and adventurers, 
                                our hostels offer a communal spirit, 
                                shared accommodations, and a vibrant atmosphere. 
                                Rest assured, all hostels are closely monitored 
                                and adhere to strict safety standards 
                                set by the Tahitian government.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
             
            
            
            <Footer /> 
        </div>
    );
}

export default Accommodations; 