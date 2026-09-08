/**
 * A tiny shared helper used all over the site. It takes several sets of
 * styling instructions and combines them into one, with later ones overriding
 * earlier ones.
 * It came with the project and produces nothing you can see, but most parts of
 * the site depend on it.
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
