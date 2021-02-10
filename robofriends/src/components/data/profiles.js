const baseURL = 'https://robohash.org/';
const size = 'size=200x200'
var num = 0
const getAvatar = () => `${baseURL}${++num}?${size}`;

export const defaultProfiles = [
  {
    avatar: getAvatar(),
    name: 'Leanne Graham',
    email: 'Sincer@april.biz',
  },
  {
    avatar: getAvatar(),
    name: 'Ervin Howell',
    email: 'Shanna@april.tv',
  },
  {
    avatar: getAvatar(),
    name: 'Clementine Bauch',
    email: 'Nathan@april.net',
  },
  {
    avatar: getAvatar(),
    name: 'Patricia Lebsack',
    email: 'wainer@act.biz',
  },
  {
    avatar: getAvatar(),
    name: 'Chelsey Dietrich',
    email: 'Chelsey@act.biz',
  },
  {
    avatar: getAvatar(),
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
  },
  {
    avatar: getAvatar(),
    name: 'Kurtis Weissnat',
    email: 'Kurtis@billy.biz',
  },
  {
    avatar: getAvatar(),
    name: 'Nicholas Runolfsdottir V',
    email: 'Nicholas@april.biz',
  },
  {
    avatar: getAvatar(),
    name: 'Glenna Reicher',
    email: 'Glenna@april.biz',
  },
  {
    avatar: getAvatar(),
    name: 'Clementina DuBuque',
    email: 'Rey@april.biz',
  },
];