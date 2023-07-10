import Options, { Localization } from './options';
import { DateTime } from '../datetime';
import DefaultFormatLocalization from './default-format-localization';

const defaultEnLocalization: Localization = {
  clear: 'Clear selection',
  close: 'Close the picker',
  dateFormats: DefaultFormatLocalization.dateFormats,
  dayViewHeaderFormat: { month: 'long', year: '2-digit' },
  decrementHour: 'Decrement Hour',
  decrementMinute: 'Decrement Minute',
  decrementSecond: 'Decrement Second',
  format: DefaultFormatLocalization.format,
  hourCycle: DefaultFormatLocalization.hourCycle,
  incrementHour: 'Increment Hour',
  incrementMinute: 'Increment Minute',
  incrementSecond: 'Increment Second',
  locale: DefaultFormatLocalization.locale,
  nextCentury: 'Next Century',
  nextDecade: 'Next Decade',
  nextMonth: 'Next Month',
  nextYear: 'Next Year',
  ordinal: DefaultFormatLocalization.ordinal,
  pickHour: 'Pick Hour',
  pickMinute: 'Pick Minute',
  pickSecond: 'Pick Second',
  previousCentury: 'Previous Century',
  previousDecade: 'Previous Decade',
  previousMonth: 'Previous Month',
  previousYear: 'Previous Year',
  selectDate: 'Select Date',
  selectDecade: 'Select Decade',
  selectMonth: 'Select Month',
  selectTime: 'Select Time',
  selectYear: 'Select Year',
  startOfTheWeek: 0,
  today: 'Go to today',
  toggleMeridiem: 'Toggle Meridiem',
};

const DefaultOptions: Options = {
  allowInputToggle: false,
  container: undefined,
  dateRange: false,
  debug: false,
  defaultDate: undefined,
  display: {
    icons: {
      type: 'icons',
      time: 'fa-solid fa-clock',
      date: 'fa-solid fa-calendar',
      up: 'fa-solid fa-arrow-up',
      down: 'fa-solid fa-arrow-down',
      previous: 'fa-solid fa-chevron-left',
      next: 'fa-solid fa-chevron-right',
      today: 'fa-solid fa-calendar-check',
      clear: 'fa-solid fa-trash',
      close: 'fa-solid fa-xmark',
    },
    sideBySide: false,
    calendarWeeks: false,
    viewMode: 'calendar',
    toolbarPlacement: 'bottom',
    keepOpen: false,
    buttons: {
      today: false,
      clear: false,
      close: false,
    },
    components: {
      calendar: true,
      date: true,
      month: true,
      year: true,
      decades: true,
      clock: true,
      hours: true,
      minutes: true,
      seconds: false,
    },
    inline: false,
    theme: 'auto',
    placement: 'bottom',
  },
  keepInvalid: false,
  localization: defaultEnLocalization,
  meta: {},
  multipleDates: false,
  multipleDatesSeparator: '; ',
  promptTimeOnDateChange: false,
  promptTimeOnDateChangeTransitionDelay: 200,
  restrictions: {
    minDate: undefined,
    maxDate: undefined,
    disabledDates: [],
    enabledDates: [],
    daysOfWeekDisabled: [],
    disabledTimeIntervals: [],
    disabledHours: [],
    enabledHours: [],
  },
  stepping: 1,
  useCurrent: true,
  viewDate: new DateTime(),
};

export default DefaultOptions;
export const DefaultEnLocalization = { ...defaultEnLocalization };
