"use client";
import type { Widget, WidgetComponentProps } from "@easyblocks/core";

import { fetchProductById, fetchProducts } from "@/data/shopify";
import { SimplePicker } from "@easyblocks/design-system";

import { PRODUCT_WIDGET_ID } from "./productShared";

export const productWidget: Widget = {
  id: PRODUCT_WIDGET_ID,
  label: "Product",
};

export function ProductPicker({ id, onChange }: WidgetComponentProps<string>) {
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
        const products = await fetchProducts();

        return products.map((product: any) => ({
          id: product.id,
          title: product.title,
          thumbnail: frameImgUrl(product.banner?.asset?._ref),
        }));
      }}
      getItemById={async (id) => {
        // const product = await fetchProductById(id);
        const product = await fetchProducts();
        if (!product[0]) {
          throw new Error("can't find product");
        }

        return {
          id: product[0]?.id,
          title: product[0]?.title,
          thumbnail: frameImgUrl(product[0]?.banner?.asset?._ref),
        };
      }}
      placeholder="Pick a product"
    />
  );
}
