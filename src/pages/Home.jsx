 import Navbar from "../components/Layout/Navbar";
 import Footer from '../components/Layout/Footer';
 import Hero  from  "../components/Hero";
 import Why from '../components/Why';
 import Who from '../components/Who';
 import Work from "../components/Work";

 export default function Home() {
   return (
     <>
      <Navbar />
      <main className="flex flex-col scroll-smooth">
        <section id="home">
          <Hero />
        </section>

        <section id="works">
          <Work />
        </section>

        <section id="features">
          <Why />
        </section>

        <section id="community">
          <Who />
        </section>

        <Footer />
      </main>

     </>
   )
 }

