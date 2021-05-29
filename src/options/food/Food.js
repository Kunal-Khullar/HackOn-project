import React, { useState } from 'react'
import MButton from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useMutation, gql } from '@apollo/client';
import { ADD_MEAL } from '../../graphql/requests'
const Food = () => {
    const data = require('../../csvjson.json');

    const [sentData, setSentData] = useState(data[0]);
    const [water, setWater] = useState(0);
    var Calcium, Iron, Magnesium, Phosphorus, Potassium, Sodium, Zinc, carbs, email, fats, name, omega3, proteins, vitA, vitC, vitD, vitE;

    const [
        addMeal,
        { data: meal, loading: loadingMeal, error: loadingError },
    ] = useMutation(ADD_MEAL, {
        variables: {
            Calcium: Calcium,
            Iron: Iron,
            Magnesium: Magnesium,
            Phosphorus: Phosphorus,
            Potassium: Potassium,
            Sodium: Sodium,
            Zinc: Zinc,
            carbs: carbs,
            email: email,
            fats: fats,
            name: name,
            omega3: omega3,
            proteins: proteins,
            vitA: vitA,
            vitC: vitC,
            vitD: vitD,
            vitE: vitE
        },
    });

    const addMealAsync = async () => {

        console.log(sentData);
        // const { data } = await createUser();

    };
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
                    options={data}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    value={sentData}
                    onChange={(event, newValue) => {
                        setSentData(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <MButton onClick={() => addMealAsync()} variant="contained" color="dark">ADD</MButton>
            </div>
        </div>

    )
}

export default Food
