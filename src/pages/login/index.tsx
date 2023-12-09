
import RootLayout from '@/app/layout'
import Layo from '@/components/Layo';
import Hero from '@/components/layout/Hero'
import HomeLayout from '@/components/layout/HomeLayout'
import HomeMenu from '@/components/layout/HomeMenu'
import Login from '@/components/login/Login';
import Image from 'next/image';


export default function Checkout() {
  return (
    <Layo>
            <HomeLayout>
      <Login/>
</HomeLayout>
      </Layo>

   
  )
}
