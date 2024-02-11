import { Card, Button, Divider } from 'antd';
import { IdcardTwoTone, AppleFilled, AndroidFilled } from '@ant-design/icons';
import { HeartIconBlue, CalendarIconBlue } from '@public/img/icons/custom-svg';

import styles from './content.module.css';

const Content = () => {
    return (
        <main className={styles.main}>
            <div className={styles.card_wrapper}>
                <Card className={styles.card} style={{ color: '#061178', marginBottom: '24px' }}>
                    <p style={{ marginBottom: '0' }}>
                        C CleverFit ты сможешь:
                        <br />
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                        <br />— отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты c нормами и рекордами;
                        <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и
                        отзывы o тренировках;
                        <br />— выполнять расписанные тренировки для разных частей тела, следуя
                        подробным инструкциям и советам профессиональных тренеров.
                    </p>
                </Card>
                <Card className={styles.card} style={{ marginBottom: '16px' }}>
                    <h4
                        style={{
                            margin: '0',
                            fontSize: '1.25em',
                            fontWeight: '500',
                            lineHeight: '130%',
                        }}
                    >
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </h4>
                </Card>
                <div className={styles.wrapper}>
                    <Card className={styles.card_btn}>
                        <p>Расписать тренировки</p>
                        <Divider style={{ margin: '0' }} />
                        <Button
                            className={styles.btn}
                            icon={<HeartIconBlue />}
                            style={{ border: 'none', boxShadow: 'none' }}
                        >
                            Тренировки
                        </Button>
                    </Card>
                    <Card className={styles.card_btn}>
                        <p>Назначить календарь</p>
                        <Divider style={{ margin: '0' }} />
                        <Button
                            className={styles.btn}
                            icon={<CalendarIconBlue />}
                            style={{ border: 'none', boxShadow: 'none' }}
                        >
                            Календарь
                        </Button>
                    </Card>
                    <Card className={styles.card_btn}>
                        <p>Заполнить профиль</p>
                        <Divider style={{ margin: '0' }} />
                        <Button
                            className={styles.btn}
                            icon={<IdcardTwoTone twoToneColor={'#2F54EB'} />}
                            style={{ border: 'none', boxShadow: 'none' }}
                        >
                            Профиль
                        </Button>
                    </Card>
                </div>
            </div>
            <div className={styles.social_wrapper}>
                <Button
                    className={styles.link_btn}
                    style={{
                        border: 'none',
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                    }}
                >
                    Смотреть отзывы
                </Button>
                <div className={styles.social}>
                    <div className={styles.social_btn_wrapper}>
                        <Button
                            className={styles.social_btn}
                            style={{
                                border: 'none',
                                boxShadow: 'none',
                            }}
                        >
                            Скачать на телефон
                        </Button>
                        <Button
                            style={{
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: 'transparent',
                            }}
                            disabled
                        >
                            Доступно в PRO-тарифе
                        </Button>
                    </div>
                    <Divider style={{ margin: '0' }} />
                    <div className={styles.social_mobile}>
                        <Button
                            icon={<AndroidFilled />}
                            style={{
                                border: 'none',
                                boxShadow: 'none',
                                padding: '12px 0',
                            }}
                        >
                            Android OS
                        </Button>
                        <Button
                            icon={<AppleFilled />}
                            style={{
                                border: 'none',
                                boxShadow: 'none',
                                padding: '12px 0',
                            }}
                        >
                            Apple iOS
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Content;
