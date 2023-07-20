import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <div className="headerTitlesSm">
                    React & node
                </div>
                <div className="headerTitlesLg">
                    blog
                </div>
            </div>
            <img
                className="headerImg"
                src="https://cdn.pixabay.com/photo/2017/06/30/20/14/sun-2459532_1280.png"
                alt=""
            />
        </div>
    )
}
