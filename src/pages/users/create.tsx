import {Create, TextField, useForm} from "@refinedev/antd";
import {DatePicker, Form, Input, InputNumber} from "antd";

export const UserCreate = () => {
    const {formProps, saveButtonProps} = useForm({});

    return (
        <Create saveButtonProps={saveButtonProps}>
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
                >
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
        </Create>
    );
};
