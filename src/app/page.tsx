import { PageLayout } from '@components/PageLayout'

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

      <ul className="flex gap-2">
        <li>Upload Image</li>
        <li>Generate Image</li>
        <li>Personal Images</li>
      </ul>

      <div className="w-full h-full ">
        <ul className="flex flex-wrap ">
          {images.map((image, idx) => (
            <li
              className="flex items-center justify-center w-1/2 h-fit sm:w-1/4 md:w-1/6"
              key={idx}
            >
              <div className="flex w-40 h-40 m-2 bg-red-500">{}</div>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}
