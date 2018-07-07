import t7 from 'template7';

export default function(tpl, data) {
    let compiled = t7.compile(tpl)

    return compiled(data);
}
