const MyError = (props) => {
    return (
        <div className="container error">
            <div className="alert alert-danger">
                {props.message}
            </div>            
        </div>
    )
}
export default MyError
