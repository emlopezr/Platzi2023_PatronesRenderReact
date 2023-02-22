import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
    const [storageChange, setStorageChange] = useState(false)
    const [sincronized, setSincronized] = useState(false)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(
                        itemName,
                        JSON.stringify(initialValue)
                    );
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setLoading(false);
                setItem(parsedItem);
            } catch (error) {
                setError(error);
            }
        }, 1000);
    }, [sincronized]);

    // Guardar los cambios en localStorage
    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    // Escuchar los cambios en localStorage y recargar
    window.addEventListener('storage', change => {
        if (change.key === 'ToDos') {
            setStorageChange(true)
            setSincronized(!sincronized)
            setLoading(true);
        }
    })

    return { item, saveItem, loading, error };
}
