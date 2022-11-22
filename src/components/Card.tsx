import Link from 'next/link'
import { Poppins } from '@next/font/google'

const poppins = Poppins({weight: '700'});
  
export default function Touch({link, name}: {link: string, name: string}) {
  return (<Link href={link} target="_blank" className={`card ${poppins.className}`}>
    {name}
  </Link>)
}
