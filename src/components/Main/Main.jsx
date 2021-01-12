import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form';

import useStyles from './styles';
import List from './List/List';

const Main = () => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader 
                title="Expense Tracker" 
                subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance KES 5000
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    style={{ lineHeight: '1.5em', marginTop: '20px' }}
                >
                    Try saying add income for KES 600 in category salary for Monday
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
