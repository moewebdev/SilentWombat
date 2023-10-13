import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/images/zunnoon-ahmed-06Fc_R9hA8w-unsplash.jpg"
function About(){
    return (
        <div>
            <Header pageTitle="EXPERIENCE TROPICAL PARADISE" setBg="hero_img_home"/> 
            <section className="d-lg-flex align-items-center">
                <div className="container w-100 w-lg-50 p-5 order-2 order-lg-2">
                    <h1 id="about" className="mb-3">EXPERIENCE TANITI</h1>
                    <p>
                        Nestled in the heart of the Pacific lies Taniti, a
                        small tropical island. Despite its compact size of under 
                        500 square miles, the island has a great blend
                        of natural attractions. It boasts sandy shored and craggy coastlines, 
                        a secure harbor, tropical rainforests, mountains, and a small 
                        valcano. Taniti plays host to an indigenous community numbering 
                        around 20,000 people. Historically, the island's economic pulse 
                        beat to the rhythm of fishing and agriculture, but recent surges in 
                        tourism have begun to redefine its financial landscape. 
                    </p>
                </div>
                <div className="w-100 w-lg-50 order-1 order-lg-1">
                    <img src={img} alt="" className="img-fluid" style={{"minHeight" : "720px"}}/> 
                </div>
            </section>
            <Footer /> 
        </div>
    );
}

export default About; 