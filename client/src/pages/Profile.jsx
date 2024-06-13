import ListingCard from "../components/ListingCard"
import Auth from "../utils/auth"

export default function Profile() {
  console.log(Auth.getUser())
  return (
    // RUBAL: Delete other 3 ListingCards, they're used as sampling for you
    <>
      <ListingCard user={Auth.getUser().data}/>
    </>

  )
}