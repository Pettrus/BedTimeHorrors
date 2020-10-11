import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: '1em',
    },
    header: {
        backgroundColor: '#262626'
    },
    image: {
        width: '335px'
    }
}));

// c48c33

const Menu = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <img src="/logo.png" className={classes.image} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Menu;
