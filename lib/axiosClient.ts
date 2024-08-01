import axios from 'axios'

const baseLocalURL =
  typeof window !== 'undefined' ? (window.location.origin ?? '') : ''

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_URL
    : baseLocalURL || 'http://localhost:3000'

const client = axios.create({
  baseURL,
})

const request = client

export { request }
