import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
 'ethereum', 'dogecoin', 'solana','aave','cosmos','osmosis','compound'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 
 

export default function MultipleSelectChip({BitCoins, setBitCoins}) {
  const theme = useTheme();
  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBitCoins(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
 
  return (
    <div style={{ display:"flex", justifyContent: "center",alignItems : "center"}}>
      <FormControl sx={{ m: 1, width: "100%", color : "white" , backgroundColor : "#010714"}}>
        <InputLabel id="demo-multiple-chip-label" style={{ color: 'white' }} > Select coins to see Charts</InputLabel>
        <Select
        style={{ border : "1px solid white"}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={BitCoins}
          onChange={handleChange}
          input=
          {<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} 
            
            >
              {selected.map((value) => (
                <Chip key={value} label={value}  
                sx={{ backgroundColor : "whitesmoke" }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, BitCoins , theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}