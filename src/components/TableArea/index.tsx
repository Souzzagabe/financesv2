import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {

  list: Item[]
  onDeleteItem: (index: number) => void;
}

export const TableArea = ({ list, onDeleteItem }: Props) => {
    return (
        <C.Table>
            <thead>
                <C.Trd>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Delete</C.TableHeadColumn>
                </C.Trd>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} onDeleteItem={() => onDeleteItem(index)} />
                ))};
            </tbody>
        </C.Table>
    );
}