import Image from 'next/image'
import Link from 'next/link'
import JobCard from './components/JobCard'

export default function Home() {
  return (
    <><main>
      <h1>Hello World</h1>
      <Link href="/jobs">Users Jobs</Link>
      <Link href="/aaa">aaa</Link>
      </main></>
  )
}
