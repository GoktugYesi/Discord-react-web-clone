import { Icon } from '../Icon'

function Server() {
    return (
        <div className="w-18 pt-3 bg-dcdarkbg ">
            <div className="h-12 mb-2 flex justify-center items-center relative">
                <div className="bg-backdrop-container w-12 h-12 flex justify-center items-center rounded-full">
                     <div className="bg-backdrop w-12 h-12 flex justify-center items-center rounded-full hover:bg-discordBlue hover:rounded-[15px] ">
                        <Icon name="dcLogo" width={28} height={20}/>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mb-2 ">
                <div className="border-t-2 border-backdrop w-8 "></div>
            </div>

            <div className="h-12 mb-2 flex justify-center items-center">
                <div className="bg-backdrop-container w-12 h-12 flex justify-center items-center rounded-[15px]">
                    <div className="bg-backdrop w-12 h-12 flex justify-center items-center rounded-[15px]">
                        <div className="relative w-full h-full overflow-hidden rounded-[15px]">
                            <Icon name="badduckLogo" width={48} height={48} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="absolute w-2 h-10 left-0 ml-[-4px] top-21 bg-white rounded-r"></div>
            </div>

            <div className="h-12 mb-2 flex justify-center items-center">
                <div className="bg-backdrop-container w-12 h-12 flex justify-center items-center rounded-full">
                    <div className="bg-backdrop w-12 h-12 flex justify-center items-center rounded-full">
                        <div className="relative w-full h-full rounded-full overflow-hidden hover:rounded-[15px]">
                            <Icon name="goktugLogo" width={48} height={48} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-12 mb-2 flex justify-center items-center relative">
                <div className="bg-backdrop-container w-12 h-12 flex justify-center items-center rounded-full">
                     <div className="bg-backdrop w-12 h-12 flex justify-center items-center rounded-full text-discordGreen hover:bg-discordGreen hover:rounded-[15px] hover:text-white ">
                        <Icon name="serverAdd" width={24} height={24}/>
                    </div>
                </div>
            </div>

            <div className="h-12 mb-2 flex justify-center items-center relative">
                <div className="bg-backdrop-container w-12 h-12 flex justify-center items-center rounded-full">
                     <div className="bg-backdrop w-12 h-12 flex justify-center items-center rounded-full text-discordGreen hover:bg-discordGreen hover:rounded-[15px] hover:text-white ">
                        <Icon name="serverSearch" width={24} height={24}/>
                    </div>
                </div>
            </div>
            
            <div className="w-full flex justify-center mb-2 ">
                <div className="border-t-2 border-backdrop w-8 "></div>
            </div>

            <div className="h-12 mb-2 flex justify-center items-center relative">
                <div className="bg-backdrop-container w-12 h-12 flex justify-center items-center rounded-full">
                     <div className="bg-backdrop w-12 h-12 flex justify-center items-center rounded-full text-discordGreen hover:bg-discordGreen hover:rounded-[15px] hover:text-white ">
                        <Icon name="appDownload" width={24} height={24}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Server