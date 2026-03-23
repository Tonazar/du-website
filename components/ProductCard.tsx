import Image from "next/image"
import Cards from "./Cards"

interface ProductCardProps {
  name: string
  image: string
  price: string
}

const ProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <Cards>
      <div className="flex w-64 flex-col items-center gap-2 bg-white p-6">
        <h3 className="typo-heading-lg">{name}</h3>
        <img src={image} alt={name} />
        <h3 className="typo-heading-lg">{`AED ${price}/month`}</h3>
      </div>
    </Cards>
  )
}

export default ProductCard
