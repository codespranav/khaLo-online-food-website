import { Button } from "@/components/ui/button";
import { ClockArrowUp, Mail } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="bg-white mt-8">
          <div className="max-w-full md:max-w-6xl md:m-auto flex md:justify-between items-center flex-wrap">
              <div>
                  <h1 className="text-6xl font-black font-sans leading-tight">Super Delicious Food in <br />
                  <span className="text-primary ">Only 45 minutes!</span>
                  </h1>
                  <p className="text-2xl mt-8 md:max-w-lg leading-snug">Enjoy free meal if your order takes more than 45 minutes 🚚</p>
                  <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">Order Now <ClockArrowUp className="ml-4" /></Button>
              </div>
              <div>
                <Image src= "/food.jpeg" alt="Food" width={400} height={400} className="rounded-md"/>
              </div>
          </div>
      </section>
    </>

  );
}
