import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
//components
import TicketsCloseComponent from './tickets/TicketsCloseComponent';
import TicketsOpenComponent from './tickets/TicketsOpenComponent';
import TicketCreateComponent from './tickets/TicketCreateComponent';
import TicketAdd from './tickets/TicketAdd';

function TabContainer({ children, dir }) {
  return (
    <Typography component='div' dir={dir}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  }
}));

export default function SupportViewComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant='fullWidth'
        >
          <Tab label='Open' />
          <Tab label='Closed' />
          {/* <Tab label='Create Ticket' /> */}
          <Tab label='Open a Ticket' />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <TicketsOpenComponent props={props} />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <TicketsCloseComponent props={props} />
        </TabContainer>
        {/* <TabContainer dir={theme.direction}>
          <TicketCreateComponent props={props} />
        </TabContainer> */}
        <TabContainer dir={theme.direction}>
          <TicketAdd props={props} />
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
