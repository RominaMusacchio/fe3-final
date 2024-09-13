import React from 'react'
import { useDentistStates } from './utils/global.context';

const Footer = () => {
  const {state } = useDentistStates();
  return (
    <footer className={state.theme ? 'dark-theme' : 'light-theme'}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
