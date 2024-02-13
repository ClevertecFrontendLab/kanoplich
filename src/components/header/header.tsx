import { Button, Breadcrumb, Grid } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import styles from './header.module.css';

const { useBreakpoint } = Grid;

const Header = () => {
    const screens = useBreakpoint();
    return (
        <header className={styles.header}>
            <Breadcrumb className={styles.name_page}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    Приветствуем тебя в <h1 className={styles.title_h}>CleverFit</h1> — приложении,{' '}
                    <br />
                    которое поможет тебе добиться своей мечты!
                </div>
                <Button
                    className={styles.btn}
                    style={{
                        border: screens.md ? 'none' : '',
                        background: screens.md ? 'transparent' : '',
                        boxShadow: screens.md ? 'none' : '',
                    }}
                    icon={
                        (screens.lg && <SettingOutlined />) || (!screens.md && <SettingOutlined />)
                    }
                    shape='circle'
                >
                    {screens.md && 'Настройки'}
                </Button>
            </div>
        </header>
    );
};

export default Header;
