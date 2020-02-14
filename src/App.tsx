import React from 'react';
import { Layout } from 'antd';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function App() {
    const { Content } = Layout;

    return (
        <Layout>
            <Navigation />
            <Layout style={{ marginLeft: 200 }}>
                <Content></Content>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default App;
