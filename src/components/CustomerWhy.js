import why from '../assets/why.png';
export const CustomerWhy = () => {
    return (
        <div className="customer-why-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 why-explanation">
                        <h2>Why WealthSphere?</h2>
                        <p className="lead">
                            We are a team of financial experts who have come together to provide you with the best personal finance solution on the market. We understand the importance of managing your finances and we are here to help you every step of the way.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={why} alt="Why WealthSphere?" className='why-img' />
                    </div>
                </div>
            </div>
        </div>
    );
}