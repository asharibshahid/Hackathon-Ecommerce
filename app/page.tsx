import WalletCard from "./components/wallet/page";
import Image from "next/image";
import PerfumeCard from "./components/perfume/page";

import CapCard from "./components/caps/page";

import Hero from "./productsAll/page";
import ServicesPage from "./services/page";
import JewelryCard from "./components/jewelry/page";
import PageClo from "./components/clothing/page";
import ElectronicCard from "./components/electronics/page";
import ShoesCard from "./components/shoes/page";
export default function Home() {
  return (
    <div className="bg-black">
<div className="flex items-center justify-center bg-black h-50vh w-70vh">
  <Image 
    src="/thd1.jpg" 
    alt="Logo" 
    width={400} // Adjust width for larger image
    height={150} // Adjust height to maintain aspect ratio
    objectFit="contain" 
    className="bg-black"
  />
</div>

<h1 className="text-4xl font-extrabold text-center text-gray-200 my-8 shadow-lg">
  Explore All Products
</h1>


<div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
    Perfumes
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<PerfumeCard />

<div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
Wallets
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<WalletCard />




<div className="text-center">
<br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
Jewelry
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<JewelryCard />
<div className="text-center">
<br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
Shoes
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<ShoesCard />
<div className="text-center">
      <br />
      <br />

</div>
<PageClo/>

<div className="text-center">
<br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
Electronics
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<ElectronicCard />
<div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
 Caps
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<CapCard />
<div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
Features
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<Hero />

<div className="text-center">
<br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
Services
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<ServicesPage />


    </div>
    
  );
}
