import fs from "fs"

fs.readFile("./test.md", "utf-8", (err, data) => {
  const arr = data.split(" ")
  console.log(arr[1])
})
