import Head from 'next/head'
import { DashLayout } from '../layouts'

const Profile = () => {
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div>
          Profile
        </div>
      </DashLayout>
    </div>
  )
}

export default Profile
