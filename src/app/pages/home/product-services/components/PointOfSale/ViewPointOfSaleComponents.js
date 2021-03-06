import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//icons
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import LocationOn from '@material-ui/icons/LocationOn';
import Payment from '@material-ui/icons/Payment';
import Description from '@material-ui/icons/Description';
import Attachment from '@material-ui/icons/Attachment';
//multiform
import SelectProductForm from './multiform/SelectProductForm';
import CustomerDetailsForm from './multiform/CustomerDetailsForm';
import BillingAddressForm from './multiform/BillingAddressForm';
import ShippingAddressForm from './multiform/ShippingAddressForm';
import PaymentMethodForm from './multiform/PaymentMethodForm';
import TermsConditionForm from './multiform/TermsConditionForm';
import AttachedDocumentForm from './multiform/AttachedDocumentForm';

import { createOrder } from '../../../../../services/businessSale.service';

// const QontoConnector = withStyles({
//   alternativeLabel: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   active: {
//     '& $line': {
//       borderColor: '#784af4',
//     },
//   },
//   completed: {
//     '& $line': {
//       borderColor: '#784af4',
//     },
//   },
//   line: {
//     borderColor: '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// })(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ShoppingCart />,
    2: <AccountCircle />,
    3: <Home />,
    4: <LocationOn />,
    5: <Payment />,
    6: <Description />,
    7: <Attachment />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    'Select Product',
    'Customer Details',
    'Billing Address',
    'Shipping Address',
    'Payment Method',
    'Terms & Condition',
    'Attached Document'
  ];
}

export default function ViewPointOfSaleComponents() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  //1st step data
  const [productDetails, setProductDetails] = useState({});

  //2nd step data
  // const form = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  // };
  const [customerDetails, setCustomerDetails] = useState({});

  //3rd step data
  const [billingAddress, setBillingAddress] = useState({});

  //4th step
  const [shippingAddress, setShippingAddress] = useState({});

  const handleChange2ndStep = e => {
    setCustomerDetails({ ...customerDetails, [e.target.id]: e.target.value });
  };
  //

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <SelectProductForm
            setState={setProductDetails}
            state={productDetails}
          />
        );
      case 1:
        return (
          <CustomerDetailsForm
            onChange={handleChange2ndStep}
            data={customerDetails}
          />
        );
      case 2:
        return (
          <BillingAddressForm
            setState={setBillingAddress}
            state={billingAddress}
          />
        );
      case 3:
        return (
          <ShippingAddressForm
            setState={setShippingAddress}
            state={shippingAddress}
          />
        );
      case 4:
        return <PaymentMethodForm />;
      case 5:
        return <TermsConditionForm />;
      case 6:
        return <AttachedDocumentForm />;
      default:
        return 'Unknown step';
    }
  }

  const handleNext = async () => {
    if (activeStep === 6) {
      let data = {};
      data = {
        ...data,
        ...customerDetails,
        productOrders: [{ ...productDetails }],
        custAddress: `${billingAddress.addressLine1} ${billingAddress.addressLine2} ${billingAddress.city} ${billingAddress.state} ${billingAddress.country}, ${billingAddress.zipCode}`,
        billingAddress: `${billingAddress.addressLine1} ${billingAddress.addressLine2} ${billingAddress.city} ${billingAddress.state} ${billingAddress.country}, ${billingAddress.zipCode}`,
        shippingAddress: `${shippingAddress.addressLine1} ${shippingAddress.addressLine2} ${shippingAddress.city} ${shippingAddress.state} ${shippingAddress.country}, ${shippingAddress.zipCode}`,
        country: billingAddress.country
      };
      const order = await createOrder(data);
      console.log(order);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
                hidden={activeStep === 0 ? true : false}
              >
                Back
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
