import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact(){
    return (
        <div>
            <Header pageTitle="CONTACT" setBg="hero_img_general"/>  
            <div className="d-flex flex-column align-items-center p-5">
                <div className="w-50 text-center mb-5">
                    <h1>CONTACT US</h1>
                    <p>
                        Have questions about the island or would like more information
                        for fun things to do while you are here? Send us a message and
                        our team would be happy to assist you!
                    </p>
                </div>
                
                <form className="w-50">
                    <div className="mb-4">
                        <label htmlFor="fname" className="form-label fw-semibold fs-4">First Name</label>
                        <input type="text" id="fname" className="form-control" placeholder="first name" />
                    </div>
                        
                    <div className="mb-4">
                        <label htmlFor="lname" className="form-label fw-semibold fs-4">Last Name</label>
                        <input type="text" id="lname" className="form-control" placeholder="last name:" /> 
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="user_phone" className="form-label fw-semibold fs-4">Phone Number</label>
                        <input type="phone" id="user_phone" className="form-control" placeholder="Phone Number" /> 
                    </div>

                    <div className="mb-4">
                        <label htmlFor="user_email" className="form-label fw-semibold fs-4">Email</label>
                        <input type="email" id="user_email" className="form-control" placeholder="Email" /> 
                    </div>

                    <div className="mb-5"> 
                        <label htmlFor="user_message" className="form-label fw-semibold fs-4">Message</label>
                        <textarea id="user_message" className="form-control"></textarea>
                    </div>

                    <button className="btn btn-primary mb-4">Submit</button>
                </form>
            </div>
            
            <Footer />
        </div>
    );
}

export default Contact; 