import { Purchase } from "@prisma/client";

export type CreatePurchase = Omit<Purchase, "id" | "createdAt" | "updatedAt">;
export interface IPurchase {
  id: number;
  user: string;
  detail: string;
  amount: number;
}

export type UpdatePurchase = Partial<CreatePurchase>;
