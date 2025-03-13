"use client"

import { Provider } from "react-redux"
import React, { useRef } from "react"

import { AppStore, makeStore } from "@/lib/store"

const StoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const storeRef = useRef<AppStore>(undefined)

    if(!storeRef.current) storeRef.current = makeStore()

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default StoreProvider
