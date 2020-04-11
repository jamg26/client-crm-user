import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import ProdcutInfo from './multiforms/ProductInfo';
import ComissionSetUp from './multiforms/ComissionSetUp';
import Agents from './multiforms/Agents';
import Images from './multiforms/Images';
import DocumentForm from './multiforms/DocumentForm';
import * as actions from '../../../../../store/actions';
import { connect } from 'react-redux';
import { addProduct } from '../../../../../services/products.service';

const useStyles = makeStyles(theme => ({
  root: {},
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
    'Product Info',
    'Commision Setup',
    'Agents',
    'Images',
    'Document',
    'Add on Product',
    'Can Agent Apply Discount?'
  ];
}

const ProductInput = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const userData = useSelector(state => state.auth.user);

  const defaultProductLocationInfo = {
    businessLocationName: '',
    id: '',
    productId: '',
    businessId: userData.mainRole.business.id,
    businessLocationId: '0',
    active: true
  };

  const defaultCommissionSetUp = {
    boPart: '',
    affiliateFixedCommissionAmount: '',
    affiliateCommission: '',
    paymentProcessorCharge: '',
    transactionFees: ''
  };

  // const defaultAgents = {
  //   opener: [
  //     {
  //       type: '',
  //       title: '',
  //       oFrom: '0',
  //       oTo: '0',
  //       pay: '1',
  //       payRemainingSales: ''
  //     }
  //   ],
  //   closer: [
  //     {
  //       type: '',
  //       title: '',
  //       oFrom: '0',
  //       oTo: '0',
  //       pay: '1',
  //       payRemainingSales: ''
  //     }
  //   ]
  // };

  const defaultProductInfo = {
    id: '',
    businessId: userData.mainRole.business.id,
    categoryId: '0',
    subCategoryId: '0',
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
    invoiceTerms: '',
    showOnInvoice: false,
    receiptTerms: '',
    showOnReceipt: false,
    active: true,
    productLocationInfo: defaultProductLocationInfo
  };

  const [formDataProductInfo, setFormDataProductInfo] = useState(defaultProductInfo);
  // const [
  //   productSubCategorySelection,
  //   setProductSubCategorySelection,
  // ] = useState('');
  const [formDataCommissionSetUp, setFormDataCommissionSetUp] = useState(defaultCommissionSetUp);
  // const [formDataAgents, setFormDataAgents] = useState(defaultAgents);

  // const handleSelectedProductTYpe = (data) => {
  //   setFormDataProductInfo({
  //     ...formDataProductInfo,
  //     ['productTypeId']: data,
  //   });
  // };

  const handleSelection = event => {
    let keyName = event.target.name;
    if (event.target.name === 'categoryId') {
      setFormDataProductInfo({
        ...formDataProductInfo,
        [event.target.name]: event.target.value,
        subCategoryId: event.target.value
      });
    } else if (event.target.name === 'businessLocationId') {
      setFormDataProductInfo({
        ...formDataProductInfo,
        productLocationInfo: {
          ...formDataProductInfo.productLocationInfo,
          [keyName]: event.target.value
        }
      });
    } else {
      setFormDataProductInfo({
        ...formDataProductInfo,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleOption = event => {
    setFormDataProductInfo({
      ...formDataProductInfo,
      [event.target.name]: event.target.checked
    });
  };

  const handleChange0 = event => {
    setFormDataProductInfo({
      ...formDataProductInfo,
      [event.target.id]: event.target.value
    });
  };

  const handleChange1 = event => {
    setFormDataCommissionSetUp({
      ...formDataCommissionSetUp,
      [event.target.id]: event.target.value
    });
  };

  const handleChange2 = event => {
    setFormDataCommissionSetUp({
      ...formDataCommissionSetUp,
      [event.target.id]: event.target.value
    });
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ProdcutInfo
            data={formDataProductInfo}
            businessLocationData={formDataProductInfo.productLocationInfo}
            handleSelection={handleSelection}
            handleOption={handleOption}
            handleChange={handleChange0}
          />
        );
      case 1:
        return <ComissionSetUp data={formDataCommissionSetUp} handleChange={handleChange1} />;
      case 2:
        return <Agents data={formDataCommissionSetUp} handleChange={handleChange2} />;
      case 3:
        return <Images data={formDataCommissionSetUp} handleChange={handleChange2} />;
      case 4:
        return <DocumentForm />;
      case 5:
        return 'Add on Product';
      case 6:
        return 'Can Agent Apply Discount?';
      default:
        return 'Unknown step';
    }
  }

  const isStepOptional = step => {
    return step === -1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  // const data = {
  //   id: 'string',
  //   businessId: 'string',
  //   productId: 'string',
  //   productPrice1: 0,
  //   minimumPrice: 0,
  //   salesTax: 0,
  //   active: true,
  //   enteredBy: 0,
  //   updatedBy: 0,
  //   dateCreated: '2020-04-08T16:56:58.560Z',
  //   dateUpdate: '2020-04-08T16:56:58.560Z',
  // };

  const handleNext = async () => {
    console.log(formDataProductInfo);
    const data = {
      businessId: formDataProductInfo.businessId,
      canSetAnyPrice: formDataProductInfo.canSetAnyPrice,
      categoryId: formDataProductInfo.categoryId,
      invoiceTerms: formDataProductInfo.invoiceTerms,
      businessLocationId: formDataProductInfo.productLocationInfo.businessLocationId,
      productName: formDataProductInfo.productName,
      productCode: formDataProductInfo.productCode,
      productUniqueNo: formDataProductInfo.productUniqueNo,
      productPrice: parseFloat(formDataProductInfo.price),
      minimumPrice: parseFloat(formDataProductInfo.minimumPrice),
      productDesc: formDataProductInfo.productDesc,
      isAddOn: formDataProductInfo.isAddOn,
      isLead: formDataProductInfo.isLead,
      showOnInvoice: formDataProductInfo.showOnInvoice,
      receiptTerms: formDataProductInfo.receiptTerms,
      showOnReceipt: formDataProductInfo.showOnReceipt,
      salesTax: parseFloat(formDataProductInfo.salesTax)
    };
    const product = await addProduct(data);
    console.log(product);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  // const UpdateFormData = () => {};

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
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
            labelProps.optional = <Typography variant='caption'>Optional</Typography>;
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
            <div className={classes.instructions}>{getStepContent(activeStep)}</div>

            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSkip}
                  className={classes.button}>
                  Skip
                </Button>
              )}

              <Button
                variant='contained'
                color='secondary'
                onClick={handleNext}
                className={classes.button}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    business: state.auth.user.mainRole.business
  };
};

export default connect(mapStateToProps, actions)(ProductInput);
