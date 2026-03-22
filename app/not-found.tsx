import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <h2 className='font-bold text-xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='bg-primary/80 hover:bg-secondary/80 transition-all px-6 py-2 rounded-full font-medium'>Return Home</Link>
    </div>
  )
}