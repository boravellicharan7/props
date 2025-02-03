import { Data } from "../Data/std"

const Cards = () => {
    return (
        <>
            <div>
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
