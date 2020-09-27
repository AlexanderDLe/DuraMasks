import React from 'react';

export default ({
    formValues,
    handleFieldChange,
    name,
    label,
    error,
    extraStyles,
    disabled,
    type,
    maxLength,
}) => {
    return (
        <div
            style={{
                position: 'relative',
                marginTop: -8,
                ...(extraStyles || {}),
            }}
        >
            <input
                style={{
                    width: '100%',
                    fontSize: '20px',
                    marginTop: '24px',
                    position: 'relative',
                    padding: '10px',
                    paddingTop: '10px',
                    height: '45px',
                    border: `1px solid ${error ? 'red' : 'lightgrey'}`,
                    borderRadius: '5px',
                    backgroundColor: 'white !important',
                    pointerEvents: disabled ? 'none' : 'yes',
                    color: disabled ? 'grey' : '',
                }}
                autoComplete={disabled ? 'off' : 'on'}
                name={name}
                onChange={(e) => {
                    let val = e.target.value;
                    if (type === 'number') {
                        if (val === '0');
                        else if (val.length > 0 && !Number(val)) {
                            // val.length > 0 because you do not want to prevent
                            // yourself from deleting first number
                            console.log(val);
                            return;
                        }
                    }
                    handleFieldChange(e);
                }}
                value={formValues[name] || ''}
                maxLength={maxLength ? maxLength : 524288}
            />
            <div
                style={{
                    position: 'absolute',
                    fontSize: '0.8rem',
                    bottom: '35px',
                    padding: 2,
                    left: '2px',
                    background: 'white',
                    zIndex: 9,
                    color: error ? 'red' : 'black',
                }}
            >
                {label} {error ? error : ''}
            </div>
        </div>
    );
};
