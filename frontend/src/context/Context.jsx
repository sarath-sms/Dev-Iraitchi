import React, {useState, createContext} from 'react'

const IraiContextContainer = createContext();

export default function IraiContext({children}) {
  const [iraiData, setIraiData] = useState({
    name: "sarath"
  })
  return (
    <IraiContextContainer.Provider value={{iraiData, setIraiData}}>
      {children}
    </IraiContextContainer.Provider>
  )
}
