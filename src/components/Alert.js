import React from 'react'

function Alert(props) {
    const captalize = (msg)=>{
        const lower = msg.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // Helper function to get alert styling based on mode
    const getAlertStyle = () => {
        if (props.mode === 'dark') {
            return {
                backgroundColor: '#495057',
                color: '#f8f9fa',
                borderColor: '#6c757d'
            };
        } else if (props.mode === 'purple') {
            return {
                backgroundColor: '#d4c5f9',
                color: '#59359a',
                borderColor: '#a98eda'
            };
        }
        // Default light mode
        return {};
    }

  return (
    <div style={{height:'50px'}}>
      {
        props.alert && <div 
            className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
            role="alert"
            aria-live="polite"
            aria-atomic="true"
            style={getAlertStyle()}
        >
        <strong>{captalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      }
    </div>
    
  )
}

export default Alert
