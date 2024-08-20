import { useGetAllNewsQuery, useGetDetailNewsQuery } from "../store/api";
import { nanoid } from "@reduxjs/toolkit";
import Loading from "../components/Loading";
import AdminCard from "../components/AdminCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditModal from "../components/EditModal";

function AdminAllNews() {
    const {data, isLoading} = useGetAllNewsQuery()
    const [flag, setFlag] = useState(false)
    const [newList, setNewList] = useState([])

    const {id} = useSelector(state => state.edit)

    useEffect(() => {
        if(data){
            setNewList(data)
        }
    }, [data])

    return (
        <>
            {isLoading ? (
                <div className="flex h-[90vh] w-full justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <div className=" relative">
                    {flag && <EditModal id={id} setFlag={setFlag} /> }
                    <div className="flex flex-wrap">
                        {newList.map(item => {
                            return <AdminCard setFlag={setFlag} setNewList={setNewList} item={item} key={nanoid()} />
                        })}
                    </div>
                </div>
            )}

        </>
    )
}

export default AdminAllNews