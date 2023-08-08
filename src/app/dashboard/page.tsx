import { DashboardLayout, PageLayout } from '@components/PageLayout'
import { DashboardNav } from '../components/navigations'

// MAKE A INIT COMPONENT

export default async function Dashboard() {
  // an array just to show images
  const images = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2']

  return (
    <PageLayout>
      {
        // I need a form
        // I need a place to show images
        // add a nav
      }
      <DashboardLayout>
        <ul className="flex flex-wrap w-full h-full">
          {images.map((image, idx) => (
            <li
              className="flex items-center justify-center w-1/2 h-fit sm:w-1/4 md:w-1/6"
              key={idx}
            >
              <div className="flex w-40 h-40 m-2 bg-red-500">{}</div>
            </li>
          ))}
        </ul>
      </DashboardLayout>
    </PageLayout>
  )
}
