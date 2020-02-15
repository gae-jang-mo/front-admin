import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import DashBoard from './containers/Dashboard';
import ProductManagement from './containers/ProductManagement';

function App() {
    return (
        <Layout>
            <Navigation />
            <Layout style={{ marginLeft: 200 }}>
                <Switch>
                    <Route path="/" exact component={DashBoard} />
                    <Route path="/products" component={ProductManagement} />
                </Switch>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default App;
