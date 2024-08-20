import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteNewsMutation } from "../store/api";
import Toast from "./Toast";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { changeId } from "../store/editNewsSlice";

function AdminCard({ item, setFlag, setNewList }) {

    const [deleteNews] = useDeleteNewsMutation()
    const dispatch = useDispatch()

    function handleDelete(){
        deleteNews(item._id).unwrap()
        .then(() => {  
            setNewList(prevNewsList => prevNewsList.filter(news => news._id !== item._id))
        })
        toast.success("Deleted News", {
            duration : 4000
        })
    }

    function handleEdit(){
        dispatch(changeId(item._id))
        setFlag(true)
    }
    
    return (
        <div className='w-3/12 px-3 mb-4'>
            <Toast />
            <div className="rounded-md overflow-hidden shadow-sm shadow-black">
                <div className='h-40 rounded-md overflow-hidden'>
                    <img className='h-full w-full' src={item.img} alt="Image" />
                </div>
                <div className='p-3'>
                    <p className="mb-2">{item.category_id.name}</p>
                    <h2 className="mb-2 h-12 overflow-hidden">{item.title}</h2>
                    <p className="h-24 overflow-hidden mb-4">{item.description}</p>
                    <div className='flex justify-center items-center gap-4'>
                        <button onClick={handleEdit} className="px-5 py-2 bg-lime-400 text-white rounded-md">
                            <FaRegEdit />
                        </button>
                        <button onClick={handleDelete} className="px-5 py-2 bg-red-400 text-white rounded-md">
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCard