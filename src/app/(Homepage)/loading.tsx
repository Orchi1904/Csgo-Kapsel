"use client";

import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  // start only after 500ms, because otherwise spinner will be shown even if the loading is quick
  setTimeout(() => setShowSpinner(true), 500);
  
  return (
    <div>
      {showSpinner ? <LoadingSpinner color="var(--blue)" /> : <div></div>}
    </div>
  );
}
