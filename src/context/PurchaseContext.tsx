"use client";
import { CreatePurchase, UpdatePurchase } from "@/app/interfaces/Purchase";
import { Purchase as typePurchase } from "@prisma/client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

export const PurchaseContext = createContext<{
  purchases: typePurchase[];
  getAllPurchases: () => Promise<void>;
  getPurchaseById: (id: number) => Promise<void>;
  createPurchase: (purchase: CreatePurchase) => Promise<void>;
  updatePurchase: (id: number, purchase: UpdatePurchase) => Promise<void>;
  deletePurchase: (id: number) => Promise<void>;
  selectedPurchase: typePurchase | null;
  setSelectedPurchase: (purchase: typePurchase | null) => void;
}>({
  purchases: [],
  getAllPurchases: async () => {},
  getPurchaseById: async (id: number) => {},
  createPurchase: async (purchase: CreatePurchase) => {},
  updatePurchase: async (id: number, purchase: UpdatePurchase) => {},
  deletePurchase: async (id: number) => {},
  selectedPurchase: null,
  setSelectedPurchase: (purchase: typePurchase | null) => {},
});

export const PurchaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [purchases, setPurchases] = useState<typePurchase[]>([]);
  const router = useRouter();
  const [selectedPurchase, setSelectedPurchase] = useState<typePurchase | null>(
    null,
  );

  async function getAllPurchases() {
    const res = await fetch("/api/purchases");
    const data = await res.json();
    setPurchases(data);
  }

  async function getPurchaseById(id: number) {
    const res = await fetch(`/api/purchases/${id}`);
    const purchase = await res.json();
    setSelectedPurchase(purchase);
  }

  async function createPurchase(purchase: CreatePurchase) {
    const res = await fetch("/api/purchases", {
      method: "POST",
      body: JSON.stringify(purchase),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newPurchase = await res.json();
    setPurchases([...purchases, newPurchase]);
    router.push("/");
  }

  async function updatePurchase(id: number, purchase: UpdatePurchase) {
    const res = await fetch(`/api/purchases/${id}`, {
      method: "PUT",
      body: JSON.stringify(purchase),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataUpdated = await res.json();
    setPurchases(
      purchases.map((purchase) =>
        purchase.id === id ? dataUpdated : purchase,
      ),
    );
    router.push("/");
  }

  async function deletePurchase(id: number) {
    const res = await fetch(`/api/purchases/${id}`, {
      method: "DELETE",
    });
    setPurchases(purchases.filter((item) => item.id !== id));
  }
  return (
    <PurchaseContext.Provider
      value={{
        purchases,
        getAllPurchases,
        getPurchaseById,
        createPurchase,
        updatePurchase,
        deletePurchase,
        selectedPurchase,
        setSelectedPurchase,
      }}
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
