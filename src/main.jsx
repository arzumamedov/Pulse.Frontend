import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchProvider from './context/SearchContext.jsx'
import WishlistProvider from './context/WishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </SearchProvider>
  </React.StrictMode>,
)
