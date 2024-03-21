import fetchBannerData from "../sanity/fetchBannerData";
import { HomeBannerQuery } from "../sanity/graphql/HomeBannerQuery";

const fetchArticle = async () => {
  const data: any = await fetchBannerData(HomeBannerQuery);

  return data.getHomePageData.homePage.pageBuilder[2]?.spotlightArticles;
};

export { fetchArticle };
