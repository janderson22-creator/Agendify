import React, { useContext, useEffect, useMemo, useState } from "react";

export type ContextValue = {
  commerceId: string;
  setCommerceId: React.Dispatch<React.SetStateAction<string>>;
  formattedDate: CommerceSchedulesProps | undefined;
  setFormattedDate: React.Dispatch<
    React.SetStateAction<CommerceSchedulesProps | undefined>
  >;
};

export const CommerceContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const CommerceProvider: React.FC<ChildrenProps> = ({
  children,
  ...rest
}) => {
  const [commerceId, setCommerceId] = useState(location.pathname.split("/")[2]);
  const [formattedDate, setFormattedDate] = useState<CommerceSchedulesProps>();

  const value = useMemo(
    () => ({
      commerceId,
      setCommerceId,
      formattedDate,
      setFormattedDate,
    }),
    [commerceId, setCommerceId, formattedDate, setFormattedDate]
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
interface CommerceSchedulesProps {
  dayOnWeek: string;
  month: string;
  day: string;
  year: string;
}
