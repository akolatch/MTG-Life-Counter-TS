interface formatData {
  id: number;
  display: string;
  type: string;
}

export const formatList: [formatData, formatData, formatData] = [
  { id: 1, display: '2 Player', type: '2_PLAYER' },
  { id: 2, display: '2 Headed Giant', type: '2_HEADED_GIANT' },
  { id: 3, display: 'Commander', type: 'COMMANDER' },
];
