import { UserButton } from '@clerk/nextjs'

import { PageLayout } from '@components/layouts'

export default async function Generate() {
  const images = ['1', '2', '3', '4', '5']

  return (
    <PageLayout title='Generate image'>
      {/*Add a form with a button and an input*/}

      <form className="flex gap-1">
        <button
          type="submit"
          className="p-3 py-1 border border-white rounded-l-md"
        >
          Generate
        </button>
        <input
          className="p-3 py-1 border border-white rounded-r-md bg-slate-800"
          placeholder="Generate your image..."
          type="text"
        />
      </form>

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
