import * as React from 'react';
import { Layout, Icon } from 'antd';

const iconStyle = { fontSize: '30px' };

export function Footer() {
    return (
        <Layout.Footer style={{ textAlign: 'center' }}>
            <a href="https://www.facebook.com/gaejangmo">
                <Icon style={iconStyle} type="facebook" />
            </a>
            <a href="https://github.com/gae-jang-mo">
                <Icon style={iconStyle} type="github" />
            </a>
            <a href="https://gaejangmo.com/">
                <Icon style={iconStyle} className="" type="qq" />
            </a>
            <a href="https://www.instagram.com/daejun_bae/">
                <Icon style={iconStyle} type="instagram" />
            </a>
        </Layout.Footer>
    );
}
