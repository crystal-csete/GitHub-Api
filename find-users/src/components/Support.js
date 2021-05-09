import React from 'react'
import { Collapse, Card } from 'antd'

const Support = () => {
    const { Panel } = Collapse;

    const text1 = `
        Search for GitHub users that have repositories. Navigate to the 'GitHub Users' tab above. Then type their GitHub name in the search field. 
    `

    const text2 = `
        Click on the link in their profile, and go to their GitHub profile page. You can also click on the icon at the top of this site, and go straight to GitHub. 
    `

    return (
        <Card title="Have Questions?" style={{ textAlign: 'center', minHeight: "90vh", height: "100%", width: "100%" }}>
           <Collapse accordion style={{ textAlign: "start" }}>
            <Panel header="How do I look for GitHub users?" key="1">
                <p>{text1}</p>
            </Panel>
            <Panel header="How do I see thier profile on GitHub?" key="2">
                <p>{text2}</p>
            </Panel>
        </Collapse> 
        </Card>
        
    )
}

export default Support
