"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { sectors, defaultSector, type SectorData } from "./sectorData";

type SectorContextValue = {
  active: SectorData;
  setActiveSector: (id: string) => void;
  sectors: SectorData[];
};

const SectorContext = createContext<SectorContextValue>({
  active: defaultSector,
  setActiveSector: () => {},
  sectors,
});

export function SectorProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<SectorData>(defaultSector);

  const setActiveSector = useCallback((id: string) => {
    const found = sectors.find((s) => s.id === id);
    if (found) setActive(found);
  }, []);

  return (
    <SectorContext.Provider value={{ active, setActiveSector, sectors }}>
      {children}
    </SectorContext.Provider>
  );
}

export function useSector() {
  return useContext(SectorContext);
}
