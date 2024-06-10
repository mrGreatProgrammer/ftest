import { Button, Card, Form, Row, Upload } from "antd";
import React from "react";
import { IUserInfo } from "../../../../types/userType";
import { FaPlus } from "react-icons/fa";

const ProfileForm = () => {
  function submit(data: any) {}

  return (
    <div>
      <Card title={"Профиль"}>
        <Form
          name="schedule"
          className="schedule"
          initialValues={{ remember: false }}
          onFinish={submit}
        >
          <Form.Item<IUserInfo>
            name="avatar"
            rules={[{ required: true, message: "Введите Ваш email!" }]}
          >
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              // beforeUpload={beforeUpload}
              // onChange={handleChange}
            >
                <FaPlus />
              {/* <Button icon={<FaPlus />} >
                upload
              </Button> */}
              {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
            </Upload>

            {/* <DatePicker format={"YYYY-MM-DD"} placeholder="Дата" /> */}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Сохранить изменение
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ProfileForm;
