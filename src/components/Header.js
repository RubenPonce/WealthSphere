export const Header = () => {
    return (
<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="/">WealthSphere</a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="#features">
                Features
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                Testimonials
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#pricing">
                Pricing
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</header>
    )
}
