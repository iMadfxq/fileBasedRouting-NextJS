import { useRouter } from "next/router"

const ClientAsset = () => {

  const router = useRouter()

    const {clientAsset} = router.query
  return (
    <h1>{clientAsset}</h1>
  )
  }

  export default ClientAsset