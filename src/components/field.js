import React from 'react';

export default props => {
  
    return (
        <div className="form-group">
            <label>{ props.label }</label>
            <input {...props} className="form-control"/> 
            {/* destructuring to add all the contents of props*/ }
        </div>
    )
}