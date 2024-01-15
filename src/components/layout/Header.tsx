import { RoutePath } from '@/utils/routing';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Link href={RoutePath.Index()}>
        Home
      </Link>
    </>
  );
}
