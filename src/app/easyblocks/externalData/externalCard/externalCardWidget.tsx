import { Widget, WidgetComponentProps } from "@easyblocks/core";
import { SimplePicker } from "@easyblocks/design-system";

const products = [
  {
    id: "1",
    title: "Product 1",
    price: 25.0,
  },
  {
    id: "2",
    title: "Product 2",
    price: 10.0,
  },
  {
    id: "3",
    title: "Product 3",
    price: 50.0,
  },
  {
    id: "4",
    title: "Product 4",
    price: 150.0,
  },
];

export const externalCardWidget: Widget = {
  id: "3",
  label: "externalCard",
};

export function ExternalCardPickerWidget(props: WidgetComponentProps<string>) {
  return (
    <select
      value={props.id ?? ""}
      onChange={(event) => {
        props.onChange(event.target.value === "" ? null : event.target.value);
      }}
    >
      <option value={""}>Select a article</option>
      {products.map((p) => (
        <option value={p.id} key={p.id}>
          {p.title}
        </option>
      ))}
    </select>
  );
}
