import ENGLAND_FLAG from '../static/images/england-flag.png';
import GERMANY_FLAG from '../static/images/germany-flag.png';
import SWEDEN_FLAG from '../static/images/sweden-flag.png';
import UKRAINE_FLAG from '../static/images/ukraine-flag.png';
import BELGIUM_FLAG from '../static/images/belgium.png';
import ITALY_FLAG from '../static/images/italy-flag.png';
import CZECH_FLAG from '../static/images/czech-flag.png';
import DENMARK_FLAG from '../static/images/denmark-flag.png';
import SWITZERLAN_FLAG from '../static/images/switzerland-flag.png';
import SPAIN_FLAG from '../static/images/spain-flag.png';

export const data = [
  {
    dateId: '29062021',
    date: 'Thứ ba, 29/06/2021',
    round: 'Vòng 1/8',
    matches: [
      {
        id: 'england_germany_2906',
        time: '23:00',
        isFinished: true,
        isPen: false,
        info: 'Anh chấp 0.5',
        team1: {
          id: 'england',
          name: 'Anh',
          flag: ENGLAND_FLAG,
          special: '',
          score: 2,
          pen: '',
        },
        team2: {
          id: 'germany',
          name: 'Đức',
          flag: GERMANY_FLAG,
          special: '',
          score: 0,
          pen: '',
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
        id: 'sweden_ukraine_3006',
        time: '02:00',
        isFinished: true,
        isPen: false,
        info: 'Ukraine chấp 0.5',
        team1: {
          id: 'sweden',
          name: 'Thuỵ Điển',
          flag: SWEDEN_FLAG,
          special: '',
          score: 1,
          pen: '',
        },
        team2: {
          id: 'ukraine',
          name: 'Ukraine',
          flag: UKRAINE_FLAG,
          special: '',
          score: 2,
          pen: '',
        }
      }
    ]
  },
  {
    dateId: '02072021',
    date: 'Thứ sáu, 02/07/2021',
    round: 'Tứ kết',
    matches: [
      {
        id: 'switzerland_spain_0207',
        time: '23:00',
        isFinished: false,
        isPen: false,
        info: 'Thuỵ Sĩ chấp 0.5',
        team1: {
          id: 'switzerland',
          name: 'Thuỵ Sĩ',
          flag: SWITZERLAN_FLAG,
          special: '',
          score: '',
          pen: '',
        },
        team2: {
          id: 'spain',
          name: 'Tây Ban Nha',
          flag: SPAIN_FLAG,
          special: '',
          score: '',
          pen: '',
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
        id: 'belgium_italy_0307',
        time: '02:00',
        isFinished: false,
        isPen: false,
        info: 'Bỉ chấp 0.5',
        team1: {
          id: 'belgium',
          name: 'Bỉ',
          flag: BELGIUM_FLAG,
          special: '',
          score: '',
          pen: '',
        },
        team2: {
          id: 'italy',
          name: 'Italy',
          flag: ITALY_FLAG,
          special: '',
          score: '',
          pen: '',
        }
      },
      {
        id: 'czech_denmark_0307',
        time: '23:00',
        isFinished: false,
        isPen: false,
        info: 'Đang cập nhập',
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
          flag: DENMARK_FLAG,
          special: '',
          score: '',
          pen: '',
        }
      }
    ]
  },
];