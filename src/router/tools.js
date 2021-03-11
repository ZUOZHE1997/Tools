import FormatJson from "../views/format/json";
import YouTubeImage from "../views/image/YouTube";
import Base64 from "../views/format/base64";
import Binary from "../views/format/binary"
import Base64ImgConversion from "../views/image/Base64ImgConversion"
import MarkDown from "../views/format/markdown";

import json from "../assets/image/json.svg";
import YouTube from "../assets/image/Youtube.svg";
import base64 from "../assets/image/base64.svg"
import BinaryIcon from "../assets/image/Binary.svg"
import Base64ImgConversionIcon from "../assets/image/img.svg"
import markdownIcon from "../assets/image/markdown.svg"

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
    }
    , {
        path: '/MarkDown',
        title: 'MarkDown 编辑器',
        component: MarkDown,
        icon: markdownIcon
    }
]

