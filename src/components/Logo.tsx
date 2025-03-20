import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1" aria-label="홈으로 이동">
      <h1 className="text-xl font-bold">Pick-Sell</h1>
    </Link>
  )
}

export default Logo