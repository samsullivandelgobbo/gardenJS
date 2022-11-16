import { parseContent } from "$lib/mdParser";

export async function GET({ params }) {
  console.log('nested api', params.slug);
  let content = await parseContent(params.slug);
  return new Response(JSON.stringify(content));
}
