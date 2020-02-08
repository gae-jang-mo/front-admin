import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { navigationMenus } from '../constants/navigationMenu';
// import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <Layout.Sider
            style={{
                overflow: 'auto',
                height: '100%',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className="logo ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-5 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4">
                <a id="logo" href="/">
                    <img
                        className="ant-col-xs-24 ant-col-sm-24"
                        src="https://gaejangmo.com/img/logo.fb5c919d.png"
                        alt=""
                    />
                </a>
            </div>

            <Menu theme="dark" mode="inline">
                {navigationMenus.map(menu => {
                    return (
                        <Menu.Item key={menu.key}>
                            <Icon type={menu.iconKey} />
                            <span>{menu.description}</span>
                            {/*<Link to={menu.link} />*/}
                        </Menu.Item>
                    );
                })}
            </Menu>
        </Layout.Sider>
    );
}
