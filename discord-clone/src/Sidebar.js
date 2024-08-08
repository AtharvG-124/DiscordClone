import React from 'react'
import ServerBar from './ServerBar'
import './Sidebar.css';

function Sidebar() {

  return (
    <div className="Sidebar">
      <ServerBar />
      <div className="sidebar-body">

        <div className="sidebar-search">
          <button className="search-button">
            Find or start a conversation
          </button>
        </div>

        <div className="sidebar-scrollable">
          <div className="friends-tab" id='s'>
            <span class="material-symbols-outlined friend-icon">
              person
            </span>
            <div className="text">
              Friends
            </div>
          </div>

          <div className="friends-tab" id='a'>
            <span class="material-symbols-outlined friend-icon">
              person
            </span>
            <div className="text">
              Friends
            </div>
          </div>

          <div className="dm-title">
            DIRECT MESSAGES
            <span class="material-symbols-outlined add-dm-icon">
              add
            </span>
          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>


          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>


          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>


          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>


          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>


          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

          <div className="direct-msg-person">
            <span class="material-symbols-outlined profile-pic-icon">
              account_circle
            </span>

            <div className="text">
              Person
            </div>

          </div>

        </div>

        <div className="sidebar-status">
          <div className="sidebar-status-content">
            <div className="status-left">
              <span class="material-symbols-outlined avatar">
                account_circle
              </span>

              <div className="status-name">
                <div className="name">agupta124</div>
                <div className="status">Online</div>
              </div>
            </div>

            <div className="status-buttons">
                <span class="material-symbols-outlined">
                  mic
                </span>

                {/* <span class="material-symbols-outlined">
                  mic_off
                </span> */}

                <span class="material-symbols-outlined">
                  headset_mic
                </span>

                {/* <span class="material-symbols-outlined">
                  headset_off
                </span> */}


                <span class="material-symbols-outlined">
                settings
                </span>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Sidebar