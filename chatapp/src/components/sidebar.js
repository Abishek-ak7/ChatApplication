import React from 'react';
import MSG from './msg';

const Sidebar = () => {
    const style = {
        backgroundColor: 'black',
        color: 'white',
        backgroundSize:'cover',
        width: '100%',
        height: '100%',
        padding:'10px',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div style={{ padding: '9px',marginBottom:'5px' }}>
            <div className='bg' style={style}>
                <MSG />
            </div>
        </div>
    );
}

export default Sidebar;
