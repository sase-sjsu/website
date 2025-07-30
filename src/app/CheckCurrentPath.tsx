// Only used for bolding text in the navbar

"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type pageProps = {
  title: string;
  route: string;
}

export default function CheckCurrentPath({title, route}:pageProps) {
  const pathName = usePathname();

  if (pathName == route) {
    return <Link className="font-bold" href={route}> {title} </Link> 
  }
  return <Link className="hover:font-bold" href={route}> {title} </Link> 
}