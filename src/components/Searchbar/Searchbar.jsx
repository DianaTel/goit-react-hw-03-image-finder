import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarStyle,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmitSearchBar }) => (
  <SearchbarStyle>
    <SearchForm onSubmit={onSubmitSearchBar}>
      <SearchFormButton>
        <span>Search</span>
      </SearchFormButton>

      <SearchFormInput
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </SearchbarStyle>
);

Searchbar.propTypes = {
  onSubmitSearchBar: PropTypes.func.isRequired,
};
