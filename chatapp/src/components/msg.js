import React from 'react';
import {Forum} from '@mui/icons-material'
import { EmailOutlined } from '@mui/icons-material';
import { NotificationsNone } from '@mui/icons-material';
import { DeleteSweep } from '@mui/icons-material';
import { AccountCircleOutlined } from '@mui/icons-material';
import { StarOutlined } from '@mui/icons-material';


const msg = () =>{
    return(
        <div style={{paddingTop:'20%',display:'flex',flexDirection:'column'}}>
            <StarOutlined style={{color:'orange',marginBottom:'30vh'}}/>
            <EmailOutlined style={{color:'white',marginBottom:'5vh'}}/>
            <Forum style={{color:'white',marginBottom:'5vh'}}/>
            <NotificationsNone style={{color:'white',marginBottom:'5vh'}}/>
            <DeleteSweep style={{color:'white',marginBottom:'26vh'}}/>
            <AccountCircleOutlined style={{color:'white'}}/>

        </div>
        
    );

}
export default msg;