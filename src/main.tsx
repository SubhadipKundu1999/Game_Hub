import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
import './index.css'
import theme from './theme'
import { RouterProvider } from 'react-router-dom'
import appRouter from './router'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>

    <QueryClientProvider client={queryClient}>

    <RouterProvider router={appRouter}/>
    <ReactQueryDevtools/>
    </QueryClientProvider>

    </ChakraProvider >
   
  </React.StrictMode>,
)
