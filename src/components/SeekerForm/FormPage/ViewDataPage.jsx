import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import PersonalDetails from "./Forms/PersonalDetails";
import EducationalDetails from "./Forms/EducationalDetails";
import CareerDetails from "./Forms/CareerDetails";
import TechnicalCertificate from "./Forms/TechnicalCertificate";
import ExtraCurricular from "./Forms/ExtraCurricular";
import AttachedResume from "./Forms/AttachedResume";

import ReviewData from "./ReviewData";
import SubmitSuccess from "./SubmitSuccess";
import validationSchema from "./FormModel/validationSchema";
import FormModel from "./FormModel/FormModel";
import formInitialValues from "./FormModel/formInitialValues";
import useStyles from "./styles";
const steps = [
  "Personal Details",
  "Educational Details",
  "Career Details",
  "Technical Certificate",
  "Extra Curricular",
  "Attached Resume",
  "Review Data",
];
const { formId, formField } = FormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetails formField={formField} />;
    case 1:
      return <EducationalDetails formField={formField} />;
    case 2:
      return <CareerDetails formField={formField} />;
    case 3:
      return <TechnicalCertificate formField={formField} />;
    case 4:
      return <ExtraCurricular formField={formField} />;
    case 5:
      return <AttachedResume formField={formField} />;
    case 6:
      return <ReviewData />;
    default:
      return <div>Not Found</div>;
  }
}

export default function ViewDataPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function _submitForm(values, actions) {
    await _sleep(1000);
    console.log(JSON.stringify(values, null, 2));
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <SubmitSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Save & Submit" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
