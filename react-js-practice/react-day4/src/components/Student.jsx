function Student(props){
    return(

        <div>
            <h1>I Am BTech Student</h1>
            <p>Student Of B7</p>
            <hr></hr>
            <h3>Name : {props.name}</h3>
            <h3>Course : {props.course}</h3>
            <h3>Roll No : {props.rollno}</h3>

        </div>

    )
}

export default Student