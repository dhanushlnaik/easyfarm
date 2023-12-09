
import RootLayout from '@/app/layout'
import Layo from '@/components/Layo';
import Payment from '@/components/Payment';
import Hero from '@/components/layout/Hero'
import HomeLayout from '@/components/layout/HomeLayout'
import HomeMenu from '@/components/layout/HomeMenu'
import Image from 'next/image';


export default function Checkout() {
  return (
    <Layo>
            <HomeLayout>
    <Payment/>
      
</HomeLayout>
      </Layo>

   
  )
}
