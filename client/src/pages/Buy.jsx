import BuyingCard from "../components/BuyingCard";
import Message from "../components/Message";
import {useQuery} from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

export default function Buy() {
    const {loading, data} = useQuery(QUERY_USERS)
    const users = data?.users||[]
    console.log(users)
    return (
        <>
            <BuyingCard />
        </>
    )
}