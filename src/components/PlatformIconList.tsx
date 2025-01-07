import { Platform } from "../hooks/useGames"
import { FaWindows, FaXbox, FaPlaystation, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { BsGlobe } from "react-icons/bs"
import { SiNintendo } from "react-icons/si"
import { IconType } from "react-icons"

interface Props{
    platforms: Platform[]
   
}

const icons: {[key: string]: IconType} = {
  playstation: FaPlaystation,
  xbox: FaXbox,
  pc:FaWindows,
  nintendo: SiNintendo,
  mac:FaApple,
  linux:FaLinux,
  ios:MdPhoneIphone,
  web:BsGlobe,
  android:FaAndroid,
  
}
const PlatformIconList = ({platforms}: Props) => {
  return (
    <div className="flex gap-1 items-center ">
      <div className="flex gap-2 items-center pt-2 opacity-50 justify-between">
      

    {platforms.map(platform => {
      const IconComponent = icons[platform.slug];
      return <IconComponent key={platform.id} />;
    })}
      

      </div>

</div>
  )
}

export default PlatformIconList