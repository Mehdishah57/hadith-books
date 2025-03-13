"use client"

import React from "react"

import StoreProvider from "./StoreProvider"

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default Providers
