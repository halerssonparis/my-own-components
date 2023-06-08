import Analytics from "../componentsTailwind/Analytics";
import Hero from "../componentsTailwind/Hero";
import Navbar from "../componentsTailwind/Navbar";
import NewsLetter from "../componentsTailwind/newsLetter";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
    </div>
  )
}
