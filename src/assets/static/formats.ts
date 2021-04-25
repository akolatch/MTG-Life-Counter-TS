import { FormatTypes } from '../../../types';

interface formatData {
  id: number;
  display: string;
  type: FormatTypes;
}

export const formatList: [formatData, formatData, formatData] = [
  { id: 1, display: 'Classic', type: 'CLASSIC' },
  { id: 2, display: '2 Headed Giant', type: '2_HEADED_GIANT' },
  { id: 3, display: 'Commander', type: 'COMMANDER' },
];
