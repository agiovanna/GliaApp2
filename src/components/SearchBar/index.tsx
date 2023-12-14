import React from 'react';
import * as Styled from './styles';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
      <Styled.SearchInput
        placeholder="Pesquisar..."
        onChangeText={onSearch}
      />
  );
};

export default SearchBar;
