import { uploadFile, uploadJSON } from '../utils/'

export async function updateURI(name: string, description: any, image: FileList, agreement: FileList, attributes: any) {
  let imageHash, agreementHash

  try {
    const formData = new FormData()
    formData.append('file', image[0])
    console.log('image', formData, image)
    imageHash = await uploadFile(formData)
  } catch (e) {
    console.error('Error uploading image: ', e)
  }

  try {
    const formData = new FormData()
    formData.append('file', agreement[0])
    console.log('image', formData, agreement)
    agreementHash = await uploadFile(formData)
  } catch (e) {
    console.error('Error uploading agreement: ', e)
  }

  try {
    const wrappr = {
      name: name,
      description: description,
      image: imageHash,
      agreement: agreementHash,
      attributes: attributes,
    }
    const hash = await uploadJSON(wrappr)
    return hash
  } catch (e) {
    console.log(e)
  }
}