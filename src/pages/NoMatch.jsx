import Header from "../components/Header";
import Footer from "../components/Footer";

function NoMatch() {
    return (
      <div>
        <Header pageTitle="404" setBg="hero_img_general"/>
        <div className="text-center p-5">
          <h2 className="mb-4">404: Page Not Found</h2>
          <a href="/" className="btn btn-secondary">Back</a>
        </div>
        <Footer /> 
      </div>
    );
}

export default NoMatch; 