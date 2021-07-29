import React from 'react'
import { Box, Typography, Grid, Paper } from '@material-ui/core';


const Finished = ({ fieldValue }) => {
    const { firstname, lastname, gender, phone, email, highestDegree, issuedBy, yearOfPassing, jobType, skill, jobApplyFor, workExperence, expectedSalary } = fieldValue;
    return (
        <div>
          
                <Box mt={1} mb={2}>
                    <Typography variant="h6" color="primary" align="center">
                        Your Given Details
                    </Typography>
                </Box>


                <Grid container spacing={2}>
                    <Box p={2} className="text-break">

                        {JSON.stringify(fieldValue)}
                    </Box>

                </Grid>

           
        </div>
    )
}

export default Finished
