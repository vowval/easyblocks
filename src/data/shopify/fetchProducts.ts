import { mapProduct } from "./mapProduct";
import { removeEdges } from "./removeEdges";
import fetchShopify from "./fetchShopify";
import { fetchProductsQuery } from "./graphql/fetchProductsQuery";
import fetchBannerData from "../sanity/fetchBannerData";
import { HomeBannerQuery } from "../sanity/graphql/HomeBannerQuery";

// const fetchProducts = async (query: string) => {
//   const data: any = await fetchShopify(fetchProductsQuery, {
//     query,
//     sortKey: "CREATED_AT",
//     sortIndex: 0,
//     reverse: false,
//     first: 250,
//   });

//   return removeEdges(data.products).map(mapProduct);
// };

// export { fetchProducts };

const fetchProducts = async () => {
  const data: any = await fetchBannerData(HomeBannerQuery);

  // return removeEdges(data.products).map(mapProduct);
  return data.getHomePageData.homePage.pageBuilder[2]?.spotlightArticles;
};

export { fetchProducts };
