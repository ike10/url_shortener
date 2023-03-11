import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect({ shortUrl }) {
  const router = useRouter();

  useEffect(() => {
    async function fetchOriginalUrl() {
      try {
        const response = await fetch(`/api/url/${shortUrl}`);
        const { originalUrl } = await response.json();
        window.location.href = originalUrl;
      } catch (error) {
        console.error(error);
        router.push('/');
      }
    }
    fetchOriginalUrl();
  }, []);

  return null;
}
