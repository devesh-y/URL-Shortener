import React, { lazy } from 'react'
import "./index.css"
import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import { ColorRing } from 'react-loader-spinner';
const App = lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>}
    >
      <App />
    </Suspense>
  </React.StrictMode>,
)