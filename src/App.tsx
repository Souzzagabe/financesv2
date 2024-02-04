import { useState, useEffect } from 'react';
import * as C from './App.Styles';
import { Item } from './types/Item';
import { Category } from './types/category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';

const  App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Finanças</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Área de informações */}

        {/* Área de inserção */}

        {/* tabela de itens */}

      </C.Body>
    </C.Container>
  )
}

export default App;