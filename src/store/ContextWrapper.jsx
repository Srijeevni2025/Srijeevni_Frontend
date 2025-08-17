import React, { useState } from 'react'
import { Context } from './Context'

const ContextWrapper = ({ children }) => {
  const [showSignInTab, setShowSignInTab] = useState(false);
  const [showSignUpTab, setShowSignUpTab] = useState(false);
  const [showLocationTab, setShowLocationTab] = useState(false);

  return (
    <Context.Provider
      value=
      {{
        showSignInTab,
        setShowSignInTab,
        showSignUpTab,
        setShowSignUpTab,
        showLocationTab,
        setShowLocationTab,
      }}>

      {children}

    </Context.Provider>
  )
}

export default ContextWrapper