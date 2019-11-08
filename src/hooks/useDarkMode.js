import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
            document.body.classList.toggle("dark-mode");


    return [darkMode, setDarkMode];
};