import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const filters = {
  sinorityLevels : [
    "Intern",
    "Junior",
    "Mid", 
    "Senior"
  ] as const,
  locationType: [
    "Remote",
    "Hybrid",
    "On Site"
  ] as const,
  workType:[
    "Full Time",
    "Part Time",
    "Freelance",
    "Contract",
    "Internship"
  ] as const
}