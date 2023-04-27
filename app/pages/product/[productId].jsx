import { useRouter } from "next/router";

export default function ProductItem() {
  const {
    query: { productId },
  } = useRouter();
  return <div>Página del producto: {productId}</div>;
  /*   De no desestructurar el router para extraer la query y luego el 
  productId, quedaría así: {router.query.productId} */
}
