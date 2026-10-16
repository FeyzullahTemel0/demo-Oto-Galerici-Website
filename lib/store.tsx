"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Car, CarStatus, Gallery, Message, seedCars, seedGalleries, seedMessages, today } from "./data";

type State = { cars: Car[]; galleries: Gallery[]; messages: Message[]; session: number | null };

const seed: State = { cars: seedCars, galleries: seedGalleries, messages: seedMessages, session: null };
const KEY = "otovitrin-demo-v1";
export const DEMO_PASSWORD = "demo123";

type Api = State & {
  ready: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addCar: (c: Omit<Car, "id" | "date">) => void;
  updateCar: (id: number, c: Partial<Car>) => void;
  deleteCar: (id: number) => void;
  setCarStatus: (id: number, s: CarStatus) => void;
  updateGallery: (id: number, g: Partial<Gallery>) => void;
  addMessage: (m: Omit<Message, "id" | "date" | "read">) => void;
  markRead: (id: number, read: boolean) => void;
  deleteMessage: (id: number) => void;
  resetDemo: () => void;
};

const Ctx = createContext<Api | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<State>(seed);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setS({ ...seed, ...JSON.parse(raw) });
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(s));
  }, [s, ready]);

  const login = useCallback(
    (email: string, password: string) => {
      const g = s.galleries.find((x) => x.email.toLowerCase() === email.trim().toLowerCase());
      if (!g || password !== DEMO_PASSWORD) return false;
      setS((p) => ({ ...p, session: g.id }));
      return true;
    },
    [s.galleries]
  );

  const api: Api = {
    ...s,
    ready,
    login,
    logout: () => setS((p) => ({ ...p, session: null })),
    addCar: (car) =>
      setS((p) => ({ ...p, cars: [{ ...car, id: Math.max(0, ...p.cars.map((x) => x.id)) + 1, date: today() }, ...p.cars] })),
    updateCar: (id, patch) => setS((p) => ({ ...p, cars: p.cars.map((x) => (x.id === id ? { ...x, ...patch } : x)) })),
    deleteCar: (id) => setS((p) => ({ ...p, cars: p.cars.filter((x) => x.id !== id) })),
    setCarStatus: (id, status) => setS((p) => ({ ...p, cars: p.cars.map((x) => (x.id === id ? { ...x, status } : x)) })),
    updateGallery: (id, patch) => setS((p) => ({ ...p, galleries: p.galleries.map((x) => (x.id === id ? { ...x, ...patch } : x)) })),
    addMessage: (m) =>
      setS((p) => ({ ...p, messages: [{ ...m, id: Math.max(0, ...p.messages.map((x) => x.id)) + 1, date: today(), read: false }, ...p.messages] })),
    markRead: (id, read) => setS((p) => ({ ...p, messages: p.messages.map((x) => (x.id === id ? { ...x, read } : x)) })),
    deleteMessage: (id) => setS((p) => ({ ...p, messages: p.messages.filter((x) => x.id !== id) })),
    resetDemo: () => setS(seed),
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useData() {
  const v = useContext(Ctx);
  if (!v) throw new Error("DataProvider eksik");
  return v;
}
