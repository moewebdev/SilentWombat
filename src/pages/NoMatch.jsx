import Header from "../components/Header";
import Footer from "../components/Footer";

function NoMatch() {
    return (
      <div>
        <Header pageTitle="404" setBg="hero_img_general"/>
        <h2>404: Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        <Footer /> 
      </div>
    );
}

export default NoMatch; 