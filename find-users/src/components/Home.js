import React from "react";
import "antd/dist/antd.css";
import { PageHeader, Descriptions, Carousel } from "antd";

const Home = () => {
  const contentStyle = {
    height: "160px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
    fontSize: '1.5rem',
  };

  return (
    <div style={{ minHeight: "90vh", height: "100%", width: "100%" }}>
      <PageHeader
        style={{ background: "rgba(255, 255, 255, 0.3)" }}
        ghost={false}
        title="Home"
        subTitle="Your personal portal to find Github User Stats"
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created By">Crystal's Pages</Descriptions.Item>
        </Descriptions>
      </PageHeader>

        
           <Carousel autoplay>
          <div>
          <p style={contentStyle}>
            Welcome to my page!  
          </p>
          </div>
          <div>
            <p style={contentStyle}>Here, you will be able to search for real users
            that have accounts on Github.</p>
          </div>
          <div>
            <p style={contentStyle}>Click 'Users' above to get started.</p>
          </div>
          <div>
            <p style={contentStyle}>Also, click the Github logo to go directly to the Github website.</p>
          </div>
        </Carousel>

        
        </div>
  );
};

export default Home;
