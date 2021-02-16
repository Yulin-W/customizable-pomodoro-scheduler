import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // Scrolls if content overflows and set background color
    numInput: {
        width: 50,
        marginLeft: 5,
        marginRight: 5,
    },
}));

export default function PeriodInput({ disabled, hr, min, sec, editFunc, index }) { // assumes that input default value for period is in seconds
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <TextField
                item
                className={classes.numInput}
                disabled={disabled}
                margin="dense"
                label="Hr"
                value={hr}
                type="number"
                onChange={(e) => {editFunc(index, "hr", Number(e.target.value));}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                item
                className={classes.numInput}
                disabled={disabled}
                margin="dense"
                label="Min"
                value={min}
                type="number"
                onChange={(e) => {editFunc(index, "min", Number(e.target.value));}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                item
                className={classes.numInput}
                disabled={disabled}
                margin="dense"
                label="Sec"
                value={sec}
                type="number"
                onChange={(e) => {editFunc(index, "sec", Number(e.target.value));}}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
    );
}