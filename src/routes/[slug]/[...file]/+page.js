export async function load({ fetch, params }) {
  const { slug } = params;
  const res = await fetch(`/${slug}`);
  const data = await res.json();
  return { data };
}