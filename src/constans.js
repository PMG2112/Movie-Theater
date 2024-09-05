import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
} from '@mui/icons-material';

export const iconComponents = {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
};

export const TOP_LISTS = [
  {
    title: 'TOP 100 popular movies',
    icon: 'AutoAwesome',
    url: '/popular',
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'TOP 250 best movies',
    icon: 'StarPurple500',
    url: '/best',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Vampires',
    icon: 'Bloodtype',
    url: '/vampire',
    value: 'VAMPIRE_THEME',
  },
  {
    title: 'Comics',
    icon: 'MenuBook',
    url: '/comics',
    value: 'COMICS_THEME',
  },
  {
    title: 'Movies for All family',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Romantic',
    icon: 'VolunteerActivism',
    url: '/romantic',
    value: 'LOVE_THEME',
  },
  {
    title: 'Zombie',
    icon: 'MoodBad',
    url: '/zombie',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Disasters',
    icon: 'Pool',
    url: '/catastrophe',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Popular Serials',
    icon: 'LiveTv',
    url: '/popular-serials',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Films',
    icon: 'LocalMovies',
    url: '/films',
    value: 'FILM',
  },
  {
    title: 'Serials',
    icon: 'Reorder',
    url: '/serials',
    value: 'TV_SERIES',
  },
  {
    title: 'Cartoons',
    icon: 'Fort',
    url: '/cartoons',
    value: 'FILM',
  },
];
