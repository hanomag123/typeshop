import VK from './../../Assets/Images/Footer/Social/VK.svg'
import Telegram from './../../Assets/Images/Footer/Social/Telegram.svg'
import Instagram from './../../Assets/Images/Footer/Social/Instagram.svg'
import Whatsapp from './../../Assets/Images/Footer/Social/Whatsapp.svg'

interface obj {
    img: string
    name: string
}

export const SocialImg: Array<obj> = [
    {img: VK, name: 'VK'},
    {img: Instagram, name: 'Instagram'},
    {img: Telegram, name: 'Telegram'},
    {img: Whatsapp, name: 'Whatsapp'}
]