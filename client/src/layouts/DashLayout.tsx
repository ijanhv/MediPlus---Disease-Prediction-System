import { ReactNode } from "react"
import { Navbar, SideBar } from "../components"

interface Props {
  children: ReactNode
}

const DashLayout = ({ children }: Props) => {
  return (
    <div className=''>
      <div className='min-h-screen sm:flex'>
        <SideBar />
        <main className='w-full'>
          {children}
        </main>
      </div>


    </div>
  );
}

export default DashLayout
