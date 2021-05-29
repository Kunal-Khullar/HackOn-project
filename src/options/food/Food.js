import React, { useState } from 'react'
import MButton from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const Food = () => {
    const [water, setWater] = useState(0);
    const top100Films = [
        { title: 'abc' },
        { title: 'shawshank' }
    ]

    return (
        <div>
            hi noob
            <div class='watercounters'>
                <MButton onClick={() => setWater(water - 1)} variant="contained" color="primary">-</MButton>
                {water}
                <MButton onClick={() => setWater(water + 1)} variant="contained" color="primary">+</MButton>
                <br></br>
                <h7>last record time 6:43:12</h7>
            </div>
            <div class="foodDropdown">
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            </div>
        </div>

    )
}

export default Food
