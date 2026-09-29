import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `Norway House Cambodia - ${title}`;
    window.scrollTo(0, 0);
  }, [title]);
}
