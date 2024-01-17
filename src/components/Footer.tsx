import Link from "next/link"
import { RoutePath } from '@/utils/routing';

export default function Footer() {
  return (
    <footer className="bg-footer py-4 px-4 flex justify-center items-center">
      <div className="w-11/12 flex flex-col justify-center items-stretch gap-4">
        <div className="flex justify-between items-start gap-4">
          <h1 className="font-bold">Coffee 4 u</h1>
          <div>
            <ul className="flex text-black gap-8">
              <li>
                <Link href={RoutePath.Terms()}>Mentions légales</Link>
              </li>
              <li>
                <Link href={RoutePath.Privacy()}>Politique de confidentialité</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-neutral-500">Coffee4u &copy; 2024 tous droits réservés </p>
      </div>
    </footer>
  )
}