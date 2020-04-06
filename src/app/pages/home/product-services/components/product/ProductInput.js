import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import ProdcutInfo from './multiforms/ProductInfo';
import CommisionSetupForm from './multiforms/CommisionSetupForm';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function getSteps() {
  return ['Product Info', 'Commision Setup', 'Agents', 'Images', 'Document', 'Add on Product', 'Can Agent Apply Discount?'];
}

export default function ProductInput() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();


  const userData = useSelector(state => state.auth.user);

const defaultProductLocationInfo = {
    businessLocationName: "",
    id: "",
    productId: "",
    businessId: userData.mainRole.business.id,
    businessLocationId: "0",
    active: true,
}

    const defaultProductInfo = {
        id: '',
        businessId: userData.mainRole.business.id,
        categoryId: '0', 
        subCategoryId: '-1',
        productTypeId: '0',
        productName: '',
        productCode: '',
        price: '', // wala value
        salesTax: '', // wala value
        minimumPrice: '', // wala value
        productUniqueNo: '',
        productDesc: '',
        isAddOn: false,
        isLead: true,
        canSetAnyPrice: false,
        invoiceTerms: "",
        showOnInvoice: false,
        receiptTerms: "",
        showOnReceipt: false,
        active: true,
        productLocationInfo: defaultProductLocationInfo
    }


    const [formDataProductInfo, setFormDataProductInfo] = useState(defaultProductInfo);

    const [productSubCategorySelection, setProductSubCategorySelection] = useState('');

    const handleSelectedProductTYpe = data => {
        setFormDataProductInfo({
          ...formDataProductInfo,
          ['productTypeId']: data
        });
    }

    const handleSelection = event => {
        let keyName = event.target.name
        if (event.target.name === 'categoryId') {
             setFormDataProductInfo({
              ...formDataProductInfo,
              [event.target.name]: event.target.value,
              ['subCategoryId']: '0'
            });
        } else if (event.target.name === 'businessLocationId') {

            setFormDataProductInfo({
              ...formDataProductInfo,
              ['productLocationInfo']: {
                        ...formDataProductInfo.productLocationInfo, 
                        [keyName] :event.target.value
                    }
            });
        } else {
            setFormDataProductInfo({
              ...formDataProductInfo,
              [event.target.name]: event.target.value
            });
        }
    }

    const handleOption = event => {
        setFormDataProductInfo({
          ...formDataProductInfo,
          [event.target.name]: event.target.checked
        });
    }

    const handleChange = event => {
        setFormDataProductInfo({
          ...formDataProductInfo,
          [event.target.id]: event.target.value
        });
    }


function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProdcutInfo 
                data={formDataProductInfo}
                businessLocationData={formDataProductInfo.productLocationInfo}
                handleSelection={handleSelection}
                handleOption={handleOption}
                handleChange={handleChange}
            />
    case 1:
      return <CommisionSetupForm/>;
    case 2:
      return 'Agents';
    case 3:
      return 'Images';
    case 4:
      return 'Document';
    case 5:
      return 'Add on Product';
    case 6:
      return 'Can Agent Apply Discount?';
    default:
      return 'Unknown step';
  }
}

  const isStepOptional = (step) => {
    return step === -1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    
    // if ((prevActiveStep) => prevActiveStep === 0) {
    //     // debugger;
    // } else {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
    // setSkipped(newSkipped);
  };

  const UpdateFormData = () => {

  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>

          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional</Typography>;
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
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
                    {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '70vh' }} />*/}
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  {isStepOptional(activeStep) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                      className={classes.button}
                    >
                      Skip
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
    
    </>
  );
}