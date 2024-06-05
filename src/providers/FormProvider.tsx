import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";

type FormProviderProps = PropsWithChildren & {
  isSaving: boolean;
  userId?: string;
  product?: {
    name: string;
    price: number;
    description?: string;
    image: string;
  };
  isDisabled: boolean;
  save: () => void;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
};

type FormContextProps = Omit<FormProviderProps, "children">;

const FormContext = createContext<FormContextProps>({
  isSaving: false,
  isDisabled: false,
  save: () => {},
  setIsDisabled: () => {},
});

export function FormProvider({
  isSaving,
  userId,
  product,
  isDisabled,
  children,
  save,
  setIsDisabled,
}: FormProviderProps) {
  return (
    <FormContext.Provider
      value={{
        isSaving,
        userId,
        product,
        isDisabled,
        save,
        setIsDisabled,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormProvider = () => useContext(FormContext);
