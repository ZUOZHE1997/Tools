import FormatJson from "../views/programming/json";
import Base64 from "../views/programming/base64";
import Binary from "../views/other/binary"
import MarkDown from "../views/programming/markdown";
import Drawing from "../views/DrawingBoard/DrawingBoard"

import json from "../assets/image/json.svg";
import base64 from "../assets/image/base64.svg"
import BinaryIcon from "../assets/image/Binary.svg"
import pen from '../assets/image/pen.svg'
import markdownIcon from "../assets/image/markdown.svg"

export const codding = {
    title: "编程工具",
    children: [
        {
            path: '/format/json',
            title: 'JSON解析',
            component: FormatJson,
            icon: json
        },
        {
            path: '/Base64',
            title: 'Base64 编码解码',
            component: Base64,
            icon: base64
        }, {
            path: '/BaseConversion',
            title: '进制转换',
            component: Binary,
            icon: BinaryIcon
        },
        {
            path: '/drawing',
            title: '画板工具',
            component: Drawing,
            icon: pen
        },
        {
            path: '/MarkDown',
            title: 'MarkDown 在线编辑',
            component: MarkDown,
            icon: markdownIcon
        }
    ]
}

