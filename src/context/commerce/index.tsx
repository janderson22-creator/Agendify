import React, { useContext, useEffect, useMemo, useState } from "react";

export type ContextValue = {
  commerceId: string;
  setCommerceId: React.Dispatch<React.SetStateAction<string>>;
};

export const CommerceContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const CommerceProvider: React.FC<ChildrenProps> = ({
  children,
  ...rest
}) => {
  const [commerceId, setCommerceId] = useState(location.pathname.split("/")[2]);

  const value = useMemo(
    () => ({
      commerceId,
      setCommerceId,
    }),
    [commerceId, setCommerceId]
  );

  return (
    <CommerceContext.Provider value={value} {...rest}>
      {children}
    </CommerceContext.Provider>
  );
};

export const useCommerce = (): ContextValue => {
  const context = useContext(CommerceContext);

  if (context === undefined) {
    throw new Error("useCommerce must be used within an CommerceProvider");
  }

  return context;
};

//
// Utils
//

interface ChildrenProps {
  children: React.ReactNode;
}
