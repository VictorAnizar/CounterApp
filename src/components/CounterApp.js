import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//material
import Button from '@mui/material/Button';


const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(value)
    }, [])

    const handleClicAdd = () => {
        setCounter(counter + 1)
    }

    const handleClicLess = () => {
        setCounter(counter - 1)
    }

    const handleClicReset = () => {
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <Button
                variant="outlined"
                onClick={handleClicAdd}
            >Aumentar</Button>

            <Button
                variant="outlined"
                onClick={handleClicLess}
            >Reducir</Button>

            <Button
                variant="outlined"
                onClick={handleClicReset}
            >Reiniciar</Button>

        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;