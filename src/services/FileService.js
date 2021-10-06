import localforage from 'localforage'

const DATA_KEYS = ['towns']

const exportAllToJson = () => {
  return new Promise((resolve, reject) => {
    let exportData = []

    DATA_KEYS.forEach((key) => {
      localforage.getItem(key).then((data) => {
        let tempData = { [key]: { ...data } }

        exportData.push(JSON.stringify(tempData, null, 2))

        const blob = new Blob(exportData, {
          type: 'application/json',
        })

        const downloadUrl = URL.createObjectURL(blob)
        resolve(downloadUrl)
      })
    })
  })
}

const FileService = { exportAllToJson }

export default FileService
