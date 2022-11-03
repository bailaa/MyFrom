import React from 'react';

// BEGIN
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptRules: false,
            emailInput: '',
            passInput: '',
            addressInput: '',
            cityInput: '',
            countrySelect: '',
            signIn: false,
        };
    }

    toggleText = (e) => {
        e.preventDefault();
        const { signIn } = this.state;
        this.setState({ signIn: !signIn });
    };

    onChangeAccept = () => {
        const { acceptRules } = this.state;
        this.setState({ acceptRules: !acceptRules });
    };

    onChangeEmail = (e) => {
        this.setState({ emailInput: e.target.value }); // извлечение данных из эл-та формы
    };

    onChangePass = (e) => {
        this.setState({ passInput: e.target.value }); // извлечение данных из эл-та формы
    };

    onChangeAddress = (e) => {
        this.setState({ addressInput: e.target.value });
    };

    onChangeCity = (e) => {
        this.setState({ cityInput: e.target.value });
    };

    onChangeCountry = (e) => {
        this.setState({ countrySelect: e.target.value });
    };

    render() {
        const {
            acceptRules,
            emailInput,
            passInput,
            addressInput,
            cityInput,
            countrySelect,
            signIn,
        } = this.state;

        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.toggleText}
                >
                    {signIn ? 'Back' : 'Sign In'}
                </button>
                {signIn
                    && (
                        <table
                            className="table"
                        >
                            <tbody>
                            <tr>
                                <td>acceptRules</td>
                                <td>{acceptRules ? 'true' : 'false'}</td>
                            </tr>
                            <tr>
                                <td>address</td>
                                <td>{addressInput}</td>
                            </tr>
                            <tr>
                                <td>city</td>
                                <td>{cityInput}</td>
                            </tr>
                            <tr>
                                <td>country</td>
                                <td>{countrySelect}</td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td>{emailInput}</td>
                            </tr>
                            <tr>
                                <td>password</td>
                                <td>{passInput}</td>
                            </tr>
                            </tbody>
                        </table>

                    )}
                {!signIn &&
                    (<form
                            name="myForm">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="col-form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChangeEmail}
                                    value={emailInput}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password" className="col-form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChangePass}
                                    value={passInput}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="address" className="col-form-label">Address</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    id="address"
                                    placeholder="1234 Main St"
                                    onChange={this.onChangeAddress}
                                    value={addressInput}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="city" className="col-form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    id="city"
                                    onChange={this.onChangeCity}
                                    value={cityInput}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="country" className="col-form-label">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    className="form-control"
                                    value={countrySelect}
                                    onChange={this.onChangeCountry}
                                >
                                    <option>Choose</option>
                                    <option value="argentina">Argentina</option>
                                    <option value="russia">Russia</option>
                                    <option value="china">China</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="rules">
                                        <input
                                            id="rules"
                                            type="checkbox"
                                            name="acceptRules"
                                            className="form-check-input"
                                            onChange={this.onChangeAccept}
                                            checked={acceptRules}
                                        />
                                        Accept Rules
                                    </label>
                                </div>
                            </div>
                        </form>
                    )}
            </div>
        );
    }
}

// END
