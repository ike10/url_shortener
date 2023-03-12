import Redirect from "../components/redirect";

export default function ShortUrlPage({ shortUrl }) {
  return (
    <Redirect shortUrl={shortUrl}/>
  )
  
}