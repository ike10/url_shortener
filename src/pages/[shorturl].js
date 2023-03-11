import Redirect from '../components/Redirect';

export default function ShortUrlPage({ shortUrl }) {
  return <Redirect shortUrl={shortUrl} />;
}