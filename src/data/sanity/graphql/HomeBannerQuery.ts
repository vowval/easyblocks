import { gql } from "graphql-request";

export const HomeBannerQuery = gql`
  query GetHomePageData {
    getHomePageData
  }
`;
