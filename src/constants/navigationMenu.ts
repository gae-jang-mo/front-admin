export interface NavigationMenu {
    key: string;
    iconKey: string;
    link: string;
    description: string;
}

const user: NavigationMenu = {
    key: 'user',
    iconKey: 'user',
    link: '/user',
    description: '회원',
};

const product: NavigationMenu = {
    key: 'product',
    iconKey: 'qq',
    link: '/product',
    description: '장비',
};

const data: NavigationMenu = {
    key: 'data',
    iconKey: 'bar-chart',
    link: '/data',
    description: '데이터',
};

export const navigationMenus: NavigationMenu[] = [user, product, data];
