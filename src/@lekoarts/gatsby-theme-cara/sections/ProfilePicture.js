import React from "react";

const p_style = 
{
    width:240,
    height:240,
    backgroundColor:'#0779eb',
    borderRadius:120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

function ProfilePicture()
{
    return(
        <div style={p_style} >
            <img src={'banner.jpg'} style={{width:220, height:220, borderRadius:110}} alt="test"/>
        </div>
    );
}

export default ProfilePicture;