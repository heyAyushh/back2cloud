import type { NextPage } from 'next'
import Image from 'next/image'
import Background from "../components/Background";
import thugBack from '../static/thugback.png';

const Home: NextPage = () => {

  return (
    <div className="relative">
      <Background>
        <div className="absolute bottom-0 right-1/4 -m-2">
          <Image src={thugBack} alt="caw caw" width={400} height={400} placeholder="blur" />
        </div>
      </Background >
    </div>
  )
}

export default Home
