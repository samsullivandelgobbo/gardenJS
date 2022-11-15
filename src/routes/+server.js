import fs from "fs"
import path from "path"

export function GET() {
  const fileData = fs.readFileSync(path.join(process.cwd(), "test.md"), "utf-8")
  const fileTree = fs.readdirSync(path.join(process.cwd(), "content"))

  let data = [fileTree, fileData]
  let res = new Response(fileTree)
  console.log(res.body)
  return res
}
