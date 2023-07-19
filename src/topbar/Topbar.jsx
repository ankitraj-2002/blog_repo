import "./topbar.css"

export default function Topbar() {
    return (
        <div className='top'>
            <div className="topLeft">

                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="listItem"> HOME </li>
                    <li className="listItem"> ABOUT </li>
                    <li className="listItem"> WRITE </li>
                    <li className="listItem"> LOGOUT </li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="topImg"
                    src="https://www.pexels.com/photo/silhouette-of-tree-near-body-of-water-during-golden-hour-36717/"
                    alt="https://www.pexels.com/photo/silhouette-photo-of-man-with-backpack-standing-in-seashore-during-golden-hour-848573/" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}
