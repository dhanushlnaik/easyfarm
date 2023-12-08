
import Hero from '@/components/layout/Hero'
import HomeLayout from '@/components/layout/HomeLayout'
import HomeMenu from '@/components/layout/HomeMenu'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeLayout>
      <Hero/>
      <HomeMenu/>
    </HomeLayout>
   
  )
}
