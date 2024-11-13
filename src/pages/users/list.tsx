import {
    DeleteButton,
    EditButton, getDefaultSortOrder,
    List,
    ShowButton,
    useTable,
} from "@refinedev/antd";
import type {BaseRecord} from "@refinedev/core";
import {Space, Table} from "antd";

export const UserList = () => {
    const {tableProps, sorters} = useTable({
        sorters: {initial: [{field: "id", order: "asc"}]},
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="name" title={"Name"} sorter
                              defaultSortOrder={getDefaultSortOrder("id", sorters)}/>
                <Table.Column dataIndex="profession" title={"Profession"} sorter/>
                <Table.Column dataIndex="phoneNumber" title={"Phone Number"}/>
                <Table.Column dataIndex="salary" title={"Salary"}/>
                <Table.Column
                    title={"Actions"}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.id}/>
                            <ShowButton hideText size="small" recordItemId={record.id}/>
                            <DeleteButton hideText size="small" recordItemId={record.id}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
