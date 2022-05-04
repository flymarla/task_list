function Task ({task, index, strike}){
    function handle (){
        strike(index);
    };
    return (
    <>


    
    <div className="d-flex gap-5 justify-content-left">
        <div className="list-group mx-0">
            <label className="list-group-item d-flex gap-2" id={task.strikeID}>
                <input className="form-check-input flex-shrink-0" onClick={handle} type="checkbox" value=""/>
                <span>
                    {task.text}
                    <small className="d-block text-muted">{task.support}</small>
                </span>
            </label>
        </div>
    </div>




    </>
    )
};