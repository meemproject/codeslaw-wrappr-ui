import { useCallback } from 'react'
import { Button, IconSun, IconMoon, useTheme } from '@kalidao/reality'
import { useThemeStore } from '~/hooks/useThemeStore'
import { setThemeMode } from '~/utils/cookies'

export default function ToggleMode() {
	const { mode, setMode } = useTheme()
	const toggleModeState = useThemeStore((state) => state.toggleMode)

	const toggleMode = useCallback(() => {
		const nextMode = mode === 'dark' ? 'light' : 'dark'
		setMode(nextMode)
		setThemeMode(nextMode)
		toggleModeState()
	}, [mode, setMode, toggleModeState])

	return (
		<Button shape="circle" variant="transparent" aria-label="Toggle dark mode" onClick={toggleMode} size="small">
			{mode === 'light' ? <IconMoon /> : <IconSun />}
		</Button>
	)
}
