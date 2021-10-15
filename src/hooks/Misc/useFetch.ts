import { useState, useEffect, useCallback } from "react";
import { useAsync } from "./useAsync";

const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" }
}

export const useFetch = (url : string, options = {},  dependencies : Array<any>) => {
    return useAsync(() => {
        return fetch(url, { ...DEFAULT_OPTIONS, ...options })
            .then(res => {
                if(res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            });
            
    }, dependencies);

}