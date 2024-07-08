import React from 'react';
import SearchInputStyle from './SearchInputStyle';
import searchImg from '../../assets/search.svg';

interface SerachInputProps {
  actionChange: (value: string) => void;
}

const SerachInput: React.FC<SerachInputProps> = ({ actionChange }) => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <SearchInputStyle onChange={event => actionChange(event.target.value)} />
      <img style={{ marginLeft: '-30px' }} src={searchImg} alt="" />
    </div>
  );
};

export default SerachInput;
