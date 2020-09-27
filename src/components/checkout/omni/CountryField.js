import React from 'react';

export default () => {
    return (
        <div
            style={{
                position: 'relative',
                marginTop: -8,
            }}
        >
            <div
                style={{
                    width: '100%',
                    fontSize: '20px',
                    marginTop: '24px',
                    position: 'relative',
                    padding: '10px',
                    paddingTop: '10px',
                    height: '45px',
                    border: `1px solid 'lightgrey'`,
                    borderRadius: '5px',
                    backgroundColor: 'white !important',
                    color: 'grey',
                }}
            >
                USA
            </div>
            <div
                style={{
                    position: 'absolute',
                    fontSize: '0.8rem',
                    bottom: '35px',
                    padding: 2,
                    left: '2px',
                    background: 'white',
                    zIndex: 9,
                    color: 'black',
                }}
            >
                Country
            </div>
        </div>
    );
};
