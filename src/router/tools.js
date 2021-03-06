import {FormatJson} from "../views/format/json";
import YouTubeImage from "../views/image/YouTube";

import json from "../assets/image/json.svg"
import YouTube from "../assets/image/Youtube.svg";
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
    }
]
