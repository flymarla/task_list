function TaskForm ({addTask}){
    const [text, setText] = React.useState('');
    const [support, setSupport] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text) return;
        addTask(text,support);
        setText('');
        setSupport('');
    };

    const noEnterSubmit = (e) => {
        let key = e.charCode || e.keyCode || 0;     
        if (key == 13) {
        alert("Please click Submit key if you are finished or tab to got to Details Section");
        e.preventDefault();
         }
    }

    return (
        <form onSubmit={handleSubmit}>
                <input
                    onKeyPress={noEnterSubmit}
                    type="text"
                    className="input"
                    value={text}
                    placeholder="What's Next?"
                    onChange={e => setText(e.target.value)}
                /> 
                <input
                    onKeyPress={noEnterSubmit}
                    type="text"
                    className="input"
                    value={support}
                    placeholder="Details?"
                    onChange={e => setSupport(e.target.value)}
                /> 
                <input
                    type="submit"
                    value = "Submit"
                />           
        </form>
    );
};