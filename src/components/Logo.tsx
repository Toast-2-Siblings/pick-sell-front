import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1" aria-label="홈으로 이동">
      <span className="text-xl font-bold">Pick-Sell</span>
    </Link>
  )
}

export default Logo