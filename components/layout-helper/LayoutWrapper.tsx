"use client";

import React, { useState } from "react";
import LoadingScreen from "../layout-design/LoadingScreen";
import { LoadingContext } from "@/context/LoadingContext";

export default function LayoutWrapper({ children }: {children: React.ReactNode}) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <LoadingContext.Provider value={loadingComplete}>
      {!loadingComplete && (
        <LoadingScreen/>
      )}

      {children}
    </LoadingContext.Provider>
  );
}