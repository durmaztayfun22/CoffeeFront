import React from "react"; // Importing React library for JSX
import './Loading.css'

// Functional component for a Loading Page
function LoadingPage() {

    return (
        <div class="wrapper">
            <div class="press">
                <div class="holder"></div>
                <div class="lid"></div>
                <div class="carafe">
                <div class="drop"></div>
                <div class="spout"></div>
                <div class="contents">
                    <div class="grounds"></div>
                    <div class="water"></div>
                </div>
                </div>
                <div class="plunger">
                <div class="shaft">
                    <div class="knob"></div>
                </div>
                <div class="filter"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage; // Exporting the LoadingPage component
