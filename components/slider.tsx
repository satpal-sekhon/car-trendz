import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';


export default function InputSlider() {
  const [slideLoanvalue, setSlideLoanValue] = React.useState<number | string | Array<number | string>>(
    30,
  );

  const handleSliderLoanChange = (event: Event, newValue: number | number[]) => {
    setSlideLoanValue(newValue);
  };

  const handleInputLoanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlideLoanValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleLoanBlur = () => {
    if (slideLoanvalue < '0') {
        setSlideLoanValue(0);
    } else if (slideLoanvalue > '100') {
        setSlideLoanValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
     
        
       
          <Slider
            value={typeof slideLoanvalue === 'number' ? slideLoanvalue : 0}
            onChange={handleSliderLoanChange}
            aria-labelledby="input-slider"
          />
      
       
          <MuiInput
            value={slideLoanvalue}
            size="small"
            onChange={handleInputLoanChange}
            onBlur={handleLoanBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        
    </Box>
  );
}