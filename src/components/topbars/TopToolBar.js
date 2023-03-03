import { Icon } from '../Icon'

function TopToolBar() {
    return (
        <div className='text-link flex'>
            <div className='flex items-center w-10'>
                <Icon name="subtitleIcon" width={24} height={24} />
            </div>
            <div className='flex items-center w-10'>
                <Icon name="notificationIcon" width={24} height={24} />
            </div>
            <div className='flex items-center w-10'>
                <Icon name="fixedIcon" width={24} height={24} />
            </div>
            <div className='flex items-center w-10'>
                <Icon name="usersIcon" width={24} height={24} />
            </div>

            
                <form className="max-w-sm">
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 w-4 h-4 my-auto right-2">
                            <Icon name="searchIcon" width={16} height={16} />
                        </div>
                        <input type="text" placeholder="Ara" className="w-36 h-5 py-3 pl-2 text-sm text-white rounded outline-none bg-dcdarkbg focus:w-60"  />
                    </div>
                </form>
            

            <div className='flex items-center w-10 ml-4'>
                <Icon name="postIcon" width={24} height={24} />
            </div>

            <div className='flex items-center w-8'>
                <Icon name="helpIcon" width={24} height={24} />
            </div>
        </div>
    )
}

export default TopToolBar