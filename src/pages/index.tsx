import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import { Poppins } from '@next/font/google'

const poppinsUsername = Poppins({weight: '700'});
const poppinsDesc = Poppins({weight: '400'});

const LINKS = [
  {
    name: "VÍDEO NOVO - RX 580 Unboxing e testes",
    url: "https://www.youtube.com/watch?v=ew7D0Wl942g",
  },
  {
    name: "Twitch - Lives",
    url: "https://www.twitch.tv/nicodemos234",
  },
  {
    name: "Tiktok - Cortes da Live", 
    url: "https://www.tiktok.com/@nicodemos234"
  },
  {
    name: "Twitter - Quem ta triste não ta mais",
    url: "https://twitter.com/Nicodemos234"
  },
  {
    name: "Github - Codegos",
    url: "https://github.com/Nicodemos234",
  },
  {
    name: "Youtube - Unboxings e coisas aleatórias",
    url: "https://www.youtube.com/c/Nicodemos234?sub_confirmation=1",
  },
  {
    name: "Spotify - Musgas",
    url: "https://open.spotify.com/user/nicodemos39",
  },
]

export default function Home() {
  return (<div className="main-wrapper">
    <Head>
      <title>Nicodemos234 - Meus links</title>
    </Head>
    <Image src="/img/peepo.png" width="164" height="164" alt="Peepo avatar" className="avatar" />

    <h1 className={poppinsUsername.className}>@Nicodemos234</h1>
    <p className={`description ${poppinsDesc.className}`}>Programador e nerdola 👍</p>
    {LINKS.map((link, index) => (<Card key={index} link={link.url} name={link.name} />))}
  </div>)
}

