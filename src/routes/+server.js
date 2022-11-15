import { parseTitle } from "$lib/mdParser";

export async function GET() {

  let fileTree = await parseTitle()
  return new Response(JSON.stringify(fileTree));
}
