import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Garante que o mês tenha dois dígitos
    return `${now.getFullYear()}-${month}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    const [year, month] = date.split('-').map(Number);

    return list.filter((item) => {
        const itemYear = item.date.getFullYear();
        const itemMonth = item.date.getMonth() + 1; // Os meses em JavaScript são baseados em zero

        return itemYear === year && itemMonth === month;
    });
    
}

export const formatCurrentMonth = () => {
    
}