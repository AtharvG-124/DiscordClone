import React from 'react'
import './ServerBar.css';
import logo from './assets/discord-icon-svgrepo-com.svg'


function ServerBar() {


    return (
        <div className="serverbar">
            <div className="direct-msgs">
                <div className="direct-msgs-sub" tabIndex={0}>
                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>

                    <div className="direct-msgs-logo">
                        <img src={logo} alt="discord-logo" />
                    </div>
                </div>

            </div>



            <div className="server-sep"></div>

            <div className="server">
                <div className="server-sub" tabIndex={0}>

                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>

                    <div className="server-logo" id="A">
                        <span>A</span>

                    </div>
                </div>
            </div>

            <div className="server">
                <div className="server-sub" tabIndex={0}>

                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>

                    <div className="server-logo">
                        <span>B</span>

                    </div>
                </div>
            </div>


            <div className="server">
                <div className="server-sub" tabIndex={0}>

                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>

                    <div className="server-logo">
                        <span>C</span>

                    </div>
                </div>
            </div>


            <div className="server">
                <div className="server-sub" tabIndex={0}>

                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>

                    <div className="server-logo">
                        <span>D</span>

                    </div>
                </div>
            </div>


            <div className="server">
                <div className="server-sub" tabIndex={0}>

                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>

                    <div className="server-logo">
                        <span>G</span>

                    </div>
                </div>
            </div>

            <div className="utility-sub">
                <div className="utility-logo">
                    <span className="material-symbols-outlined green">
                        add
                    </span>
                </div>
            </div>

            <div className="utility">

                <div className="utility-sub" tabIndex={0}>
                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>

                    <div className="utility-logo">
                        <span className="material-symbols-outlined green">
                            explore
                        </span>
                    </div>
                </div>
            </div>


            <div className="server-sep"></div>

            <div className="utility" id='download'>

                <div className="utility-sub" tabIndex={0}>
                    <div className="pill-container">
                        <span className="pill"></span>
                    </div>
                    <div className="utility-logo">
                        <span className="material-symbols-outlined green">
                            download
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ServerBar