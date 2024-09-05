export default function Page(props: {
  params: {
    id: number
  }
}) {
  return <h1>Product #{props.params.id}</h1>
}