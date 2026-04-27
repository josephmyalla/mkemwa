import logocameraused from "../assets/logocameraused.jpeg"
const Logo =()=>{
    return(
        
        <span className="grid h-10 w-10 place-items-center rounded-md bg-red-700 text-gold-foreground font-display font-bold hover:w-40 hover:h-40">
          <img src={logocameraused} alt="Camera Used TZ"/>
          </span>
    )
}

export default Logo