const API_URL = 'http://localhost:3000'

export const requestPlugins = async () => {
  const response = await fetch(`${API_URL}/plugins`)
  return response.json()
}