function _createStyle(style)
{
    var keys = Object.keys(style);
    var ret = "";

    // Iterate through the keys and create the style
    for (var i = 0; i < keys.length; i++)
    {
        ret += keys[i];
        ret += ":";
        ret += style[keys[i]];
        ret += ";";
    }

    return ret;
}

var splashConfig = function(elements)
{
    var constructor = function(attr)
    {
        // Style of the header
        var style = {
            "background-color": "inherit",
            "background": "linear-gradient( rgba(1,53,103,0.85), rgba(1,53,103,0.85) ), url('" + attr['image'] +"')",
            "background-size": "100%",
            "background-repeat": "no-repeat",
            "max-height": String(attr['max_size']) + "px",
        };

        style = _createStyle(style);
        var html = "";
        html += "<div class='col-md-12 col-lg-12 col-sm-12 landing' data-max-pixels='" + attr['max_size'] + "' data-max='" + attr['percentage'] + "' data-og-width='" + attr['og_width'] + "' data-og-height='" + attr['og_height'] + "' style='" + style + "'>"
        html +=     "<span class='col-md-12 col-lg-12 col-sm-12 col-xs-12 label'>" + attr['header'] + "</span><br/>";
        html +=     '<span class="col-md-12 col-lg-12 col-sm-12 col-xs-12 caption">' + attr['caption'] + '</span>';
        html += "</div>"

        return html;
    };

    for (var i = 0; i < elements.length; i++)
    {
        var elem = $(elements[i]);
        var header = $(elem).attr('data-header');
        var caption = $(elem).attr('data-caption');
        var image = $(elem).attr('data-image');
        var page_percentage = $(elem).attr('data-size-percentage')
        var max_size = $(elem).attr('data-size-max');
        var og_width = $(elem).attr('data-og-width');
        var og_height = $(elem).attr('data-og-height');

        var html = constructor({
                                    'header': header,
                                    'caption': caption,
                                    'image': image,
                                    'percentage': page_percentage,
                                    'max_size': max_size,
                                    'og_width': og_width,
                                    'og_height': og_height
                                });
        $(elem).replaceWith(html);

    }}

function configureCustomTags()
{
    var tags = [ 'splash' ];

    var configure = {
        'splash': splashConfig,
    }

    // Iterate through the tags
    for (var i = 0; i < tags.length; i++)
    {
        var elems = $(tags[i]);
        if (elems.length != 0)
        {
            configure[tags[i]](elems);
        }
    }
}