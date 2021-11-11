import localforage from 'localforage'

const DATA_KEYS = ['towns', 'characters']

const exportAllToJson = () => {
  return new Promise((resolve, reject) => {
    let exportData = []
    //TODO broken may need to promise chain?
    const promises = DATA_KEYS.map((key, index) => {
      return localforage.getItem(key).then((data) => {
        let tempData = { [key]: { ...data } }
        console.log(tempData)
        exportData.push(JSON.stringify(tempData, null, 2))
        exportData.push(',\n')
        console.log(exportData)
      })
    })

    Promise.all(promises).then(() => {
      const blob = new Blob(exportData, {
        type: 'application/json',
      })

      const downloadUrl = URL.createObjectURL(blob)
      resolve(downloadUrl)
    })
  })
}

const FileService = { exportAllToJson }

export default FileService
