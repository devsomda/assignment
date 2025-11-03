"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware"; // memo. Zustand 스토어를 localStorage(or sessionStorage)에 저장/복원하게 해주는 미들웨어 (새로고침 시에도 유지 위해 주로 사용)

interface PhotoData {
  id: string;
  author: string;
  url: string;
  download_url: string;
  height: number;
  width: number;
}

interface PhotoStore {
  photo: PhotoData | null;
  setPhoto: (data: PhotoData) => void;
  clearPhoto: () => void;
  /** localStorage 복원 여부 */
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      photo: null,
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      setPhoto: (data) => set({ photo: data }),
      clearPhoto: () => set({ photo: null }),
    }),
    {
      name: "photo-storage", // localStorage key
      onRehydrateStorage: () => (state) => {
        // persist가 로컬스토리지에서 데이터를 복원한 직후 호출됨.
        state?.setHasHydrated(true);
      },
    },
  ),
);
