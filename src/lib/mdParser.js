import fs from 'fs'
import path from 'path'

export async function parseTitle() {
  let fileTree = fs.readdirSync(path.join(process.cwd(), "content"))
  fileTree = fileTree.filter(file => file.endsWith(".md"))
  const regex = /.md/
  fileTree = fileTree.map(file => file.replace(regex, ""))
  return fileTree
}

export async function parseContent(title) {
  let content = fs.readFileSync(path.join(process.cwd(), "content", title + ".md"), "utf8")
  return content
}