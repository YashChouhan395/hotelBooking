import useFetch from "../../hooks/useFetch";
import "./featured.css"
const Featured =()=>{
const {data,loading,error} =useFetch("hotels/countByCity?cities=Ujjain,Hyderabad,Gwalior,Banglore")


    return(
        
        <div className="Featured">
           {loading ? ("Loading please wait"):(<> <div className="featuredItem">
                <img src="https://images.thrillophilia.com/image/upload/s--qT6BAHhC--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/194/067/original/1582805079_shutterstock_1507029020.jpg.jpg?1582805079" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Ujjain</h1>
                    <h2>{data[0]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://i.cdn.newsbytesapp.com/images/l17220211215130448.jpeg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Hyderabad</h1>
                    <h2>{data[1]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Ubcity2.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Gwalior</h1>
                    <h2>{data[2]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.traveltalktours.com/wp-content/uploads/2021/12/AdobeStock_143061749-1024x625.jpeg " alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Banglore</h1>
                    <h2>{data[3]} Properties</h2>
                </div>
            </div></>)}
        </div>
    )
}
export default Featured;