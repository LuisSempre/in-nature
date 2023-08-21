import { useCallback, useRef, useEffect } from 'react';

const useAnimation = (enabled: boolean, callback: () => void): void => {
	const requestRef = useRef<number | null>(null);

	const animate = useCallback(() => {
		// Animation logic here
		callback();
		requestRef.current = requestAnimationFrame(animate);
	}, [callback]);

	useEffect(() => {
		if (enabled) {
			requestRef.current = requestAnimationFrame(animate);
		} else {
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
			requestRef.current = null;
		}

		return () => {
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [enabled, animate]);
};

export default useAnimation;

