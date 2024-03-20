import { gql } from "graphql-request";

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!, $preview: Boolean) {
    getPageBySlug(key: $slug, preview: $preview)
  }
`;
