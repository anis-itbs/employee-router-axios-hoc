import './LoadingSpinner.css'
import React from 'react'

export default function LoadingSpinner(Component) {

    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) {console.log("component"+isLoading); return (<Component {...props} />); }
        return (<div className="lds-dual-ring"></div>);
      }
}
