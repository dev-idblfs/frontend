import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CssBaseline, Typography, Grid, TextField, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Logout from "./logout";


const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


class Login extends Component {
    constructor() {
        super();
        this.state = {
            auth: false,
            process: false
        }
    }
    componentDidMount() {
        let val;
        let cookiearr = document.cookie.split(/idblfs_email=/i, 2);
        val = cookiearr[1];
        console.log('object', cookiearr)
        if (cookiearr.length > 1) {
            this.setState({
                auth: true,
                name: val
            })
        }
    }


    onFormSubmit = (e) => {
        e.preventDefault();


        let data = {
            name: e.target.name.value,
        }
        this.setState({
            process: true
        });

        axios({
            url: "http://localhost:8080/signup",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                email: e.target.email.value,
                pwd: e.target.password.value
            },
            data: data
        })
            .then(e => {
                this.setState({
                    auth: true,
                    name: e.data.email
                });
                document.cookie = `idblfs_email=${e.data.email}; expires=${60000}; path=/;`;
            })
            .catch(c => { console.log('not sned', c) })
            .finally(() => {
                this.setState({
                    process: true
                });
            });
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>

                {this.state.auth
                    ? <Logout name={this.state.name} />
                    : < Container component="main" maxWidth="xs" >
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Signup
              </Typography>
                            <form className={classes.form} onSubmit={this.onFormSubmit} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="name"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                        />
                                    </Grid>

                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    {this.state.process ? 'Please Wait...' : 'Sign Up'}
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link to="/login" variant="body2">
                                            Already have an account? Sign in
                    </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container >
                }
            </Fragment>

        )
    }
}
export default withStyles(useStyles)(Login);
