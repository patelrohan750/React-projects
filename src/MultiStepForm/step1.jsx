import React,{useState} from 'react'
import { TextField, Grid, MenuItem, Button, Box,Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    gender: yup.string().required(),
    phone: yup.number().required(),
    email:yup.string().required(),
});
const Step1 = ({ fieldValue, onHandleChange, options, onHandleNext,stepperError }) => {
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
                   Please Fill Your Personal Data
                </Typography>
            </Box>
          
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
              
                        <TextField {...register('firstname')} name="firstname" label="First Name" variant="outlined" fullWidth={true} size="small" value={fieldValue.firstname}  onChange={onHandleChange}  error={Boolean(errors.firstname)} helperText={errors.firstname?.message}/>
                      
              
                   
                   
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField {...register('lastname')} name="lastname" label="Last Name" variant="outlined" fullWidth={true} size="small" value={fieldValue.lastname} onChange={onHandleChange} error={Boolean(errors.lastname)} helperText={errors.lastname?.message}/>
                  
                </Grid>
            </Grid>
            <Grid container spacing={2} className="mt-2">
                <Grid item xs={12}>
                    <TextField
                        {...register('gender')}
                        id="outlined-select-currency"
                        name="gender"
                        select
                        label="Gender"
                        fullWidth={true}
                        value={fieldValue.gender}
                        onChange={onHandleChange}
                        mb={2}
                        variant="outlined"
                        error={Boolean(errors.gender)} helperText={errors.gender?.message}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

            </Grid>
            <Grid container spacing={2} className="mt-2">
                <Grid item xs={12} sm={6}>
                    <TextField  {...register('phone')} name="phone" label="Phone" variant="outlined" fullWidth={true} size="small" value={fieldValue.phone} onChange={onHandleChange} error={Boolean(errors.phone)} helperText={errors.phone?.message}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField {...register('email')} name="email" label="Email" variant="outlined" fullWidth={true} size="small" value={fieldValue.email} onChange={onHandleChange} error={Boolean(errors.email)} helperText={errors.email?.message}/>
                </Grid>
            </Grid>

            {/* button */}
            <Grid container spacing={2} className="mt-4" justifyContent="flex-end">
                <Box p={2}>
                    <Button  variant="outlined" color="primary" onClick={handleSubmit(onHandleNext)}>
                        Next
                    </Button>
                </Box>
            </Grid>
          




        </div>
    )
}

export default Step1
