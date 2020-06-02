function dansCbdeTempsNoel() {
  const currentYear = new Date().getFullYear()
  const now = new Date()
  const noel = new Date(currentYear + " dec 25")
  const difference = noel.getTime() - now.getTime()
  const differenceInSeconde = difference / 1000
  return Math.round(differenceInSeconde)
}

console.log(dansCbdeTempsNoel() + ' Secondes avant noël')