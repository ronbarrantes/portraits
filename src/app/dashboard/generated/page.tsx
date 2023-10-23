// MAKE A INIT COMPONENT

export default async function Dashboard() {
  // an array just to show images
  const images = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2']

  const post = await fetch(`${process.env.NEXT_PUBLIC_APP}/api/get-posts`)

  const data = await post.json()

  return (
    <div className="w-full h-full ">
      {JSON.stringify(data)}

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
  )
}
