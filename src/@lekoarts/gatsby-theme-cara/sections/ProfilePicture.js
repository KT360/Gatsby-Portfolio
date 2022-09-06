import React from "react";

const p_style = 
{
    width:260,
    height:260,
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
            <img src={'pfp.jpg'} style={{width:220, height:260, borderRadius:110}} alt="test"/>
        </div>
    );
}

export default ProfilePicture;