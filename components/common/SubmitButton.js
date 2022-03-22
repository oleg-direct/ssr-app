import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const SubmitButton = (props) => {
const { children, loading } = props

return (
    <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={loading}
        // sx={{
        //     'box-shadow': '0px 8px 20px 0px rgb(103 58 183 / 30%)'
        // }}
        >
        {children}
    </LoadingButton>
    )
}

export default SubmitButton