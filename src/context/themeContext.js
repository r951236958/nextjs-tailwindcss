import React, { useEffect, useRef } from 'react'

/**
 * Saves the old theme for future use
 * @param {string} theme - Name of curent theme
 * @return {string} previousTheme
 */
function usePrevious(theme) {
	const ref = useRef()
	useEffect(() => {
		ref.current = theme
	})
	return ref.current
}

export const ThemeContext = React.createContext()

const getInitialTheme = _ => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme')
		if (typeof storedPrefs === 'string') {
			return storedPrefs
		}

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
		if (userMedia.matches) {
			return 'dark'
		}
	}

	// If you want to use light theme as the default, return "light" instead
	return 'dark'
}

export const ThemeProvider = ({ initialTheme, children }) => {
	const [theme, setTheme] = React.useState(getInitialTheme)

	const rawSetTheme = theme => {
		const root = window.document.documentElement
		const isDark = theme === 'dark'

		root.classList.remove(isDark ? 'light' : 'dark')
		root.classList.add(theme)

		localStorage.setItem('color-theme', theme)
	}

	if (initialTheme) {
		rawSetTheme(initialTheme)
	}

	React.useEffect(
		_ => {
			rawSetTheme(theme)
		},
		[theme]
	)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
