import Link from "next/link"
import Cards from "./Cards"

interface ProductCardProps {
  name: string
  image: string
  price: string
  href?: string
}

const ProductCard = ({ name, image, price, href }: ProductCardProps) => {
  const content = (
    <Cards>
      <div className="flex w-64 flex-col items-center gap-2 bg-white p-6">
        <h3 className="typo-heading-md">{name}</h3>
        <img src={image} alt={name} />
        <h3 className="typo-heading-md">{`AED ${price}/month`}</h3>
      </div>
    </Cards>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    )
  }

  return content
}

export default ProductCard
