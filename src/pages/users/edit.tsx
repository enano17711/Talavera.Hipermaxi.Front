import {Edit, useForm} from "@refinedev/antd";
import {DatePicker, Form, Input, InputNumber} from "antd";
import dayjs from 'dayjs';
import type {Dayjs} from 'dayjs';

export const UserEdit = () => {
    const {formProps, saveButtonProps} = useForm({});

    const defaultValue = dayjs('2000-01-01');

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Name"}
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Birth Date"}
                    name={["birthDate"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({value: value ? dayjs(value) : "",})}
                >
                    {/*                    {JSON.stringify(formProps.initialValues?.birthDate)}*/}
                    <DatePicker/>
                </Form.Item>
                <Form.Item
                    label={"Profession"}
                    name={["profession"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Nationality"}
                    name={["nationality"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Phone Number"}
                    name={["phoneNumber"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Salary"}
                    name={["salary"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    label={"Email"}
                    name={["email"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Edit>
    );
};
