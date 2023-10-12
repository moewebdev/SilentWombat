import Header from "../components/Header";
import Footer from "../components/Footer"; 

function Home(){
    return (
        <div>
            <Header /> 
            <div id="jumbotron" className="bg-body-secondary vh-100" >
                <div className="d-flex flex-column align-items-center" style={{"border": "1px solid red"}}>
                    <p className="display-1">Experience tropical paradise!</p>
                    <a href="/about" className="btn btn-primary">Learn more</a>
                </div>
            </div>
            <Footer /> 
        </div>
    );
}

export default Home; 