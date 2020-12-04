export const BASE_URL: string = 'http://localhost:4000';

export const tabSortOptions: any = {
  sort: ['release_date', 'vote_average'],
  tab: {
    all: null,
    documentary: 'documentary',
    comedy: 'comedy',
    horror: 'horror',
    crime: 'crime',
  },
  sortOrder: ['asc', 'desc'],
};

export const initialState = {
  movieList: {
    movies: [{}],
  },
  settings: {
    sortBy: 'release_date',
    filter: '',
    sortOrder: 'desc',
  },
  search: {
    searchBy: 'title',
    search: '',
  },
  movieDetails: {
    movie: {
      genres: [''],
    },
  },
  movieDelete: {},
  movieUpdate: {
    movie: {},
  },
  movieCreate: {},
  isVisibleSearch: {
    isVisible: false,
  },
};
