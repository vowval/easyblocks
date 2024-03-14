import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  "https://dvq81cepwooly.cloudfront.net/graphql"
);

async function fetchBannerData(query: string) {
  try {
    const data = await client.request(query);
    return data; // Return the result directly
  } catch (error: any) {
    throw new Error(error);
  }
}

export default fetchBannerData;
