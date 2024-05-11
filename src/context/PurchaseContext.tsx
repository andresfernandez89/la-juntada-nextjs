"use client";
import { IPurchase } from "@/app/interfaces/Purchase";
import { createContext, useContext, useState } from "react";

export const PurchaseContext = createContext<{
  purchases: any[];
  getAllPurchases: () => Promise<void>;
  createPurchase: (purchase: IPurchase) => Promise<void>;
  deletePurchase: (id: number) => Promise<void>;
}>({
  purchases: [],
  getAllPurchases: async () => {},
  createPurchase: async () => {},
  deletePurchase: async () => {},
});

export const PurchaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [purchases, setPurchases] = useState<IPurchase[]>([]);

  async function getAllPurchases() {
    const res = await fetch("/api/purchases");
    const data = await res.json();
    setPurchases(data);
  }
  async function createPurchase(purchase: IPurchase) {
    const res = await fetch("/api/purchases", {
      method: "POST",
      body: JSON.stringify(purchase),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newPurchase = await res.json();
    setPurchases([...purchases, newPurchase]);
  }

  async function deletePurchase(id: number) {
    const res = await fetch(`/api/purchases/${id}`, {
      method: "DELETE",
    });
    const dataDeleted = await res.json();
    setPurchases(purchases.filter((item) => item.id !== id));
  }
  return (
    <PurchaseContext.Provider
      value={{ purchases, getAllPurchases, createPurchase, deletePurchase }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export function usePurchases() {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error("usePurchases must be used within a PurchaseProvider");
  }
  return context;
}
