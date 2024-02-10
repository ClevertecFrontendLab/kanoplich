import { Card, Button, Anchor } from 'antd';
import {
    IdcardOutlined,
    HeartOutlined,
    CalendarOutlined,
    AppleOutlined,
    AndroidOutlined,
} from '@ant-design/icons';

import styles from './content.module.css';

const { Link } = Anchor;

type Props = {
    children: JSX.Element;
};

const Content = ({ children }: Props) => {
    return (
        <main className={styles.main}>
            {children}
            <Card>
                <h3>C CleverFit ты сможешь:</h3>
                <p>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
                <p>
                    — отслеживать свои достижения в разделе статистики, сравнивая свои результаты c
                    нормами и рекордами;
                </p>
                <p>
                    — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы o
                    тренировках;
                </p>
                <p>
                    — выполнять расписанные тренировки для разных частей тела, следуя подробным
                    инструкциям и советам профессиональных тренеров.
                </p>
            </Card>
            <Card>
                <p>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </p>
            </Card>
            <div className={styles.wrapper}>
                <Card>
                    <p>Расписать тренировки</p>
                    <Button icon={<HeartOutlined />}>Тренировки</Button>
                </Card>
                <Card>
                    <p>Назначить календарь</p>
                    <Button icon={<CalendarOutlined />}>Календарь</Button>
                </Card>
                <Card>
                    <p>Заполнить профиль</p>
                    <Button icon={<IdcardOutlined />}>Профиль</Button>
                </Card>
            </div>
            <div>
                <Button>Смотреть отзывы</Button>
                <div>
                    <Link href='!#' title='Скачать на телефон' />
                    <Link href='!#' title='Доступно в PRO-тарифе' />
                    <div>
                        <Button icon={<AndroidOutlined />}>Android OS</Button>
                        <Button icon={<AppleOutlined />}>Apple iOS</Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Content;
