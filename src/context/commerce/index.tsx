import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import Establishment from "../../pages/establishment";

export type ContextValue = {
  currentCommerce: EstablishmentTypes | undefined;
  setCurrentCommerce: React.Dispatch<
    React.SetStateAction<EstablishmentTypes | undefined>
  >;
  formattedDate: CommerceSchedulesProps;
  setFormattedDate: React.Dispatch<
    React.SetStateAction<CommerceSchedulesProps>
  >;
  establishments: EstablishmentTypes[] | undefined;
};

export const CommerceContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const CommerceProvider: React.FC<ChildrenProps> = ({
  children,
  ...rest
}) => {
  const [currentCommerce, setCurrentCommerce] = useState<EstablishmentTypes>();
  const [establishments, setEstablishments] = useState<EstablishmentTypes[]>();
  const [formattedDate, setFormattedDate] = useState<CommerceSchedulesProps>({
    dayOnWeek: "",
    month: "",
    day: "",
    year: "",
    name_employee: "",
    name_user: "",
    description: "",
    phone_number: "",
    service: "SERVIÇO",
    time: "HORÁRIO",
  });

  const fetchEstablishments = useCallback(async () => {
    const establishmentsRef = collection(db, "establishments");

    try {
      const querySnapshot = await getDocs(establishmentsRef);

      const establishmentsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        
        return {
          id: doc.id,
          name_establishment: data.name_establishment || "",
          avatar_url: data.avatar_url || "",
          cover_url: data.cover_url || "",
          type: data.type || "",
          follow_up: data.follow_up || "",
        };
      });

      setEstablishments(establishmentsData);
    } catch (e) {
      console.error("Erro to get establishments", e);
    }
  }, []);

  useEffect(() => {
    fetchEstablishments();
  }, []);

  const value = useMemo(
    () => ({
      formattedDate,
      setFormattedDate,
      currentCommerce,
      setCurrentCommerce,
      establishments,
    }),
    [
      formattedDate,
      setFormattedDate,
      currentCommerce,
      setCurrentCommerce,
      establishments,
    ]
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
  name_employee: string;
  name_user: string;
  description: string;
  phone_number: string;
  service: string;
  time: string;
}

interface EstablishmentTypes {
  id: string;
  name_establishment: string;
  avatar_url: string;
  cover_url: string;
  type: string;
  follow_up: string;
}
