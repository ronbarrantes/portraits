// Create a function that takes a File object and turns it into a buffer
export const fileToBuffer = (file: File): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target) {
        const buffer = Buffer.from(event.target.result as ArrayBuffer)
        resolve(buffer)
      } else {
        reject(new Error('Failed to convert file to buffer'))
      }
    }
    reader.readAsArrayBuffer(file)
  })
}
