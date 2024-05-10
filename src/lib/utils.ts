import { IPurchase } from "@/app/interfaces/Purchase";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const totalAmount = (purchases: IPurchase[]): number =>
  purchases.reduce((sum, purchase) => {
    const amount = purchase.amount;
    return sum + amount;
  }, 0);
