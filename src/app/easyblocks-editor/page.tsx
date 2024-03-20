"use client";

import { components } from "@/app/easyblocks/components";
import { easyblocksConfig } from "@/app/easyblocks/easyblocks.config";
import { ExternalData } from "@easyblocks/core";
import { EasyblocksEditor } from "@easyblocks/editor";
import { useState } from "react";
import { mockImageWidget } from "../easyblocks/externalData/mockMedia/mockImageWidget";
import { MockImagePicker } from "../easyblocks/externalData/mockMedia/MockImagePicker";
import { mockVideoWidget } from "../easyblocks/externalData/mockMedia/mockVideoWidget";
import { MockVideoPicker } from "../easyblocks/externalData/mockMedia/MockVideoPicker";
import { createMyCustomFetch } from "../easyblocks/myCustomFetch";
import {
  PexelsImagePicker,
  pexelsImageWidget,
} from "../easyblocks/externalData/pexels/pexelsImageWidget";
import {
  PexelsVideoPicker,
  pexelsVideoWidget,
} from "../easyblocks/externalData/pexels/pexelsVideoWidget";
import {
  ProductPicker,
  productWidget,
} from "../easyblocks/externalData/product/productWidget";
import { UrlWidget } from "../easyblocks/types/UrlWidget";
import {
  ArticlePickerWidget,
  articleWidget,
} from "../easyblocks/externalData/article/articleWidget";

const myCustomFetch = createMyCustomFetch();

export default function EeasyblocksEditorPage() {
  const [externalData, setExternalData] = useState<ExternalData>({});
  const [externalDataValues, setExternalDataValues] = useState<ExternalData>(
    {}
  );

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

  return (
    <EasyblocksEditor
      config={easyblocksConfig}
      externalData={externalDataValues}
      // onExternalDataChange={async (externals) => {
      //   const fetchedExternalData = await myCustomFetch(externals);
      //   const removedExternals = Object.entries(externals)
      //     .filter(
      //       ([id, externalDataValue]) =>
      //         externalDataValue.id === null && externalData[id]
      //     )
      //     .map(([externalId]) => externalId);

      //   const newExternalData: ExternalData = {
      //     ...externalData,
      //     ...fetchedExternalData,
      //   };

      //   for (const removedExternalId of removedExternals) {
      //     delete newExternalData[removedExternalId];
      //   }

      //   setExternalData(newExternalData);
      // }}
      onExternalDataChange={async (externals) => {
        const productReferences = Object.entries(externals).filter(
          ([, reference]) => {
            return reference.id !== null;
          }
        );
        console.log("=======productReferences", productReferences);
        const resolvedProducts = Object.fromEntries(
          productReferences.map(([id, reference]) => {
            console.log("productReferences", id, reference);
            const product = products.find((p) => p.id === reference.id);
            if (!product) {
              console.log(
                "productReferences not found ~~~~~~~~~~~~~~~~~~~~~~~~~~"
              );
              return [
                id,
                {
                  error: new Error(
                    `Article with id ${reference.id} was not found`
                  ),
                },
              ];
            }
            console.log(
              "productReferences found !!!!!!!!!!!!!!!!!!!!1111",
              product
            );
            return [id, { type: "article", value: product }];
          })
        );

        // We inform editor about change by updating `externalDataValues` state variable
        // with new data
        setExternalDataValues({
          ...externalDataValues,
          ...resolvedProducts,
        });
      }}
      components={components}
      widgets={{
        [mockImageWidget.id]: MockImagePicker,
        [mockVideoWidget.id]: MockVideoPicker,
        [productWidget.id]: ProductPicker,
        [pexelsImageWidget.id]: PexelsImagePicker,
        [pexelsVideoWidget.id]: PexelsVideoPicker,
        [articleWidget.id]: ArticlePickerWidget,
        url: UrlWidget,
      }}
      __debug={true}
    />
  );
}
