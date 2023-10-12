function Header({pageTitle, setBg}){
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid"> 
                    <a className="navbar-brand" href="/">TANITI</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/about">About</a>
                            <a className="nav-link" href="/Accomodations">Accomodations</a>
                            <a className="nav-link" href="/activities">Activities</a>
                            <a className="nav-link" href="/transportation">Transportation</a>
                            <a className="nav-link pe-0" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id={setBg} className="d-flex flex-column justify-content-center align-items-center text-light fw-bold hero_style">
                <h2 className="display-1 fw-semibold">{pageTitle}</h2>
                {setBg === "hero_img_home" && <a href="/activities" className="btn btn-primary">Learn More</a>}
            </div>
        </header>
    );
}

export default Header; 