import Image from 'next/image'
import University from '@/assets/Hero_Section/Top_Universities_Bg.jpg'
 
export default function Background() {
  return (
    <Image
      alt="university"
      src={University}
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