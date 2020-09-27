import React from 'react';

const monthList = [
    '',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
];

export default ({
    formValues,
    handleFieldChange,
    name,
    label,
    error,
    extraStyles,
}) => {
    return (
        <div
            style={{
                position: 'relative',
                ...extraStyles,
            }}
        >
            <select
                style={{
                    width: '100%',
                    fontSize: '20px',
                    marginTop: '24px',
                    position: 'relative',
                    padding: '6px',
                    paddingRight: '20px',
                    paddingTop: '10px',
                    height: '45px',
                    border: `1px solid ${error ? 'red' : 'lightgrey'}`,
                    borderRadius: '5px',
                    backgroundColor: 'white !important',
                }}
                value={formValues[name]}
                onChange={(e) => {
                    const event = {
                        target: {
                            name,
                            value: e.target.value,
                        },
                    };
                    console.log('event', event);
                    handleFieldChange(event);
                }}
            >
                {monthList.map((MM) => {
                    return (
                        <option name={name} value={MM} key={MM}>
                            {MM}
                        </option>
                    );
                })}
            </select>
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
