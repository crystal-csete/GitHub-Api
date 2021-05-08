import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const SignIn = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("You have signed in");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("the modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ minHeight: "90vh", height: "100%", width: "100%" }}>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          paddingTop: "10rem",
        }}
      >
        <Form.Item
          style={{ width: "50%" }}
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          style={{ width: "50%" }}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a href="/" target="_blank" rel="noreferrer">
          Forgot password
        </a> */}
        <Form.Item>
          <Button onClick={showModal} style={{ margin: "2rem" }} type="primary" htmlType="submit">
            Sign In
          </Button>
          <Modal
            title="Sign In Status..."
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
