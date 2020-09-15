const randOrd = () => {
  return Math.round(Math.random()) - 0.5;
};

export const gameCards = [
  { card: 1, status: "off", id: 1 },
  { card: 2, status: "off", id: 2 },
  { card: 3, status: "off", id: 3 },
  { card: 4, status: "off", id: 4 },
  { card: 5, status: "off", id: 5 },
  { card: 6, status: "off", id: 6 },
  { card: 7, status: "off", id: 7 },
  { card: 8, status: "off", id: 8 },
  { card: 9, status: "off", id: 9 },
  { card: 10, status: "off", id: 10 },
  { card: 11, status: "off", id: 11 },
  { card: 12, status: "off", id: 12 },
  { card: 1, status: "off", id: 13 },
  { card: 2, status: "off", id: 14 },
  { card: 3, status: "off", id: 15 },
  { card: 4, status: "off", id: 16 },
  { card: 5, status: "off", id: 17 },
  { card: 6, status: "off", id: 18 },
  { card: 7, status: "off", id: 19 },
  { card: 8, status: "off", id: 20 },
  { card: 9, status: "off", id: 21 },
  { card: 10, status: "off", id: 22 },
  { card: 11, status: "off", id: 23 },
  { card: 12, status: "off", id: 24 },
].sort(randOrd);
