import resolveResponse from "contentful-resolve-response";

const base_url = process.env.CONTENTFUL_BASE_URL;
const space_id = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_TOKEN;

export const getGP = async () => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=grandPrix&order=fields.round`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);
  return result;
};

export const getGPSlug = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=grandPrix&fields.slug=${slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);
  return result[0];
};
