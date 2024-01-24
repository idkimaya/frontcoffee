import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import CoffeeCard from "@/components/CoffeeCard";


export default function Home() {
  return (
    <>
      <main>
        <section className="pt-8 items-center md:flex-row">
          <article className="xl:px-28">
            <div className="flex flex-col items-center justify-center lg:space-x-48 md:flex-row">
              <div>
                <Image
                  className="md:px-2 lg:ml-12"
                  src="/images/home1.png"
                  width={376}
                  height={205}
                  alt="we love coffee"
                />
                <div className="lg:w-[500px] lg:h-[169px] mt-4 text-brown-dark text-lg px-4 font-normal">
                  Plongez dans l'univers du café sur mesure. <br />
                  Créez, dégustez, et vivez l'expérience ultime de
                  personnalisation. De la sélection des grains à la
                  torréfaction, faites de chaque tasse votre chef-d'œuvre
                  unique. Bienvenue dans notre monde où votre café devient une
                  histoire à savourer à chaque gorgée
                </div>
                <div className="space-x-8 px-4 py-8 lg:py-4">
                  <Button>Acheter</Button>
                  <Button asChild>
                    <Link href="/create">Créez</Link>
                  </Button>
                </div>
              </div>

              <div>
                <img
                  src="/images/home2.svg"
                  alt="coffees pic"
                  width={692}
                  height={672}
                  className="lg:ml-16 hidden sm:block"
                />
              </div>
            </div>
          </article>
        </section>

        <section>
          <div className="flex justify-start items-start px-4 xl:px-28 py-8">
            <h1 className="font-bold text-2xl text-brown-dark">COFFEES</h1>
          </div>
          <div className="md:flex justify-center items-center lg:gap-16 px-4 mt-16 mb-12 space-y-24 md:space-y-0">
            <CoffeeCard
              title={"Cappuccino"}
              price={"3.5"}
              size={"Medium"}
              image={"/images/coffee2.png"}
            ></CoffeeCard>
            <CoffeeCard
              title={"Expresso"}
              price={"4.5"}
              size={"Large"}
              image={"/images/coffee2.png"}
            ></CoffeeCard>
          </div>
        </section>

        <section>
          <div className="flex justify-start items-start px-4 xl:px-28 py-8">
            <h1 className="font-bold text-2xl text-brown-dark">CRÉATIONS</h1>
          </div>
          <div className="flex justify-center items-center py-5">
            <Button asChild>
              <Link href="/create">Créez</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
