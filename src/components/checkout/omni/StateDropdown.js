import React from 'react';

const stateList = [
    '',
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
];

export default ({ formValues, handleFieldChange, name, label, error }) => {
    return (
        <div
            style={{
                position: 'relative',
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
                    handleFieldChange(event);
                }}
            >
                {stateList.map((state) => {
                    return (
                        <option name={name} value={state} key={state}>
                            {state}
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
