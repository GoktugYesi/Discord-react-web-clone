import ChannelTitle from './topbars/ChannelTitle'
import TopToolBar from './topbars/TopToolBar'

function Topbar() {
    return (
        <div>
            <div className='flex justify-between items-center bg-discord-blurple px-2 w-full h-12'>
                <ChannelTitle />
                <TopToolBar />
            </div>
            <div className="w-full flex justify-center ">
                <div className="border-t-[1px] border-profileBG w-full "></div>
            </div>
        </div>
    )
}

export default Topbar