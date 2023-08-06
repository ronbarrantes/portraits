import { PageLayout } from '@components/PageLayout'

// MAKE A INIT COMPONENT

export default async function Dashboard() {
  // an array just to show images
  const images = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '1',
    '2',
    '3',
    '4',
    '5',
    '1',
    '2',
    '3',
    '4',
    '5',
  ]

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

      <div>
        <ul className="flex flex-wrap">
          {images.map((image, idx) => (
            <li
              className="flex items-center justify-center w-20 h-20 border border-white"
              key={idx}
            >
              {image}
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}
