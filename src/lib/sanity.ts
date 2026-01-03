import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET || "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
};

export const sanityClient = createClient(config);

export async function getSanityPosts() {
    const query = `*[_type == "post"]{
    title,
    description,
    pubDate,
    updatedDate,
    "heroImage": heroImage.asset->url,
    tags,
    "slug": slug.current
  }`;
    return await sanityClient.fetch(query);
}
