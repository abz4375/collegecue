import Image from 'next/image'
import Institutes from '@/Assets/Hero_Section/Institutes_Bg.png'
 
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={Institutes}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}