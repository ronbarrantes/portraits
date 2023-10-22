'use client'
export const Btn = () => {
  const handleClick = async () => {
    const res = await fetch('http://localhost:3000/api/images', {
      method: 'POST',
    })

    const data = await res.json()

    console.log({ data })
  }

  return (
    <button onClick={handleClick} className="text-white">
      Create Image
    </button>
  )
}
