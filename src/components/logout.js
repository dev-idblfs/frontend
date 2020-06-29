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
    constructor() {
        super()
    }

    handleClick = () => {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        document.cookie = `idblfs_email=${this.props.name}; expires=${date}; path=/;`;
        document.location.href = window.location.href;

    }

    render() {
        const { classes, name } = this.props;
        console.log(this.props)

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="span" variant="h5">
                        hey {name} thankyou,
                    <Button variant={"outlined"} onClick={this.handleClick}>
                            logout
                    </Button>
                    </Typography>
                </div>
            </Container>
        )
    }
}
export default withStyles(useStyles)(Logout);
