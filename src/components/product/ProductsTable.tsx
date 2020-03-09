import * as React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '이미지',
        dataIndex: 'image',
        key: 'image',
    },
    {
        title: '제품명',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '구매링크',
        dataIndex: 'link',
        key: 'link',
    },
    {
        title: '최저가',
        dataIndex: 'lowestPrice',
        key: 'lowestPrice',
    },
    {
        title: '최고가',
        dataIndex: 'highestPrice',
        key: 'highestPrice',
    },
    {
        title: '수정/삭제',
    },
];

export default class ProductsTable extends React.Component<any> {
    render() {
        const dataSource = [
            {
                id: '1',
                image: 'Mike',
                title: 32,
                link: '10 Downing Street',
                lowestPrice: '10 Downing Street',
                highestPrice: '10 Downing Street',
            },
        ];

        return <Table dataSource={dataSource} columns={columns} />;
    }
}
