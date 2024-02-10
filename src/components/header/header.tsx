import { Typography, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import styles from './header.module.css';

const { Text, Title } = Typography;

const Header = () => {
    return (
        <header className={styles.header}>
            <Text className={styles.name_page}>Главная</Text>
            <div className={styles.wrapper}>
                <Title className={styles.title} style={{ marginBottom: '10px' }}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Title>
                <Button
                    className={styles.btn}
                    style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}
                    icon={<SettingOutlined />}
                >
                    Настройки
                </Button>
            </div>
        </header>
    );
};

export default Header;
