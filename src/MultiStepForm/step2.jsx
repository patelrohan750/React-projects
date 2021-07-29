import React from 'react'
import { TextField, Grid, MenuItem, Button, Box,Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    highestDegree: yup.string().required(),
     issuedBy: yup.string().required(),
     yearOfPassing: yup.number().required(),
     jobType: yup.string().required(),
});
const Step2 = ({ fieldValue, onHandleChange, qualificationsOptions, onHandleNext ,onHandlePrev,jobTypeOptions }) => {
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
                   Please Fill Your Educational Data
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                        {...register('highestDegree')}
                        name="highestDegree"
                        select
                        label="Qualification"
                        fullWidth={true}
                        value={fieldValue.highestDegree}
                        onChange={onHandleChange}
                        mb={2}
                        variant="outlined"
                        error={Boolean(errors.highestDegree)} helperText={errors.highestDegree?.message}
                    >
                        {qualificationsOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField   {...register('issuedBy')} name="issuedBy" label="Issued By Collage Name" variant="outlined" fullWidth={true} size="small" value={fieldValue.issuedBy} onChange={onHandleChange} 
                         error={Boolean(errors.issuedBy)} helperText={errors.issuedBy?.message}
                    />
                </Grid>
            </Grid>
           
            <Grid container spacing={2} className="mt-2">
                <Grid item xs={12} sm={6}>
                    <TextField   {...register('yearOfPassing')} name="yearOfPassing" label="Passing Year" variant="outlined" fullWidth={true} size="small" value={fieldValue.yearOfPassing} onChange={onHandleChange} 
                         error={Boolean(errors.yearOfPassing)} helperText={errors.yearOfPassing?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                          {...register('jobType')}
                        name="jobType"
                        select
                        label="JobApplyFor"
                        fullWidth={true}
                        value={fieldValue.jobType}
                        onChange={onHandleChange}
                        mb={2}
                        variant="outlined"
                        error={Boolean(errors.jobType)} helperText={errors.jobType?.message}
                    >
                        {jobTypeOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
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
                        Next
                    </Button>
                </Box>
            </Grid>




        </div>
    )
}

export default Step2
