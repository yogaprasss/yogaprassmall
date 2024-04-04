import styles from './Notification.module.css';

import { useEffect, type FC } from 'react';

interface NotificationProps {
  isShow: boolean;
  onClose: () => void;
  text: string;
}

const Notification: FC<NotificationProps> = ({ isShow, onClose, text }) => {
  useEffect(() => {
    if (isShow) {
      const timeout = setTimeout(() => onClose(), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isShow, onClose]);

  if (!isShow) return <></>;
  return (
    <div className={styles.notification}>{text}</div>
  )
};

export default Notification;
