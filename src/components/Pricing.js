export const Pricing = () => {
    return (
        <div className="pricing-section py-5" id="pricing">
            <div className="container new-section">
                <h2 className="text-center">Pricing</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>Basic</h3>
                            </div>
                            <div className="card-body">
                                <h2>$9.99</h2>
                                <p>per month</p>
                                <ul>
                                    <li>Personal Budgeting</li>
                                    <li>Expense Tracking</li>
                                    <li>Custom Categories</li>
                                    <li>Support</li>
                                </ul>
                                <button className="btn btn-primary">Create Your Account</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>Pro</h3>
                            </div>
                            <div className="card-body">
                                <h2>$19.99</h2>
                                <p>per month</p>
                                <ul>
                                    <li>Personal Budgeting</li>
                                    <li>Expense Tracking</li>
                                    <li>Custom Categories</li>
                                    <li>Support</li>
                                    <li>Investment Tracking</li>
                                    <li>Retirement Planning</li>
                                </ul>
                                <button className="btn btn-primary">Create Your Account</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>Business</h3>
                            </div>
                            <div className="card-body">
                                <h2>$29.99</h2>
                                <p>per month</p>
                                <ul>
                                    <li>Personal Budgeting</li>
                                    <li>Expense Tracking</li>
                                    <li>Custom Categories</li>
                                    <li>Support</li>
                                    <li>Investment Tracking</li>
                                    <li>Retirement Planning</li>
                                    <li>Business Budgeting</li>
                                    <li>Business Expense Tracking</li>
                                </ul>
                                <button className="btn btn-primary">Create Your Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}