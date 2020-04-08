import { notification } from 'antd';

export const notify = props => {
  notification.open({
    message: 'Notification',
    description: `${props}`,
    onClick: () => {}
  });
};
