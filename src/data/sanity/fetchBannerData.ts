import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  "https://dvq81cepwooly.cloudfront.net/graphql"
);

async function fetchBannerData(query: string, variables: any) {
  try {
    const data = await client.request(query, variables);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default fetchBannerData;
