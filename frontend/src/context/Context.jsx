import React, {useState, createContext, useEffect} from 'react'
import { getDecryptedItem, setEncryptedItem } from '../middleware/storage';

export const IraiContextContainer = createContext();

export default function IraiContext({children}) {
  const [popup, setPopup] = useState({open: false, content: <></>});
  const [iraiData, setIraiData] = useState(() => {
    const saved = getDecryptedItem("iraiData")
    return !!saved ? saved : []
  });
  const [cartDetails, setCartDetails] = useState(() => {
    const saved = getDecryptedItem("cd");
    return !!saved ? saved : {
      bookedAt: '', // should update from api success payment
      deliverBetween: ''
    }
  })

  const [userData, setUserData] = useState(() => {
    const saved = getDecryptedItem("ud")
    return !!saved ? saved : {
      name: '',
      mobile: '',
      pincode: '',
      address: {
        houseId: '',
        addr1: '',
        addr2: '',
      }
    }
  })

  // Save to localStorage whenever iraiData changes
  useEffect(() => {
    setEncryptedItem("iraiData", iraiData);
  }, [iraiData]);

  useEffect(() => {
    setEncryptedItem("ud", userData);
  }, [userData]);

  useEffect(() => {
    setEncryptedItem("cd", cartDetails);
  }, [cartDetails]);

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
      userData, setUserData,
      cartDetails, setCartDetails
    }}>
      {children}
    </IraiContextContainer.Provider>
  )
}
