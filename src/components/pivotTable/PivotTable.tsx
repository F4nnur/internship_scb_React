import {memo, useState} from 'react';
import PivotTableItem from './PivotTableItem';
import  s from './PivotTable.module.scss';


let items = [

    {
        title: "14.02.2022-20.02.2022", hoursTimer:"00:40:00", hoursTurnstile: "08:40:00",
        date1: "14", weekDay1: "понедельник",timeOnTimer1: "09:00", timeTurnstile1: "08:00",
        date2: "15",weekDay2: "вторник",timeOnTimer2: "09:00", timeTurnstile2: "08:00",
        date3: "16",weekDay3: "среда",timeOnTimer3: "09:00", timeTurnstile3: "08:00",
        date4: "17",weekDay4: "четверг",timeOnTimer4: "09:00", timeTurnstile4: "08:00",
        date5: "18",weekDay5: "пятница",timeOnTimer5: "09:00", timeTurnstile5: "08:00",
        date6: "19",weekDay6: "суббота",timeOnTimer6: "09:00", timeTurnstile6: "08:00",
        date7: "20",weekDay7: "воскресенье",timeOnTimer7: "09:00", timeTurnstile7: "08:00"
    },
    {
        title: "14.02.2022-20.02.2022", hoursTimer:"00:40:00", hoursTurnstile: "08:40:00",
        date1: "14", weekDay1: "понедельник",timeOnTimer1: "09:00", timeTurnstile1: "08:00",
        date2: "15",weekDay2: "вторник",timeOnTimer2: "09:00", timeTurnstile2: "08:00",
        date3: "16",weekDay3: "среда",timeOnTimer3: "09:00", timeTurnstile3: "08:00",
        date4: "17",weekDay4: "четверг",timeOnTimer4: "09:00", timeTurnstile4: "08:00",
        date5: "18",weekDay5: "пятница",timeOnTimer5: "09:00", timeTurnstile5: "08:00",
        date6: "19",weekDay6: "суббота",timeOnTimer6: "09:00", timeTurnstile6: "08:00",
        date7: "20",weekDay7: "воскресенье",timeOnTimer7: "09:00", timeTurnstile7: "08:00"
    },
    {
        title: "14.02.2022-20.02.2022", hoursTimer:"00:40:00", hoursTurnstile: "08:40:00",
        date1: "14", weekDay1: "понедельник",timeOnTimer1: "09:00", timeTurnstile1: "08:00",
        date2: "15",weekDay2: "вторник",timeOnTimer2: "09:00", timeTurnstile2: "08:00",
        date3: "16",weekDay3: "среда",timeOnTimer3: "09:00", timeTurnstile3: "08:00",
        date4: "17",weekDay4: "четверг",timeOnTimer4: "09:00", timeTurnstile4: "08:00",
        date5: "18",weekDay5: "пятница",timeOnTimer5: "09:00", timeTurnstile5: "08:00",
        date6: "19",weekDay6: "суббота",timeOnTimer6: "09:00", timeTurnstile6: "08:00",
        date7: "20",weekDay7: "воскресенье",timeOnTimer7: "09:00", timeTurnstile7: "08:00"
    },
    {
        title: "14.02.2022-20.02.2022", hoursTimer:"00:40:00", hoursTurnstile: "08:40:00",
        date1: "14", weekDay1: "понедельник",timeOnTimer1: "09:00", timeTurnstile1: "08:00",
        date2: "15",weekDay2: "вторник",timeOnTimer2: "09:00", timeTurnstile2: "08:00",
        date3: "16",weekDay3: "среда",timeOnTimer3: "09:00", timeTurnstile3: "08:00",
        date4: "17",weekDay4: "четверг",timeOnTimer4: "09:00", timeTurnstile4: "08:00",
        date5: "18",weekDay5: "пятница",timeOnTimer5: "09:00", timeTurnstile5: "08:00",
        date6: "19",weekDay6: "суббота",timeOnTimer6: "09:00", timeTurnstile6: "08:00",
        date7: "20",weekDay7: "воскресенье",timeOnTimer7: "09:00", timeTurnstile7: "08:00"
    },
]

const PivotTable = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const btnOnClick = (index: number) => {
        setCurrentIndex((currentValue) => (currentValue !== index ? index : -1));
    };

    return (
        <div className={s.container}>
            <div className={s.title}>Сводная</div>
            <div className={s.col_names}>
                <p>Дни</p>
                <p>По таймеру</p>
                <p>По турникету</p>
            </div>
            {items.map((item, index) => (
                <PivotTableItem
                    key={index}
                    data={item}
                    btnOnClick={() => btnOnClick(index)}
                    isOpen={index === currentIndex}
                />
            ))}
        </div>
    );
}

export default memo(PivotTable);