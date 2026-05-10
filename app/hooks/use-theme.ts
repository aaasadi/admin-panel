import { useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState('system');

    return {theme}
}