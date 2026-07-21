import React from 'react'
import { SwitchProvider } from './context/SwitchContext'
// // import AppRoutes from './routes'
// import { ScreenProvider } from './context/ScreenContext'
// import { SidebarProvider } from './context/SidebarContext'
// import AppProvider from './providers/app.provider'

// // 1. IMPORTATION DES STYLES OBLIGATOIRE
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css' 

// export default function App() {
//   return (
//     <AppProvider>
//       <SidebarProvider>
//         <ScreenProvider>
//           <SwitchProvider>
//             {/* <AppRoutes /> */}
//             <div style={{fontSize:"40px", color:"green"}}>
//               APP ROUTES TEST OK
//             </div>
//           </SwitchProvider>
//         </ScreenProvider>
//       </SidebarProvider>

//       {/* 2. PLACÉ À LA RACINE EN COMPOSANT AUTO-FERMANT */}
//       <ToastContainer 
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </AppProvider>
//   )
// }

export default function App() {
  return (
    <div style={{fontSize:"40px", color:"green"}}>
      SANS PROVIDERS OK avec useToggle(apollo client 12)
    </div>
  )
}