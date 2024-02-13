import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Divider, Grid } from 'antd';
import Header from '@components/header/header';
import Content from '@components/content/content';
import bgImage from '/img/images/main_page_light.jpg';
import logoMax from '/img/icons/Logo_max.svg';
import logoSmall from '/img/icons/Logo_small.svg';
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
const { useBreakpoint } = Grid;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();

    const maxWidth = screens.sm ? 208 : 106;
    const minWidth = screens.sm ? 64 : 0;
    const styleLeft = !screens.sm ? (collapsed ? '0' : '106px') : '0';

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
                collapsedWidth={minWidth}
                width={maxWidth}
                style={{ position: screens.sm ? 'relative' : 'fixed' }}
            >
                <div>
                    <div className={styles.logo}>
                        <img
                            className={collapsed ? styles.logo_img_small : styles.logo_img}
                            src={collapsed ? logoSmall : logoMax}
                            alt='CleverFit'
                        />
                    </div>
                    <Menu
                        className={styles.menu}
                        theme='light'
                        mode='inline'
                        items={[
                            {
                                key: '1',
                                icon: screens.sm && <CalendarIcon />,
                                label: 'Календарь',
                            },
                            {
                                key: '2',
                                icon: screens.sm && <HeartIcon />,
                                label: 'Тренировки',
                            },
                            {
                                key: '3',
                                icon: screens.sm && <CupIcon />,
                                label: 'Достижения',
                            },
                            {
                                key: '4',
                                icon: screens.sm && <ProfileIcon />,
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
                                icon: screens.sm && <ExitIcon />,
                                label: 'Выход',
                            },
                        ]}
                    />
                </div>
            </Sider>
            <Layout style={{ backgroundColor: 'transparent', position: 'relative' }}>
                {collapsed ? (
                    <Button
                        data-test-id={screens.xs ? 'sider-switch-mobile' : 'sider-switch'}
                        className={styles.trigger}
                        style={{
                            border: 'none',
                            position: screens.xs ? 'fixed' : 'absolute',
                            left: styleLeft,
                        }}
                        icon={<MenuUnfoldOutlined />}
                        onClick={handleTrigger}
                    />
                ) : (
                    <Button
                        data-test-id={screens.xs ? 'sider-switch-mobile' : 'sider-switch'}
                        className={styles.trigger}
                        style={{
                            border: 'none',
                            position: screens.xs ? 'fixed' : 'absolute',
                            left: styleLeft,
                        }}
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
