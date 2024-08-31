import Image from 'next/image';
import Themes from '@/components/Layout/Themes';
import { useRouter } from 'next/navigation';
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { SidebarListItemProps } from '@/types/Sidebar/Sidebar';
import TPPImage from '@/image/ptt.png';

import {
  InformationCircleIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ChartBarSquareIcon,
  Square3Stack3DIcon,
  Cog6ToothIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const ListData: SidebarListItemProps[] = [
    {
      text: "社群",
      icon: ChatBubbleLeftRightIcon,
      link: "/community",
    },
  ]

  return (
    <>
      <nav className="bg-tpp/80 dark:bg-tpp/10">
        <div className="mx-auto px-2 sm:px-6 lg:px-5">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <></>
            </div>
            {/* Logo */}
            <div
              className='flex items-center gap-2'
              onClick={() => router.push('/')}
            >
              <Image
                src={TPPImage}
                alt="about-image"
                width={1920}
                height={1920}
                className="h-8 w-auto drop-shadow-three dark:drop-shadow-none lg:mr-0"
              />
              <p className='text-base sm:text-xl'>台灣民眾黨司法革命後援會</p>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* 切換主題 */}
              <div className="relative ml-3">
                <Themes></Themes>
              </div>
              {/* 更多 */}
              <div className="relative ml-3">
                <IconButton
                  variant="text"
                  size="lg"
                  onClick={() => setIsDrawerOpen(true)}
                  nonce={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Bars3Icon className="h-8 w-8 stroke-2 dark:invert" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        <Sidebar
          ListData={ListData}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        ></Sidebar>

        <div className="sm:hidden" id="mobile-menu">
        </div>
      </nav>

    </>
  )
}

export default Navbar;
