import {DateField, Show, TextField} from "@refinedev/antd";
import {useShow} from "@refinedev/core";
import {Table, Typography} from "antd";

const {Title} = Typography;

export const UserShow = () => {
    const {queryResult} = useShow({});
    const {data, isLoading} = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <TextField value={record?.id}/>
            <Title level={5}>{"Name"}</Title>
            <TextField value={record?.name}/>
            <Title level={5}>{"Birth Date"}</Title>
            <DateField value={record?.birthDate}/>
            <Title level={5}>{"Profession"}</Title>
            <TextField value={record?.profession}/>
            <Title level={5}>{"Nationality"}</Title>
            <TextField value={record?.nationality}/>
            <Title level={5}>{"Phone Number"}</Title>
            <TextField value={record?.phoneNumber}/>
            <Title level={5}>{"Email"}</Title>
            <TextField value={record?.email}/>
            <Title level={5}>{"Salary"}</Title>
            <TextField value={record?.salary}/>
        </Show>
    );
};
