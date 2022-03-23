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
        disableRipple
        >
        {children}
    </LoadingButton>
    )
}

export default SubmitButton