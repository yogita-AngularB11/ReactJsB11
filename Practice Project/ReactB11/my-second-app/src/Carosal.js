import React from "react";


class Carosal extends React.Component {
    render() {
    return (
    <div class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner ">
            <div class="carousel-item active">
                <img src="./sveri-2.jpg" alt="Image1"  class="w-100 d-block "></img>
            </div>
            <div class="carousel-item ">
                <img src="./sveri-3.jpg" alt="Image2"  class="w-100 d-block "></img>
            </div>
        </div>
    </div>
    );
    
    }
     }
     export default Carosal;