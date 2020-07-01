import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CssBaseline, Typography, Grid, TextField, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});


class Logout extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {

        }
    }

    handleClick = () => {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        document.cookie = `idblfs_email=${this.props.name}; expires=${date}; path=/;`;
        document.location.href = window.location.href;

    }

    render() {
        const { classes, userInfo } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="span" variant="h6">
                        <Grid container>
                            <Grid>NAME: {userInfo.name} </Grid>
                            <Grid>email: {userInfo.email}</Grid>
                            <Grid>last login: {userInfo.lastLogin}</Grid>
                            <Grid>Login count (before yet): {userInfo.loginCount}</Grid>
                        </Grid>
                        <Grid>
                            <Button variant={"outlined"} onClick={this.handleClick}>
                                logout
                            </Button>
                        </Grid>

                    </Typography>
                </div>
            </Container>
        )
    }
}
export default withStyles(useStyles)(Logout);
