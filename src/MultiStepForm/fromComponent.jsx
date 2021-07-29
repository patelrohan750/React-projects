import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Paper, Typography } from '@material-ui/core';

import Step1 from './step1';
import Step2 from './step2'
import Step3 from './step3'
import Finished from './finished';


import CustomStepper from './customStepper';


const FromComponent = () => {
   
    
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        gender: '',
        phone: '',
        email: '',

        // step2
        highestDegree: "",
        issuedBy: "",
        yearOfPassing: "",
        jobType: "",

        //step 3
        skill: "",
        jobApplyFor: "",
        workExperence: "",
        expectedSalary: "",

    })
  
    const [step, setStep] = useState(0);
    const genderOptions = [
        {
            key: "Male",
            value: "Male"
        },
        {
            key: "Female",
            value: "Female"
        },
        {
            key: "Other",
            value: "Other"
        },
    ]
    const qualificationsOptions = [
        { key: "graduation", value: "Graduation" },
        { key: "B.Tech", value: "B.Tech" },
        { key: "BCA", value: "BCA Course" },
        { key: "M.Tech", value: "M.Tech" },
        { key: "MCA", value: "MCA" },
    ]
    const jobTypeOptions = [
        { key: "Manager", value: "Manager" },
        { key: "Project Designer", value: "Project Designer" },
        { key: "Clerk", value: "Clerk" },
        { key: "Helper", value: "Helper" },
    ]
    const skillOptions = [
        { key: "Programming", value: "Programming" },
        { key: "Communication", value: "Communication" },
        { key: "Designing", value: "Designing" },
        { key: "not Yet Defined", value: "not Yet Defined" },
    ]
    const workExperenceOptions = [
        { key: "Less than 1 year", value: "Less than 1 year" },
        { key: "More than 1 year", value: "More than 1 year" },
        { key: "1 year", value: "1 year" },
    ]
    const jobApplyOptions = [
        { key: "Marketting", value: "Marketting" },
        { key: "Official Work", value: "Official Work" },
        { key: "Work from home", value: "Work from home" },
    ]
    const stepperSteps = [
        { label: "Personal Bio" },
        { label: "Educational" },
        { label: "Professional" },

    ]

    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(`name is:${name}`);
        console.log(`value is:${value}`);
       
      
        setData({
            ...data, [name]: value
        })
        // console.log(data);

    }
    const handlePrev = () => {
        setStep(step - 1)
    }
    const handleNext = () => {
        console.log("handle next clicked");
       
        setStep(step + 1)
        console.log(step);
    }
   
   
    const getStepsItems = (steps) => {
        switch (steps) {
            case 0: return <Step1   fieldValue={data} onHandleChange={handleInput} options={genderOptions} onHandleNext={handleNext}  />;
            case 1: return <Step2  fieldValue={data} onHandleChange={handleInput} options={genderOptions} onHandleNext={handleNext} qualificationsOptions={qualificationsOptions} jobTypeOptions={jobTypeOptions} onHandlePrev={handlePrev} />;
            case 2: return <Step3  fieldValue={data} onHandleChange={handleInput} options={genderOptions} onHandleNext={handleNext} skillOptions={skillOptions} workExperenceOptions={workExperenceOptions} onHandlePrev={handlePrev} jobApplyOptions={jobApplyOptions} />;
            case 3: return <Finished fieldValue={data} />;

            default:
                return <Step1 />;

        }
    }
    return (
        <React.Fragment>
            <Grid container className="form_container">
                <Grid item xs={12} sm={7}>
                    <Box component={Paper} p={2} mb={2}>
                        <Typography variant="h6" color="primary" align="center">
                            Multistep Signup Form
                        </Typography>
                        <CustomStepper activestep={step} stepperSteps={stepperSteps} />
                    </Box>


                    <Box component={Paper} p={2}>
                        <form className="multi_form">

                            <Box>
                                {getStepsItems(step)}
                            </Box>

                        </form>
                    </Box>

                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default FromComponent
