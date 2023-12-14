import parseISO from "date-fns/parseISO";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export function formatDurationToNowFrom(baseDate: Date) {
  return formatDistanceToNow(parseISO(baseDate.toISOString()));
}
