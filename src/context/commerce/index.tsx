import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  Timestamp
} from "firebase/firestore";
import { db } from "../../firebaseConnection";
import { addHours } from 'date-fns';

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
  fetchEstablishmentsById: (id: string) => Promise<void>;
  loadingEstablishments: boolean;
  loadingEstablishment: boolean;
  editSchedules: (
    id_employee: string,
    start: string,
    time: string,
    name_user: string,
    phone_number: string,
    service: string,
    description: string
  ) => Promise<void>;
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
  const [loadingEstablishments, setLoadingEstablishments] = useState(false);
  const [loadingEstablishment, setLoadingEstablishment] = useState(false);
  const [formattedDate, setFormattedDate] = useState<CommerceSchedulesProps>({
    id_employee: "",
    date: "",
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
    setLoadingEstablishments(true);
    const establishmentsRef = collection(db, "establishments");

    try {
      const querySnapshot = await getDocs(establishmentsRef);

      const establishmentsData = querySnapshot.docs.map((doc) => {
        const data = doc.data() as EstablishmentTypes;

        return {
          id: doc.id,
          name_establishment: data.name_establishment || "",
          avatar_url: data.avatar_url || "",
          cover_url: data.cover_url || "",
          type: data.type || "",
          follow_up: data.follow_up || "",
          employees: data.employees || [],
          services: data.services || [],
          about: data.about,
          products: data.products,
        };
      });

      setEstablishments(establishmentsData);
    } finally {
      setLoadingEstablishments(false);
    }
  }, []);

  const fetchEstablishmentsById = useCallback(async (id: string) => {
    setLoadingEstablishment(true);
    const establishmentsRef = doc(db, "establishments", id);

    try {
      const querySnapshot = await getDoc(establishmentsRef);
      const data = querySnapshot.data() as EstablishmentTypes;

      if (data) {
        setCurrentCommerce({
          id: id,
          name_establishment: data.name_establishment || "",
          avatar_url: data.avatar_url || "",
          cover_url: data.cover_url || "",
          type: data.type || "",
          follow_up: data.follow_up || "",
          employees: data.employees || [],
          services: data.services || [],
          about: data.about,
          products: data.products,
        });
      }
    } finally {
      setLoadingEstablishment(false);
    }
  }, []);

  useEffect(() => {
    fetchEstablishments();
  }, []);

  const editSchedules = useCallback(
    async (
      id_employee: string,
      start: string,
      time: string,
      name_user: string,
      phone_number: string,
      service: string,
      description: string
    ) => {
      try {
        if (currentCommerce) {
          const docRef = doc(db, "establishments", currentCommerce.id);
          const snapshot = await getDoc(docRef);
  
          if (snapshot.exists()) {
            const data = snapshot.data();
  
            // Encontre o funcionário com id igual a "1"
            const employeeIndex = data.employees.findIndex(
              (employee: { id: string }) => employee.id === id_employee
            );
  
            if (employeeIndex !== -1) {
              // Obtenha o objeto employees existente
              const existingEmployee = data.employees[employeeIndex];
  
              // Concatene a data e a hora
              const startDate = new Date(`${start} ${time}`);
              const endDate = addHours(startDate, 1);
  
              // Converta as datas para Timestamp
              const startTimestamp = Timestamp.fromDate(startDate);
              const endTimestamp = Timestamp.fromDate(endDate);
  
              // Adicione o novo objeto à matriz schedules_marked do funcionário encontrado
              const newSchedule = {
                start: startTimestamp,
                end: endTimestamp,
                name_user,
                phone_number,
                service,
                description,
              };
  
              const updatedSchedules = [
                ...existingEmployee.schedules_marked,
                newSchedule,
              ];
  
              // Atualize o objeto employees com as novas informações
              const updatedEmployees = [
                ...data.employees.slice(0, employeeIndex),
                {
                  ...existingEmployee,
                  schedules_marked: updatedSchedules,
                },
                ...data.employees.slice(employeeIndex + 1),
              ];
  
              // Atualize o documento para adicionar o objeto employees atualizado
              await updateDoc(docRef, { employees: updatedEmployees });
            }
          }
        }
      } catch (e) {
        console.log("ERROR TO EDIT SCHEDULES", e);
      }
    },
    [currentCommerce]
  );

  const value = useMemo(
    () => ({
      formattedDate,
      setFormattedDate,
      currentCommerce,
      setCurrentCommerce,
      establishments,
      fetchEstablishmentsById,
      loadingEstablishments,
      loadingEstablishment,
      editSchedules,
    }),
    [
      formattedDate,
      setFormattedDate,
      currentCommerce,
      setCurrentCommerce,
      establishments,
      fetchEstablishmentsById,
      loadingEstablishments,
      loadingEstablishment,
      editSchedules,
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
  id_employee: string;
  date: string;
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
  employees: EmployeeTypes[];
  services: string[];
  about: {
    description: string;
    images: string[];
    location: string;
    phone_number: string;
  };
  products: {
    product_name: string;
    product_url: string;
    value: string;
  }[];
}

export interface EmployeeTypes {
  id: string;
  avatar_url: string;
  function: string;
  name: string;
  schedules: {
    monday: string[],
    tuesday: string[],
    wednesday: string[],
    thursday: string[],
    friday: string[],
    saturday: string[],
    sunday: string[],
  };
  schedules_marked: ScheduleMarkedTypes[];
}

export interface ScheduleMarkedTypes {
  description: string;
  name_user: string;
  phone_number: string;
  service: string;
  start: {
    seconds: number;
    nanoseconds: number;
  };
  end: {
    seconds: number;
    nanoseconds: number;
  };
}
