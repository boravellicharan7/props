import { Data } from "../Data/std"
import Buttons from "../Button/button"

const Cards = (children) => {
    let styles = {
        backgroundColor: "red",
        color: "black "
    }
    return (
        <>
            <div>
                <Buttons style = {styles} >
                    Student
                </Buttons>
                {Data.map((stu) => {
                    return (
                        <div key={stu.id}>
                            <h1>{stu.id}</h1>
                            <h1>{stu.name}</h1>
                            <p>{stu.age}</p>
                            <p>{stu.course}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cards
