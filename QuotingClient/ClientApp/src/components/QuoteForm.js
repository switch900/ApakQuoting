import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    mySubmitHandler = (event) => {
        this.userLogin();
        event.preventDefault();
    }

    userLogin() {
        fetch('https://localhost:44342/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username: this.state.username,
                Password: this.state.password
            })
        })
            .then(res => res.json()).then(res => {
                console.log(res);
                localStorage.setItem('token', res.token);
                localStorage.setItem('credentials', res.credential);
                localStorage.setItem('id', res.id);
                localStorage.setItem('user', res.claims[4].value);

                if (res.token) {
                    alert("Welcome to the Naughty or Nice list " + this.state.username);
                    if (localStorage.getItem('credentials') === "Admin") {
                        window.location.href = '/list';
                    }
                    else if (localStorage.getItem('credentials') === "Customer") {
                        window.location.href = '/detail/' + localStorage.getItem('id');
                    }
                    else {
                        alert("Nothing Found");
                    }
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
                    <h3>Quote Form:</h3>
                    <label htmlFor="usr">User Name:</label>
                    <input
                        type='text'
                        className="form-control"
                        name='username'
                        onChange={this.myChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        autoComplete="password"
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

ReactDOM.render(<QuoteForm />, document.getElementById('root'));