import FormatJson from "../views/programming/json";
import YouTubeImage from "../views/image/YouTube";
import Base64 from "../views/programming/base64";
import Binary from "../views/other/binary"
import Base64ImgConversion from "../views/image/Base64ImgConversion"
import MarkDown from "../views/programming/markdown";
import Drawing from "../views/DrawingBoard/DrawingBoard"
import Download from "../views/programming/download"

import json from "../assets/image/json.svg";
import YouTube from "../assets/image/Youtube.svg";
import base64 from "../assets/image/base64.svg"
import BinaryIcon from "../assets/image/Binary.svg"
import Base64ImgConversionIcon from "../assets/image/img.svg"
import pen from '../assets/image/pen.svg'
import markdownIcon from "../assets/image/markdown.svg"
import DownloadIcon from "../assets/image/Download.svg"

export const routes = [
    {
        path: '/format/json',
        title: 'JSON解析',
        component: FormatJson,
        icon: json
    },
    {
        path: '/YouTube',
        title: 'YouTube 图片生成',
        component: YouTubeImage,
        icon: YouTube
    }, {
        path: '/Base64',
        title: 'Base64 编码解码',
        component: Base64,
        icon: base64
    }, {
        path: '/BaseConversion',
        title: '进制转换',
        component: Binary,
        icon: BinaryIcon
    }, {
        path: '/Base64ImgConversion',
        title: 'Base64 图片转换',
        component: Base64ImgConversion,
        icon: Base64ImgConversionIcon
    },
    {
        path: '/drawing',
        title: '画板工具',
        component: Drawing,
        icon: pen
    },
    {
        path: '/MarkDown',
        title: 'MarkDown 转换HTML',
        component: MarkDown,
        icon: markdownIcon
    },{
        path: '/Download',
        title: '常见下载方式',
        component: Download,
        icon: DownloadIcon
    }
]

