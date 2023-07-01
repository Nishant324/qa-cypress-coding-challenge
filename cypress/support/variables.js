// Get the current date
export const currentDate = new Date();

// Get the year, month, and day from the current date
export const Startyear = currentDate.getFullYear();
export const Startmonth = currentDate.toLocaleString('default', { month: 'short' });
export const Startday = currentDate.getDate();

// Format the date string
export const formattedDate = `${Startmonth} ${Startday}, ${Startyear}`;

// Extract the day number from the formatted date
export const StartdayNumber = Startday.toString();

// Calculate the future date (30 days ahead)
export const endfutureDate = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));

// Get the year, month, and day from the future date
export const endyear = endfutureDate.getFullYear();
export const endmonth = endfutureDate.toLocaleString('default', { month: 'short' });
export const endday = endfutureDate.getDate();

// Format the date string
export const formattedEndDate = `${endmonth} ${endday}, ${endyear}`;

export const EnddayNumber = endday.toString();