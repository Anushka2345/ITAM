import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {
    Card,
} from 'antd';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Set Host Details', 'Authentication Details', 'Finish'];
}

function getStepContent(step: any) {


    function stepOneFinish(values: any) {
        console.log("one", values)
    }

    function stepTwoFinish(values: any) {
        console.log("two", values)
    }

    switch (step) {
        case 0:
            return (<Card><Form

                name="normal_login"
                id="step_one"
                className="auth-form"
                initialValues={{ remember: true }}
                style={{backgroundColor:'#EAE7DC',borderColor:'#24305E'}}
                onFinish={(values)=> stepOneFinish(values)}
            >
                <Form.Item
                    name="domain_name"
                    rules={[{ required: false, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Domain Name" />
                </Form.Item>
                <Form.Item
                    name="Host Address"
                    rules={[{ required: true, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Host Address" />
                </Form.Item>
                <Form.Item
                    name="subnet_mask"
                    rules={[{ required: false, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Subnet Mask bits in format /XX" />
                </Form.Item>
            </Form></Card>)
        case 1:
            return (<Card><Form
                name="normal_login"
                className="auth-form"
                id="step_two"
                initialValues={{ remember: true }}
                style={{backgroundColor:'#EAE7DC',borderColor:'#24305E'}}
            >
                <Form.Item
                    name="auth_username"
                    rules={[{ required: false, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="SSH Username" />
                </Form.Item>
                <Form.Item
                    name="auth_password"
                    rules={[{ required: false, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="SSH Password" />
                </Form.Item>
                <Form.Item
                    name="comments"
                    rules={[{ required: false, message: 'This is a required field' }]}
                >
                    <Input prefix={<UserOutlined className="" />} placeholder="Comments" type="text"/>
                </Form.Item>
            </Form></Card>)
        case 2:
            return (<Card>Thank you for registering, we have asked our stewards to perform multiple checks on your systems. We will notify through email when you have been granted the dashboard access.</Card>)
        default:
            return 'Unknown step';
    }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState(new Set());
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();


    const totalSteps = () => {
        return getSteps().length;
    };

    const isStepOptional = (step: any) => {
        return step === 1;
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this
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

    const skippedSteps = () => {
        return skipped.size;
    };

    const completedSteps = () => {
        return completed.size;
    };

    const allStepsCompleted = () => {
        if (completedSteps() === totalSteps() - skippedSteps()) {
            axios.post('http://127.0.0.1/onboardUser', {})
            document.location.href = '/auth/login';
        }

        return completedSteps() === totalSteps() - skippedSteps();
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        console.log(document.getElementById('step_one'))
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed
                  // find the first step that has been completed
                steps.findIndex((step, i) => !completed.has(i))
                : activeStep + 1;

        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: any) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {


        const newCompleted = new Set(completed);
        newCompleted.add(activeStep);
        setCompleted(newCompleted);

        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        if (completed.size !== totalSteps() - skippedSteps()) {
            handleNext();
        }
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted(new Set());
        setSkipped(new Set());
    };

    const isStepSkipped = (step: any) => {
        return skipped.has(step);
    };

    function isStepComplete(step: any) {
        return completed.has(step);
    }

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const buttonProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepButton
                                onClick={handleStep(index)}
                                completed={isStepComplete(index)}
                                {...buttonProps}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                Next
                            </Button>
                            {isStepOptional(activeStep) && !completed.has(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}
                                >
                                    Skip
                                </Button>
                            )}

                            {activeStep !== steps.length &&
                            (completed.has(activeStep) ? (
                                <Typography variant="caption" className={classes.completed}>
                                    Step {activeStep + 1} already completed
                                </Typography>
                            ) : (
                                <Button variant="contained" color="primary" onClick={handleComplete}>

                                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                </Button>
                            ))}

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}