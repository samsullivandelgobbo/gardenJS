import { parseContent } from "$lib/mdParser";

export async function GET({ params }) {
  console.log('/slug', params)
  let content = await parseContent(params.slug)
  return new Response(JSON.stringify(content));
}