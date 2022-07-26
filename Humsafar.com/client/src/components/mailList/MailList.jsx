import "./mailList.css"

const MailList =()=>{
    return(
        <div className="mail">
            <div className="mailTitle">
                <h1>Have a Roller Coaster Vacation with us!</h1>
                <span className="mailDesc">SignUp and have a Roller Coaster type Vacation!!!</span>
                <div className="mailInputContainer">
                    <input type="text"placeholder="Your Email"/>
                    <button>Subscribe</button>
                </div>
                
            </div>
        </div>
    )
}
export default MailList