import { useState, useEffect } from 'react';
import * as C from './App.Styles';
import { Item } from './types/Item';
import { Category } from './types/category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import TableArea from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const  App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Finanças</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea currentMonth={currentMonth}/>

        {/* Área de inserção */}

       <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  )
}

export default App;