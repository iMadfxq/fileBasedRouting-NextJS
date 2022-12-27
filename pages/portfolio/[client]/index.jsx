import { useRouter } from "next/router"

const Client = () => {
  const router = useRouter()
  return (
    <h1>{router.query.client}</h1>
  )
  }

  export default Client