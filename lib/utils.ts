import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkImage(image: string) {
  const isValidSrc =
    image.startsWith('/') ||
    image.startsWith('http://') ||
    image.startsWith('https://')
  const imageSrc = isValidSrc ? image : '/placeholder.svg'
  return imageSrc
}
