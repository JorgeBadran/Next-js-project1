import Link from 'next/link'


const Navigation = () => {
    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link href="/">
            <h3 className="navbar-brand">Home</h3>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                        <Link href="/about">
                            <h3 className="navbar-brand">About</h3>
                        </Link>
                    <li className="nav-item">
                        <Link href="/services" >
                            <h3 className="navbar-brand">Services</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}


export default Navigation;