import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL
    : 'http://localhost:3000'

const client = axios.create({
  baseURL,
})

const request = client

export { request }
