const Buttons = ({children})=>{
    let styles = {
        backgroundColor:"green",
        color:"white"
    }
    return(
    <>
    <button style={styles}>{children}</button>
    </>
    )
}

export default Buttons