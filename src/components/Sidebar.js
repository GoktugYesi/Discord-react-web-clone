import Servers from './sidebars/Servers'
import Channels from './sidebars/Channels'

function Sidebar() {
    return (
        <nav className="flex">
            <Servers />
            <Channels />
        </nav>
    )
}

export default Sidebar