import React, {useState, createContext, useEffect} from 'react'
import { getDecryptedItem, setEncryptedItem } from '../middleware/storage';

export const IraiContextContainer = createContext();

export default function IraiContext({children}) {
  const [popup, setPopup] = useState({open: false, content: <></>});
  const [iraiData, setIraiData] = useState(() => {
    const saved = getDecryptedItem("iraiData")
    return !!saved ? saved : []
  });

  const [userData, setUserData] = useState(() => {
    const saved = getDecryptedItem("ud")
    return !!saved ? saved : {
      name: '',
      mobile: '',
      pincode: '',
      address: {}
    }
  })

  // Save to localStorage whenever iraiData changes
  useEffect(() => {
    setEncryptedItem("iraiData", iraiData);
  }, [iraiData]);

  useEffect(() => {
    setEncryptedItem("ud", userData);
  }, [userData]);

  // Listen for changes across tabs - in future
  // useEffect(() => {
  //   const handleStorage = (event) => {
  //     if (event.key === "iraiData") {
  //       setIraiData(event.newValue ? JSON.parse(event.newValue) : []);
  //     }
  //   };
  //   window.addEventListener("storage", handleStorage);
  //   return () => window.removeEventListener("storage", handleStorage);
  // }, []);

  return (
    <IraiContextContainer.Provider value={{
      iraiData, setIraiData,
      popup, setPopup,
      userData, setUserData
    }}>
      {children}
    </IraiContextContainer.Provider>
  )
}
