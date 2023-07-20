import "./sidebar.css"
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebartitle">About me</span>
                <img src="" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nobis quaerat earum nesciunt distinctio similique esse cumque non obcaecati sint, autem tempora perferendis totam qui blanditiis explicabo voluptas! Sed, nisi!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebartitle">Category</span>
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        life
                    </li>
                    <li className="sidebarlistItem">
                        Music
                    </li>
                    <li className="sidebarlistItem">
                        Tech
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebartitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                </div>
            </div >

        </div >
    )
}
