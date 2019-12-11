import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            userName: '',
            password: '',
            companyName: '',
            email: '',
            street: '',
            city: '',
            province: '',
            postalCode: '',
            country: '',
            phoneNumber: ''
        };
    }
    myChangeHandler = (event) => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");
            this.userLogin();
        } else {
            alert("Form has errors.")
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //UserName
        if (!fields["userName"]) {
            formIsValid = false;
            errors["userName"] = "Cannot be empty";
        }

        var rgx = /\s/;
        if (rgx.test(fields["userName"])) {
            formIsValid = false;
            errors["userName"] = "User Name cannot contain blank spaces";
        }

        //Password
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }

        //CompanyName
        if (!fields["companyName"]) {
            formIsValid = false;
            errors["companyName"] = "Cannot be empty";
        }
        var rgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
        if (!rgx.test(fields["password"])) {
            errors["password"] = "Password must contain lowercase, uppercase, number, and special character";
            formIsValid = false;
        }

        //Phone Number
        if (!fields["phoneNumber"]) {
            formIsValid = false;
            errors["phoneNumber"] = "Cannot be empty";
        }


        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    userLogin() {
        console.log(this.state.phoneNumber);
        fetch('https://localhost:44342/api/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserName: this.state.userName,
                Password: this.state.password,
                Email: this.state.email,
                CompanyName: this.state.companyName,
                Street: this.state.street,
                City: this.state.city,
                Province: this.state.province,
                PostalCode: this.state.postalCode,
                Country: this.state.country,
                PhoneNumber: this.state.phoneNumber
            })
        })
            .then(res => res.json()).then(res => {
                if (res) {
                    alert("You are now registered to Apak's Quoting App " + this.state.userName);
                    window.location.href = '/Home';
                }
                else {
                    alert("Not a valid user or password");
                }
            }, function (error) {
                console.log(error.message); //=> String
            })
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <div className="form-group">
                    <label htmlFor="usr">User Name:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='userName'
                        onChange={this.myChangeHandler}
                    />
                    <span style={{ color: "red" }}>{this.state.errors["userName"]}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        onChange={this.myChangeHandler}
                    />
                    <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Email:</label>
                    <input
                        type='email'
                        name='email'
                        className="form-control"
                        onChange={this.myChangeHandler}
                    />
                    <span style={{ color: "red" }}>{this.state.errors["email"]}</span>

                </div>

                <div className="form-group">
                    <label htmlFor="usr">Company Name:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='companyName'
                        onChange={this.myChangeHandler}
                    />
                    <span style={{ color: "red" }}>{this.state.errors["companyName"]}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="usr">Phone Number:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='phoneNumber'
                        onChange={this.myChangeHandler}
                    />
                    <span style={{ color: "red" }}>{this.state.errors["phoneNumber"]}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="usr">Street:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='street'
                        onChange={this.myChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="usr">City:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='city'
                        onChange={this.myChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="usr">Province:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='province'
                        onChange={this.myChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="usr">Postal Code:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='postalCode'
                        onChange={this.myChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="usr">Country:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='country'
                        onChange={this.myChangeHandler}
                    />
                </div>

               

                <input className="btn btn-primary"
                    type='submit'
                    text='Login'
                />
            </form>
        );
    }
}

ReactDOM.render(<RegisterForm />, document.getElementById('root'));