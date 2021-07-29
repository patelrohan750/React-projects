import React from 'react'
import { TextField, Grid, MenuItem, Button, Box,Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    skill:yup.string().required(),
    jobApplyFor: yup.string().required(),
    workExperence: yup.string().required(),
    expectedSalary:yup.number().required(),
});


const Step3 = ({ fieldValue, onHandleChange, options, onHandlePrev,onHandleNext,skillOptions,workExperenceOptions,jobApplyOptions }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
      
        resolver:yupResolver(schema)
    });
    return (
        <div>
            <Box mt={1} mb={2}>
                <Typography variant="h6" color="primary" align="center">
                   Please Fill Your Professional Data
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                         {...register('skill')} 
                        name="skill"
                        select
                        label="Skills You have"
                        fullWidth={true}
                        value={fieldValue.skill}
                        onChange={onHandleChange}
                        mb={2}
                        variant="outlined"
                        error={Boolean(errors.skill)} helperText={errors.skill?.message}
                    >
                        {skillOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                         {...register('workExperence')} 
                        name="workExperence"
                        select
                        label="Experence You have"
                        fullWidth={true}
                        value={fieldValue.workExperence}
                        onChange={onHandleChange}
                        mb={2}
                        variant="outlined"
                        error={Boolean(errors.workExperence)} helperText={errors.workExperence?.message}
                    >
                        {workExperenceOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
           
            <Grid container spacing={2} className="mt-2">
                <Grid item xs={12} sm={6}>
                <TextField
                         {...register('jobType')} 
                        name="jobType"
                        select
                        label="Choose Work Type"
                        fullWidth={true}
                        value={fieldValue.jobType}
                        onChange={onHandleChange}
                        mb={2}
                        variant="outlined"
                        error={Boolean(errors.jobType)} helperText={errors.jobType?.message}
                    >
                        {jobApplyOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  {...register('expectedSalary')}  name="expectedSalary" label="Expected Salaty" variant="outlined" fullWidth={true} size="small" value={fieldValue.expectedSalary} onChange={onHandleChange}  error={Boolean(errors.expectedSalary)} helperText={errors.expectedSalary?.message}/>
                </Grid>
            </Grid>

            {/* button */}
            <Grid container spacing={2} className="mt-4" justifyContent="flex-end">
            <Box p={2}>
                    <Button variant="outlined" color="primary" onClick={onHandlePrev}>
                        Back
                    </Button>
                </Box>
                <Box p={2}>
                    <Button variant="outlined" color="primary" onClick={handleSubmit(onHandleNext)}>
                        Finish
                    </Button>
                </Box>
            </Grid>




        </div>
    )
}

export default Step3
