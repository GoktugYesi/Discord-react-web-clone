import Topbar from './Topbar'
import { Icon } from './Icon'

function Chat() {
    return (
        <div className='w-full flex flex-col relative'>
            <Topbar />

            
                <div className="flex items-center justify-between px-4 py-3 text-sm text-link">
                    <div className="flex">
                            <div className="bg-backdrop w-10 h-10 flex justify-center items-center rounded-full">
                                <div className="relative w-full h-full overflow-hidden rounded-full">
                                    <Icon name="badduckLogo" width={40} height={40} className="w-full h-full object-cover"/>
                                </div>
                            </div>
                        <div className="ml-3 flex flex-col">
                            <span className="font-semibold text-discordGreen text-[16px]">BadDuck 
                                <span className="bg-discordBlue rounded text-white font-normal text-[9px] ml-2 px-1 py-0.5">✓ BOT</span>
                                <span className="text-xs ml-2 text-link font-normal">07.04.2021 01:07</span>
                            </span>
                            <span className="text-[16px] text-chatlink">https://discord.gg/E5nw9CRdH6</span>
                            {/*

                            <div className="flex items-center mt-2">
                                <div className="flex items-center">
                                    <Icon name="chatPlusIcon" width={20} height={20} className="text-discordGreen" />
                                    <span className="text-xs text-discordGreen ml-1">Davet Et</span>
                                </div>
                                <div className="flex items-center ml-4">
                                    <Icon name="chatPlusIcon" width={20} height={20} className="text-discordGreen" />
                                    <span className="text-xs text-discordGreen ml-1">Kopyala</span>
                                </div>
                                <div className="flex items-center ml-4">
                                    <Icon name="chatPlusIcon" width={20} height={20} className="text-discordGreen" />
                                    <span className="text-xs text-discordGreen ml-1">Kapat</span>
                                </div>
                            </div>

                            */}

                            <div className="flex flex-col items-start w-[432px] mt-2 h-56 rounded-md bg-channelBg">
                                <div className="flex items-center justify-center h-16 rounded-t-md overflow-hidden relative">
                                        <Icon name="backgrondImage" width={432} height={64}/>
                                </div>
                                <div className="flex flex-col items-start justify-center w-full p-4">

                                    <span className="card-title text-xs text-left font-bold">BİR SUNUCUYA KATILMAK İÇİN DAVET EDİLDİN</span>
                                    
                                    <div className="flex ">
                                        <div className="bg-backdrop w-12 h-12 flex justify-center items-center rounded-[15px] mt-3">
                                            <div className="relative w-full h-full overflow-hidden rounded-[15px]">
                                                <Icon name="badduckLogo" width={48} height={48} className="w-full h-full object-cover"/>
                                            </div>
                                        </div>
                                        <div className="ml-3 flex flex-col">
                                        <span className="card-title text-[16px] text-left mt-4 font-bold ml-2">DUCKHOSTS | Fivem Discord Yönetimi</span>
                                            <div className="flex items-center ml-2 mt-1">
                                                <div className="bg-discordGreen w-2 h-2 rounded-full"></div>
                                                <span className="card-title text-sm ml-1">207 Çevrimiçi</span>
                                                <div className="flex bg-gray-500 w-2 ml-5 h-2 rounded-full"></div>
                                                <span className="card-title text-sm ml-1">1.692 Çevrimdışı</span>
                                            </div>
                                        </div>
                                        

                                    </div>
                                    <button class="bg-[#248046] hover:bg-discordDarkGreen text-white w-[400px] h-10 mt-3 rounded">Katıldın</button>
                                </div>
                                
                            </div>

                            


                        </div>
                    </div>
                </div>
            



                                                            



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