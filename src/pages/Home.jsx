import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/images/zunnoon-ahmed-06Fc_R9hA8w-unsplash.jpg"
function About(){
    return (
        <div>
            <Header pageTitle="EXPERIENCE TROPICAL PARADISE" setBg="hero_img_home"/> 
            <section className="d-flex align-items-center">
                <div className="w-50 p-5 order-2">
                    <h1 className="mb-3">EXPERIENCE TANITI</h1>
                    <p>
                        Nestled in the heart of the Pacific lies Taniti, a
                        petite tropical island. Despite its compact size of under 
                        500 square miles, the landscape boasts a delightful blend
                        of elements. It boasts sandy shored and craggy coastlines, 
                        a snug yet secure harbor, luxuriant tropical rainforests, 
                        and an interior marked by towering peaks, including a petite yet
                        lively valcano. Taniti plays host to an indigenous community numbering 
                        around 20,000 souls.Historically, the island's economic pulse 
                        beat to the rhythm of fishing and agriculture, but recent surges in 
                        tourism have begub to redefine its financial landscape. 
                    </p>
                </div>
                <div className="w-50 order-1">
                    <img src={img} alt="" className="img-fluid" style={{"minHeight" : "720px"}}/> 
                </div>
            </section>
            <Footer /> 
        </div>
    );
}

export default About; 