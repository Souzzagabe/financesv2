import * as C from "./styles";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
  onDeleteItem: () => void;
};

export const TableItem = ({ item, onDeleteItem }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{item.date.toLocaleDateString()}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>

      <C.TableColumn>
        <button onClick={onDeleteItem}>⛔</button>
      </C.TableColumn>
    </C.TableLine>
  );
};
