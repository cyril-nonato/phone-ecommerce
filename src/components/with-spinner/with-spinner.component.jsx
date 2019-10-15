import React from 'react'
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ loading, error, ...otherProps }) => {
    if(error) {

      throw Error;
    }
    
    if (loading) {
      return (
        <Spinner />
      )
    }

    return (
      <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner;

