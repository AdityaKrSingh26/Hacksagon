import { useEffect, useRef, useState, RefObject } from 'react';

interface IntersectionObserverHookOptions extends IntersectionObserverInit { }

export function useIntersectionObserver(
    options: IntersectionObserverHookOptions = {}
): [RefObject<HTMLDivElement>, boolean] {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                ...options,
            }
        );

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
}
