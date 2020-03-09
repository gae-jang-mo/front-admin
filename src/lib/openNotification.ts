import { notification } from 'antd';

export const openNotification = (message: string, onClick?: (...args: any[]) => void) => {
    notification.open({
        message,
        onClick,
    });
};
