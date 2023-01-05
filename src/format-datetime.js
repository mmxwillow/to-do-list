import { format, parse } from "date-fns";
import enGB from 'date-fns/locale/en-GB';
import formatRelative from 'date-fns/formatRelative';
import isToday from "date-fns/isToday";
import isThisYear from "date-fns/isThisYear";
import isPast from "date-fns/esm/isPast/index.js";
import endOfToday from "date-fns/endOfToday";

// https://date-fns.org/docs/I18n-Contribution-Guide#formatrelative
// https://github.com/date-fns/date-fns/blob/master/src/locale/en-US/_lib/formatRelative/index.js
// https://github.com/date-fns/date-fns/issues/1218
// https://stackoverflow.com/questions/47244216/how-to-customize-date-fnss-formatrelative
const formatRelativeLocale = {
  lastWeek: "'Last' eeee",
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  nextWeek: "eeee",
  other: 'MMM d',
};

const locale = {
  ...enGB,
  formatRelative: (token) => formatRelativeLocale[token],
};

export function formatProjectView(temp) {
  if(temp == " ") return "";
  if(temp.split(' ')[1]){
    let datetime = parse(temp, 'yyyy-MM-dd HH:mm', new Date());
    if(isToday(datetime)) return format(datetime, 'HH:mm');
    else if(isThisYear(datetime)) return formatRelative(datetime, new Date(), { locale });
    else return format(datetime, 'dd/MM/yy');
  }
  else{
    let datetime = parse(temp, 'yyyy-MM-dd', new Date());
    if(isThisYear(datetime)) return formatRelative(datetime, new Date(), { locale });
    else return format(datetime, 'dd/MM/yy');
  }
}

export function formatDetailsView(temp){
  if(temp == " ") return "";
  if(temp.split(' ')[1]){
    let datetime = parse(temp, 'yyyy-MM-dd HH:mm', new Date());
    if(isThisYear(datetime)) return format(datetime, 'MMM dd, HH:mm');
    else return format(datetime, 'dd/MM/yy, HH:mm');
  }
  else{
    let datetime = parse(temp, 'yyyy-MM-dd', new Date());
    if(isThisYear(datetime)) return format(datetime, 'MMM dd');
    else return format(datetime, 'dd/MM/yy');
  }
}

export function isOverdue(temp){
  if(temp == " ") return "";
  let datetime = '';
  if(temp.split(' ')[1]) datetime = parse(temp, 'yyyy-MM-dd HH:mm', new Date());
  else{
    datetime = parse(temp, 'yyyy-MM-dd', new Date());
    if(isToday(datetime)) datetime = endOfToday();
  }

  return isPast(datetime);
}
