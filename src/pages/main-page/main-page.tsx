import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
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
                        {
                            key: '5',
                            icon: <ExitIcon />,
                            label: 'Выход',
                        },
                    ]}
                />
            </Sider>
            <Layout style={{ backgroundColor: 'transparent' }}>
                <Header />
                <Content>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};
