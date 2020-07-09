export default function addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    return result;
}
