import axios from 'axios'

export const getCategory = async () => {
  try {
    const response = await axios.get('http://localhost/api/category')
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
