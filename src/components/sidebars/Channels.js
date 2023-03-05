import { Icon } from '../Icon'

function Channels() {
    return (
        <div className="w-60 bg-channelBg">
            <div className="w-60 h-12 py-3 px-4">
                <div className="flex justify-between items-center text-white font-semibold">
                    <h1>DUCKHOSTS | Fivem Dis...</h1>
                    <Icon name="dropDownButton" width={18} height={18} />    
                </div>

                <div className='flex items-center text-white bg text-xs pl-1.5 mt-1.5 h-5 w-24 bg-channelWorld rounded-full '>
                    <Icon name="world" width={12} height={12} />
                    <span className="pl-1 "> Herkese Açık</span>
                </div>

                <div className="flex justify-between items-center mt-2 ">
                    <span className="text-xs text-white font-bold ">HEDEF: SVY 2</span>
                    <span className="text-xs text-link ">2/7 Takviye <span className="text-lg"> ›</span></span>
                </div>
            </div>
            <div className="w-full flex justify-center mt-14 ">
                <div className="border-t-[1px] border-backdrop w-56 "></div>
            </div>

            <div className="items-center text-link pl-3 w-56 h-[34]">
                <a href="#discord-link">
                <div className="flex items-center mt-5 pl-2 p-1 bg-activeBG rounded">
                    <Icon name="metinIcon" width={20} height={20} className="text-white"/>
                    <span className="text-s text-white pl-1">🔗│di̇scord-li̇nk</span>
                </div>
                </a>
                <a href="#mirketbilisim.com">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="lockIcon" width={20} height={20} className="text-channelIcon "/>
                    <span className="text-s text-link pl-1 ">🌐│mirketbilisim.com</span>
                </div>
                </a>
                <a href="#info@mirketbilisim">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="lockIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1 ">🌐│info@mirketbilisim</span>
                </div>
                </a>
                <a href="#Github.com/lolkome">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="lockIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1 ">🌐│Github.com/lolkome</span>
                </div>
                </a>

                <div className="flex justify-between items-center mt-4 hover:text-white ">
                    <span className="text-xs text-link font-semibold hover:text-white"> MUSTERI DUYURU</span>
                    <Icon name="serverAdd" width={18} height={18}/>
                </div>

                <a href="#duyuru">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="announcementsIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1 ">📢│duyuru</span>
                </div>
                </a>
                <a href="#sesli-destek">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="voicIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1 ">📢│Sesli Destek</span>
                </div>
                </a>
                <div className="flex justify-between items-center mt-4 hover:text-white">
                    <span className="text-xs text-link font-semibold hover:text-white"> TICKET</span>
                    <Icon name="serverAdd" width={18} height={18}/>
                </div>
                <a href="#destek-sistemi">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="metinIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1">📧-destek-sitemi</span>
                </div>
                </a>

                <div className="flex justify-between items-center mt-4  hover:text-white">
                    <span className="text-xs text-white font-semibold hover:text-white"> WWW.MIRKETBILISIM.COM</span>
                    <Icon name="serverAdd" width={18} height={18}/>
                </div>
                <a href="#genel-duyuru">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="announcementsIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1">📢│genel-duyuru</span>
                </div>
                </a>
                <a href="#genel-sohbet">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="metinIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1">💬│genel-sohbet</span>
                </div>
                </a>
                <a href="#kurallar">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="rullerIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1">📋│kurallar</span>
                </div>
                </a>
                <a href="#bot-komut">
                <div className="flex items-center p-1 mt-1 hover:bg-hover rounded">
                    <Icon name="metinIcon" width={20} height={20} className="text-channelIcon"/>
                    <span className="text-s text-link pl-1">💻│bot-komut</span>
                </div>
                </a>
            </div>


            <div className="bg-profileBG flex fixed w-60 h-14 bottom-0 text-sm px-1 items-center">
                <a href="#profile">
                <div className="flex items-center hover:bg-backdrop rounded p-1">
                    <div className="bg-backdrop w-8 h-8 flex justify-center items-center rounded-full">
                        <div className="relative w-full h-full rounded-full overflow-hidden hover:rounded-[15px]">
                            <Icon name="goktugYesilpp" width={32} height={32} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <span className="text-white pl-2 text-sm font-semibold">GöktuğYeşil</span>
                        <span className="text-link pl-2 text-xs">#8808</span>
                    </div>
                </div>
                </a>
                <div className="flex items-center ml-1 text-white ">
                    <a href="#">
                    <div className="ml-2 hover:bg-backdrop rounded p-1">
                        <Icon name="micIcon" width={20} height={20} />
                    </div>
                    </a>
                    <a href="#">
                    <div className="ml-1 hover:bg-backdrop rounded p-1">
                        <Icon name="headphoneIcon" width={20} height={20} />
                    </div>
                    </a>
                    <a href="#">
                    <div className="ml-1 hover:bg-backdrop rounded p-1">
                        <Icon name="settingsIcon" width={20} height={20} />
                    </div>
                    </a>
                </div>
                


            </div>
            
            

        </div>
    )
}

export default Channels