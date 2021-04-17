import YouTubeImage from "../views/image/YouTube";
import Base64ImgConversion from "../views/image/Base64ImgConversion"

import YouTube from "../assets/image/Youtube.svg";
import Base64ImgConversionIcon from "../assets/image/img.svg"

export const images = {
    title: "图片工具",
    children: [
        {
            path: '/YouTube',
            title: 'YouTube 图片生成',
            component: YouTubeImage,
            icon: YouTube
        },
        {
            path: '/Base64ImgConversion',
            title: 'Base64 图片转换',
            component: Base64ImgConversion,
            icon: Base64ImgConversionIcon
        },
    ]
}

