import React from 'react'

import {Stepper,StepLabel,Step} from '@material-ui/core';


const CustomStepper = ({activestep,stepperSteps}) => {
    return (
        <div>
             <Stepper activeStep={activestep} alternativeLabel>
                {stepperSteps.map((item) => (
                    
                  <Step key={item.label}>
                    <StepLabel >{item.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
        </div>
    )
}

export default CustomStepper
