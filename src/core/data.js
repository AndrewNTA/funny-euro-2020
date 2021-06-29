import ANH_FLAG from '../static/images/england-flag.png';
import DUC_FLAG from '../static/images/germany-flag.png';
import THUY_DIEN_FLAG from '../static/images/thuydien-flag.png';
import UKRAINE_FLAG from '../static/images/ukraine-flag.png';
import BI_FLAG from '../static/images/bi-flag.png';
import Y_FLAG from '../static/images/itialy-flag.png';
import CZECH_FLAG from '../static/images/czech-flag.png';
import DAN_MACH_FLAG from '../static/images/danmach-flag.png';

export const data = [
  {
    dateId: '29062021',
    date: 'Thứ ba, 29/06/2021',
    round: 'Vòng 1/8',
    matches: [
      {
        id: 'anh_duc_2906',
        time: '23:00',
        isFinished: true,
        isPen: true,
        info: 'Anh chấp 1',
        team1: {
          id: 'england',
          name: 'Anh',
          flag: ANH_FLAG,
          special: '',
          score: 3,
          pen: 4,
        },
        team2: {
          id: 'germany',
          name: 'Đức',
          flag: DUC_FLAG,
          special: '',
          score: 2,
          pen: 5,
        }
      }
    ]
  },
  {
    dateId: '30062021',
    date: 'Thứ tư, 30/06/2021',
    round: 'Vòng 1/8',
    matches: [
      {
        id: 'td_ukraine_3006',
        time: '02:00',
        isFinished: false,
        isPen: false,
        info: 'Ukraine chấp 0.5',
        team1: {
          id: 'sweden',
          name: 'Thuỵ Điển',
          flag: THUY_DIEN_FLAG,
          special: '',
          score: 4,
          pen: 5,
        },
        team2: {
          id: 'ukraine',
          name: 'Ukraine',
          flag: UKRAINE_FLAG,
          special: '',
          score: 4,
          pen: 3,
        }
      }
    ]
  },
  {
    dateId: '03072021',
    date: 'Thứ bảy, 03/07/2021',
    round: 'Tứ kết',
    matches: [
      {
        id: 'bi_y_0307',
        time: '02:00',
        isFinished: false,
        isPen: false,
        info: 'Bỉ chấp 0.75',
        team1: {
          id: 'belgium',
          name: 'Bỉ',
          flag: BI_FLAG,
          special: '',
          score: '',
          pen: '',
        },
        team2: {
          id: 'italy',
          name: 'Italy',
          flag: Y_FLAG,
          special: '',
          score: '',
          pen: '',
        }
      },
      {
        id: 'czech_dm_0307',
        time: '23:00',
        isFinished: false,
        isPen: false,
        info: 'Cân kèo',
        team1: {
          id: 'czech',
          name: 'Czech',
          flag: CZECH_FLAG,
          special: '',
          score: '',
          pen: '',
        },
        team2: {
          id: 'denmark',
          name: 'Đan mạch',
          flag: DAN_MACH_FLAG,
          special: '',
          score: '',
          pen: '',
        }
      }
    ]
  },
];