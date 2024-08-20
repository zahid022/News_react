import { useParams } from "react-router-dom"
import { useGetCatNewsQuery } from "../store/api"
import Card from "../components/Card"
import { nanoid } from "@reduxjs/toolkit"
import Loading from "../components/Loading"

function Category() {
    const { id } = useParams()
    const { data, isLoading } = useGetCatNewsQuery(id)

    return (
        <main>
            <div className="container mx-auto px-4 2xl:w-[1300px]">
                {isLoading ? (
                    <div className="flex h-[80vh] w-full justify-center items-center">
                        <Loading />
                    </div>
                ) : (
                    <div className="flex flex-wrap py-10">
                        {data?.map(item => {
                            return <Card txt={"Read More"} item={item} key={nanoid()} />
                        })}
                    </div>)}
            </div>
        </main>
    )
}

export default Category