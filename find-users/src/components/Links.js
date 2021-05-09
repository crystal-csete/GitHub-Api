import React from 'react'
import { Collapse, Card } from 'antd'


const Links = () => {
    const { Panel } = Collapse;

    const text1 = 
        <a href="https://docs.github.com/en" target="_blank" rel="noreferrer">GitHub Documentation</a>

    const text2 = 
        <a href="https://medium.com/" target="_blank" rel="noreferrer">Search Medium Articles</a>

    const text3 = 
        <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">Download Visual Studio Code</a>

    return (
        <Card title="Helpful Links!" style={{ textAlign: 'center', minHeight: "90vh", height: "100%", width: "100%"}}>
           <Collapse accordion style={{ textAlign: "start" }}>
            <Panel header="GitHub documentation" key="1">
                <p>{text1}</p>
            </Panel>
            <Panel header="Search for articles about GitHub" key="2">
                <p>{text2}</p>
            </Panel>
            <Panel header="Download Visual Studio Code" key="3">
                <p>{text3}</p>
            </Panel>
        </Collapse> 
        </Card>
    )
}

export default Links
