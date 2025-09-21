import React, {useState, createContext} from 'react'

export const IraiContextContainer = createContext();

export default function IraiContext({children}) {
  const [iraiData, setIraiData] = useState({});
  const [popup, setPopup] = useState({open: false, content: <></>});
  const [userData, setUserData] = useState({
    name: '',
    pincode: '',
    address: {}
  })

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
