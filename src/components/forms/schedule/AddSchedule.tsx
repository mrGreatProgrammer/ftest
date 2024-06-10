import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
} from "antd";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { EventC } from "../../../types/appTypes";
import { addShedule } from "../../../api/scheduleApi";
import { lesson } from "../../../api/fakeData";
import { FaCircleMinus } from "react-icons/fa6";
import { GoPlusCircle } from "react-icons/go";

const AddSchedule = () => {
  const dispatch = useAppDispatch();
  const { isFetchingEdit } = useAppSelector((state) => state.scheduleSlice);

  function submit(data: EventC) {
    console.log("login data:", data);
    dispatch(addShedule(data));
  }

  return (
    <div>
      <Card title={"Добавить расписание"}>
        <Form
          name="schedule"
          className="schedule"
          initialValues={{ remember: false }}
          onFinish={submit}
        >
          <Form.Item<EventC>
            name="date"
            rules={[{ required: true, message: "Введите Ваш email!" }]}
          >
            <DatePicker format={"YYYY-MM-DD"} placeholder="Дата" />
          </Form.Item>
          <Form.List name="events">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row>
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[{ required: true, message: "Missing title" }]}
                    >
                      <Select placeholder="Выбрать предмет">
                        {lesson.map((l) => (
                          <Select.Option value={l.title} >{l.title}</Select.Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Col
                      key={key}
                    //   style={{ display: "flex", marginBottom: 8 }}
                    //   align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "startTime"]}
                        rules={[
                          { required: true, message: "Missing start time" },
                        ]}
                      >
                        <DatePicker.TimePicker format={"HH-mm"} placeholder="start time" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "endTime"]}
                        rules={[
                          { required: true, message: "Missing end time" },
                        ]}
                      >
                        <DatePicker.TimePicker format={"HH-mm"} placeholder="end time" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        {...restField}
                        name={[name, "paid"]}
                        label="Paid"
                      >
                        <Switch defaultValue={false} />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        {...restField}
                        name={[name, "closed"]}
                        label="Closed"
                        
                      >
                        <Switch defaultValue={false} />
                      </Form.Item>
                    </Col>
                    <FaCircleMinus onClick={() => remove(name)} />
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<GoPlusCircle />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddSchedule;
