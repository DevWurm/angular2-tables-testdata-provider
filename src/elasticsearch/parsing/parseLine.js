import dateformat from "dateformat";

/**
 * parses a wikipedia pagecount line into an object
 * @access public
 * 
 * @param line {String} line to parse
 * @param date {Date} regarding date
 *
 * @return {Object} The parsed object
 */
export default function parseLine(line, date) {
    const fields = line.split(/\s/);

    return {
        article: `${fields[0]}:${fields[1]}`,
        date: date,
        views: fields[2]
    };
}