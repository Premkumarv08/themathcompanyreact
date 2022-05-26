import React, {
    useMemo,
    useCallback,
    createContext,
    Children,
    useState
  } from "react";
  
  interface SharedState {
    isOpen: boolean;
  }
  
  interface SharedDispatch {
    handleToggle: () => void;
  }
  
  export const ToggleContext = createContext<SharedState>({
    isOpen: false
  });
  
  export const ToggleDispatch = createContext<SharedDispatch>({
    handleToggle() {}
  });
  
  export const SharedProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setOpen] = useState(false);
  
    const handleToggle = useCallback(() => {
      setOpen((prev) => !prev);
    }, [setOpen]);
  
    const store = useMemo(
      () => ({
        isOpen
      }),
      [isOpen]
    );
  
    const dispatch = useMemo(
      () => ({
        handleToggle
      }),
      [handleToggle]
    );
  
    return (
      <ToggleContext.Provider value={store}>
        <ToggleDispatch.Provider value={dispatch}>
          {children}
        </ToggleDispatch.Provider>
      </ToggleContext.Provider>
    );
  };
  
  export const useSharedState = () => {
    const context = React.useContext(ToggleContext);
    return context;
  };
  
  export const useSharedDispatch = () => {
    const context = React.useContext(ToggleDispatch);
    return context;
  };