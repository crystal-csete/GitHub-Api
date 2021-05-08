import React, { useState } from 'react'
import { Button } from "antd";
import 'antd/dist/antd.css';


const Footer = () => {
    const [bottom, setBottom] = useState(10)

    return (
        
        <div style={{ background: 'rgba(255, 255, 255, 0.3)', height: '6rem', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <Button type="text" onClick={() => setBottom(bottom + 10)}>
                <p style={{ color: '#fff' }}>Copyright &#169; 2021 Crystal's Pages All Rights Reserved.</p>
                </Button>
            </div>
        </div>
        
    )
}

export default Footer
