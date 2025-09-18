import React, {useState, createContext} from 'react'

export const IraiContextContainer = createContext();

export default function IraiContext({children}) {
  const [iraiData, setIraiData] = useState({name: ""})
  const [popup, setPopup] = useState({open: false, content: <></>})

  return (
    <IraiContextContainer.Provider value={{iraiData, setIraiData, popup, setPopup}}>
      {children}
    </IraiContextContainer.Provider>
  )
}
