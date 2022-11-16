import fs from 'fs'
import path from 'path'

export async function parseTitle() {
  let fileTree = []
  fileTree.push(fs.readdirSync(path.join(process.cwd(), "content")))
  fileTree = fileTree.flat()
  fileTree = fileTree.filter(file => file.endsWith(".md"))
  // console.log(fileTree)

  let markdownFiles = {}
  for (let i = 0; i < fileTree.length; i++) {
    markdownFiles[fileTree[i]] = fs.readFileSync(path.join(process.cwd(), "content", fileTree[i]), "utf8")

    // markdownFiles[fileTree[i]].push(fileTree.filter(file => file.endsWith(".md")))

    // if (fs.lstatSync(path.join(process.cwd(), "content", fileTree[i])).isDirectory()) {
    //   let subTree = fs.readdirSync(path.join(process.cwd(), "content", fileTree[i]))
    //   markdownFiles.push(subTree.filter(file => file.endsWith(".md")))
    // }
  }
  console.log(markdownFiles)
  // fileTree = fileTree.filter(file => !file.includes("."))
  // for (let i = 0; i < fileTree.length; i++) {
  //   let subTree = fs.readdirSync(path.join(process.cwd(), "content", fileTree[i]))
  //   subTree = subTree.filter(file => file.endsWith(".md"))
  //   markdownFiles = markdownFiles.concat(subTree.map(file => fileTree[i] + "/" + file))
  // }
  // console.log(markdownFiles)
  // const regex = /.md/
  // fileTree = fileTree.map(file => file.replace(regex, ""))
  return fileTree
}

export async function parseContent(title) {
  let content = fs.readFileSync(path.join(process.cwd(), "content", title + ".md"), "utf8")
  return content
}