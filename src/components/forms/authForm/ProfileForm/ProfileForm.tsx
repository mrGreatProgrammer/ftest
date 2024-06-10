import { Button, Card, DatePicker, Form, Input, Row, Upload } from "antd";
import React from "react";
import { IUserInfo } from "../../../../types/userType";
import { FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { editProfile } from "../../../../api/usersApi";
import dayjs from 'dayjs';

const ProfileForm = () => {
  const { userInfo,isFetchingUser } = useAppSelector((state) => state.usersSlice);
    const dispatch = useAppDispatch();

  function submit(data: any) {
    dispatch(editProfile(data))
  }

  return (
    <div>
      <Card title={"Профиль"}>
        <Form
          name="schedule"
          className="schedule"
          initialValues={{ remember: false }}
          onFinish={submit}
        >
          <Form.Item<IUserInfo> name="avatar">
            <Upload
                disabled
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              multiple={false}
              showUploadList
            //   action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              beforeUpload={() => false}
              // //   @ts-ignore
              // defaultFileList={[userInfo?.avatar]}
              // onChange={handleChange}
            >
              {userInfo?.avatar ? (
                <img
                  className="rounded-full"
                  src={userInfo?.avatar}
                  alt="avatar"
                />
              ) : (
                <FaPlus />
              )}
            </Upload>
          </Form.Item>
          <Form.Item<IUserInfo>
            name="userName"
            label="Ваше имя"
            // rules={[{ required: true, message: "Введите Ваше имя!" }]}
          >
            <Input defaultValue={userInfo?.userName} />
          </Form.Item>
          <Form.Item<IUserInfo>
            name="email"
            label="Email"
            // rules={[{ required: true, message: "Введите Ваш email!" }]}
          >
            <Input type="email" defaultValue={userInfo?.email} />
          </Form.Item>
          <Form.Item<IUserInfo>
            name="birthDate"
            label="День рождение"
            // rules={[{ required: true, message: "Введите Ваш днюха!" }]}
          >
            <DatePicker defaultValue={dayjs(userInfo?.birthDate)} />
          </Form.Item>
          <Form.Item>
            <Button loading={isFetchingUser} type="primary" htmlType="submit" className="w-full">
              Сохранить изменение
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ProfileForm;
