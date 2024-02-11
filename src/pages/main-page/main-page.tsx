import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Divider } from 'antd';
import Header from '@components/header/header';
import Content from '@components/content/content';
import bgImage from '@public/img/images/main_page_light.jpg';
import logoMax from '@public/img/icons/Logo_max.svg';
import logoSmall from '@public/img/icons/Logo_small.svg';
import Footer from '@components/footer/footer';
import {
    HeartIcon,
    CalendarIcon,
    CupIcon,
    ProfileIcon,
    ExitIcon,
} from '@public/img/icons/custom-svg';

import styles from './main-page.module.css';

const { Sider } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleTrigger = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout
            className={styles.layout}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Sider
                className={styles.sider}
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={64}
                width={208}
            >
                <div>
                    <div className={collapsed ? styles.logo_small : styles.logo}>
                        <img
                            className={styles.logo_img}
                            src={collapsed ? logoSmall : logoMax}
                            alt='cleverfit'
                        />
                    </div>
                    <Menu
                        className={styles.menu}
                        theme='light'
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: <CalendarIcon />,
                                label: 'Календарь',
                            },
                            {
                                key: '2',
                                icon: <HeartIcon />,
                                label: 'Тренировки',
                            },
                            {
                                key: '3',
                                icon: <CupIcon />,
                                label: 'Достижения',
                            },
                            {
                                key: '4',
                                icon: <ProfileIcon />,
                                label: 'Профиль',
                            },
                        ]}
                    />
                </div>
                <div>
                    <Divider style={{ margin: '0' }} />
                    <Menu
                        className={styles.menu_exit}
                        theme='light'
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: <ExitIcon />,
                                label: 'Выход',
                            },
                        ]}
                    />
                </div>
            </Sider>
            <Layout style={{ backgroundColor: 'transparent', position: 'relative' }}>
                {collapsed ? (
                    <Button
                        className={styles.trigger}
                        style={{ border: 'none', position: 'absolute' }}
                        icon={<MenuUnfoldOutlined />}
                        onClick={handleTrigger}
                    />
                ) : (
                    <Button
                        className={styles.trigger}
                        style={{ border: 'none', position: 'absolute' }}
                        icon={<MenuFoldOutlined />}
                        onClick={handleTrigger}
                    />
                )}
                <Header />
                <Content></Content>
                <Footer />
            </Layout>
        </Layout>
    );
};
