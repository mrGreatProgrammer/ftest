import React from "react";
import { Button, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { loginApi } from "../../../../api/usersApi";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import "./authForm.scss";
import { loginFormType } from "../../../../types/userType";

const LoginForm: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isFetchingUser } = useAppSelector((state) => state.usersSlice);

  function login(data: loginFormType) {
    console.log("login data:", data);
    dispatch(loginApi(data));
  }

  return (
    <div 
    // className="flex justify-center"
    >
      <div className="w-[400px]">
        <Card
          title={"Войти"}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={login}
          >
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input addonBefore="+7" placeholder="Номер телефона" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Link className="underline text-blue-500" to="/forgot-password">
                Забили пароль?
              </Link>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Войти
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;