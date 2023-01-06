import isToday from "date-fns/isToday";
import isBefore from "date-fns/isBefore";
import isAfter from "date-fns/isAfter";
import addDays from "date-fns/addDays";
import endOfToday from "date-fns/endOfToday";
import endOfYesterday from "date-fns/endOfYesterday";
import endOfDay from "date-fns/endOfDay";
import parse from "date-fns/parse";
import compareAsc from "date-fns/compareAsc";
import { allItems } from "./todos";

export function tasksToday(){
    let justDate = allItems.filter((task) => task.dueDate.length == 11);
    let withTime = allItems.filter((task) => task.dueDate.length > 11);

    let today = justDate.filter((task) => isToday(parse(task.dueDate, 'yyyy-MM-dd', new Date())));
    let todayWithTime = withTime.filter((task) => isToday(parse(task.dueDate, 'yyyy-MM-dd HH:mm', new Date())));
    let sorted = todayWithTime.sort((a,b) => {
        let c = parse(a.dueDate, 'yyyy-MM-dd HH:mm', new Date());
        let d = parse(b.dueDate, 'yyyy-MM-dd HH:mm', new Date());
        return compareAsc(c,d);
    })

    return sorted.concat(today);
}

export function tasksThisWeek(){
    let justDate = allItems.filter((task) => task.dueDate.length == 11);
    let withTime = allItems.filter((task) => task.dueDate.length > 11);

    let endOfWeek = addDays(endOfToday(), 7);

    let thisWeek = justDate.filter((task) => isAfter(parse(task.dueDate, 'yyyy-MM-dd', new Date()), endOfYesterday()) && isBefore(parse(task.dueDate, 'yyyy-MM-dd', new Date()), endOfWeek));
    let thisWeekWithTime = withTime.filter((task) => isAfter(parse(task.dueDate, 'yyyy-MM-dd HH:mm', new Date()), endOfYesterday()) && isBefore(parse(task.dueDate, 'yyyy-MM-dd HH:mm', new Date()), endOfWeek));

    let concat = thisWeekWithTime.concat(thisWeek);
    let sorted = concat.sort((a,b) => {
        let c = '';
        let d = '';
        
        if(a.dueDate.length == 11) c = endOfDay(parse(a.dueDate, 'yyyy-MM-dd', new Date()));
        else c = parse(a.dueDate, 'yyyy-MM-dd HH:mm', new Date());

        if(b.dueDate.length == 11) d = endOfDay(parse(b.dueDate, 'yyyy-MM-dd', new Date()));
        else d = parse(b.dueDate, 'yyyy-MM-dd HH:mm', new Date());
        
        return compareAsc(c,d);
    })

    return sorted;
}