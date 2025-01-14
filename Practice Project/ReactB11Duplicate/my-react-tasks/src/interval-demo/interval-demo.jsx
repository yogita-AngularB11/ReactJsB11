import { useState, useRef } from "react"

const IntervalDemo = () => {

    const [toggleButton, setToggleButton] = useState('d-block');
    const [toggleProgress, setToggleProgress] = useState('d-none');
    const [toggleImage, setToggleImage] = useState('d-none');

    const [progressValue, setProgressValue] = useState(1)

    let count = useRef(1);
    //we store function in memory
    let thread=useRef(null);

    function handleLoadClick() {
        setToggleButton('d-none');
        setToggleProgress('d-block');
        thread.current=setInterval(StartProgress,300 )
    }

    function StartProgress() {
        count.current = count.current + 1;
        setProgressValue(count.current);
        if(count.current===100){
            setToggleProgress('d-none');
            setToggleImage('d-block');
        }
    }

    function handlePauseClick(){
        clearInterval(thread.current)
    }

    function handleResumeClick(){
        thread.current=setInterval(StartProgress,300 )
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="text-center">
                    <div className={toggleButton}>
                        <button onClick={handleLoadClick} className="btn btn-primary" >Load Image</button>
                    </div>
                    <div className={toggleProgress}>
                        <progress min="1" max="100" style={{ width: '400px', height: '30px' }}
                            value={progressValue}></progress>
                            <div>
                                {progressValue} % Completed
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-warning bi bi-pause" onClick={handlePauseClick}></button>
                                <button className="btn btn-success bi bi-play mx-2" onClick={handleResumeClick}></button>
                            </div>
                    </div>
                    <div className={toggleImage}>
                        <img src="iphone-black.jpeg" alt="" width="300" height="400" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IntervalDemo
// In real-time when task is being performed, through the logic we access time taken to finish the task.
// That means we will calculate the process task.
// javascript-process-thread by using it we calculate the how much time(thread-process-time) is really taken inside process that time we will assign to progressValue
// while loading image you can make it zoom,rotate or add lot of effects. we learnt how to add Keyframes. 