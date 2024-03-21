// import { Widget, WidgetComponentProps } from "@easyblocks/core";
// import { SimplePicker } from "@easyblocks/design-system";

// const products = [
//   {
//     id: "1",
//     title: "Product 1",
//     price: 25.0,
//   },
//   {
//     id: "2",
//     title: "Product 2",
//     price: 10.0,
//   },
//   {
//     id: "3",
//     title: "Product 3",
//     price: 50.0,
//   },
//   {
//     id: "4",
//     title: "Product 4",
//     price: 150.0,
//   },
// ];

// export const articleWidget: Widget = {
//   id: "3",
//   label: "article",
// };

// export function ArticlePickerWidget(props: WidgetComponentProps<string>) {
//   return (
//     <select
//       value={props.id ?? ""}
//       onChange={(event) => {
//         props.onChange(event.target.value === "" ? null : event.target.value);
//       }}
//     >
//       <option value={""}>Select a article</option>
//       {products.map((p) => (
//         <option value={p.id} key={p.id}>
//           {p.title}
//         </option>
//       ))}
//     </select>
//   );
// }

"use client";
import type { Widget, WidgetComponentProps } from "@easyblocks/core";

import { fetchProductById, fetchProducts } from "@/data/shopify";
import { SimplePicker } from "@easyblocks/design-system";
import { fetchArticle } from "@/data/shopify/fetchArticle";

export const articleWidget: Widget = {
  id: "3",
  label: "article",
};

export function ArticlePickerWidget({
  id,
  onChange,
}: WidgetComponentProps<string>) {
  const frameImgUrl = (imgKey: string | undefined) => {
    if (imgKey) {
      let imageName = imgKey.replace(/-(?!.*-)/, ".").replace(/image-/g, "");
      return `https://cdn.sanity.io/images/guck6rjz/development/${imageName}`;
    }
  };

  return (
    <SimplePicker
      value={id}
      onChange={onChange}
      getItems={async (query) => {
        const products = await fetchArticle();

        return products.map((product: any) => ({
          id: product.id,
          title: product.title,
          thumbnail: frameImgUrl(product.banner?.asset?._ref),
        }));
      }}
      getItemById={async (id) => {
        // const product = await fetchProductById(id);
        const product = await fetchArticle();
        if (!product) {
          throw new Error("can't find product");
        }

        return {
          id: product[0]?.id,
          title: product[0]?.title,
          thumbnail: frameImgUrl(product[0].banner?.asset?._ref),
        };
      }}
      placeholder="Pick a product"
    />
  );
}
