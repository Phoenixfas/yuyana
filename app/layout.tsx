'use client'
import '../styles/globals.css'
import Footer from './Footer'
import Header from "./Header"
import Menu from './Menu'
import MenuModal from './MenuModal'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import LgModal from './LgModal'

let persistor = persistStore(store)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <Header />
            <LgModal />
            <MenuModal />
            <Menu />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
