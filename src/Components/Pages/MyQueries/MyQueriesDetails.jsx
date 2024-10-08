import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const MyQueriesDetails = ({ myQuery, setMyQue, myQue }) => {
    const { user } = useAuth()
    const { userEmail, boycottingReason, queryTitel, currentDateAndTime, productBrand, userName, userPhoto, productImg, _id, productName } = myQuery
    console.log(myQuery);
    const navigate = useNavigate()
    const handelViewDetailsBtn = (id) => {

        navigate(`/query-details/${id}`)
    }
    const handeldeleteBtn = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                axios.delete(`https://assignment-11-server-liard-five.vercel.app/my-queries/${id}`)
                    .then(res => {
                        console.log(res.data);
                        const newMyQueries = myQue.filter(myQuery => myQuery._id !== id)
                        setMyQue(newMyQueries)
                    })
            }
        });

    }
    return (
        <div>
            <Fade cascade duration={3000}>
                <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border-2 font-poppins">
                    <div className="flex space-x-4">
                        <img alt="" src={userPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                            <span className="text-xs dark:text-gray-600">{currentDateAndTime}</span>
                        </div>
                    </div>
                    <div>
                        <img src={productImg} alt="" className="object-cover w-full mb-4 rounded-lg h-60  dark:bg-gray-500" />
                        <h2 className="mb-1 text-2xl font-lato font-bold">{productName}</h2>
                        <h2 className="mb-1 text-xl font-lato font-semibold text-blue-500">#{productBrand}</h2>
                        <p className="mt-2 font-semibold">{queryTitel}</p>
                        <p className="mt-3 font-lato">{boycottingReason.slice(0,200)}<span className='text-blue-600 cursor-pointer font-poppins text-sm'> ...Read More</span></p>

                    </div>
                    <div className="flex flex-wrap justify-between">
                        <button onClick={() => handelViewDetailsBtn(_id)} className="btn btn-secondary">View Details</button>
                        <Link to={`/update-my-queries/${_id}`} className="btn btn-success text-white">Update</Link>
                        <button onClick={() => handeldeleteBtn(_id)} className="btn btn-error">Delete</button>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default MyQueriesDetails;