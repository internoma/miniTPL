/**
 * Helper function miniTPL(obj, tag, data)
 * @author [29-03-2014 11:38 Alfredo Gonzalez P. <alfredo@internoma.com>]
 * @param  {String} obj (name for object)
 * @param  {String} tag (template tag target)
 * @param  {String} data (data-attribute)
 * @example:
 *     <tpl data-bind="key" />
 *     <tpl data-bind="key1" />
 *
 *     miniTPL({'key':'value', 'key1': 'value1'});
 * @optional:
 *     // initialize/clear all template tags
 *     miniTPL('delete');
 */
function miniTPL(obj, tag, data) {
    tag = tag || 'tpl';
    data = data || 'data-bind';
    // mapear los objetos DOM (perfomance)
    var elements = document.getElementsByTagName(tag);

    if (obj === 'delete') {
        for (var i = 0; i < elements.length; i++) {
            elements[i].textContent = null;
        }
    } else {
        var dataTemplate;
        for (var c = 0; c < elements.length; c++) {
            dataTemplate = elements[c].getAttribute(data);
            if (obj[dataTemplate]) {
                elements[c].textContent = obj[dataTemplate];
            }
        }
    }
}