import Topbar from './Topbar'
import { Icon } from './Icon'

function Chat() {
    return (
        <div className='w-full'>
            <Topbar />

            <div className="fixed flex h-20 bottom-0 px-4 text-sm items-center chat">
                
            <form className="w-full mt-[-10px]">
                    <div className="relative">
                        <div className="absolute pl-4 mt-2 pt-0.5 text-link">
                            <Icon name="chatPlusIcon" width={24} height={24} />
                        </div>
                        <input type="text" placeholder="Bu kanalda mesaj gönderme iznine sahip değilsin." disabled className="w-full h-11 py-3 pr-2 pl-14 text-[15px] text-link rounded outline-none bg-channelBg opacity-50"  />
                    </div>
                </form>
                <div className="flex items-center w-14 ml-4"></div>
            </div>
        </div>
    )
}

export default Chat