import { SEARCH_RESULT_COUNT } from "../../SearchModal.Constants"
import {
  searchResultProp,
  searchResult,
  typeProp,
} from "../../SearchModal.Types"
import useSearchResult from "../../hooks/useSearchResult"
import * as S from "./SearchResult.Styles"
import SearchResultItem from "./components/SearchResultItem/SearchResultItem"
import * as SS from "./components/SearchResultList.Styles"

const SearchResult = ({ keyword, selectedFilter }: searchResultProp) => {
  const results = useSearchResult({ keyword, selectedFilter })

  const users = results
    ?.filter(({ type }: typeProp) => type === "user")
    .map(({ type, id, title, isOnline, image }: searchResult) => (
      <SearchResultItem
        key={id}
        id={id}
        type={type}
        image={image}
        title={title}
        isOnline={isOnline}
        keyword={keyword}
      />
    ))

  const posts = results
    ?.filter(({ type }: typeProp) => type === "post")
    .map(({ type, id, title, image }: searchResult) => (
      <SearchResultItem
        key={id}
        id={id}
        type={type}
        image={image}
        title={title}
        keyword={keyword}
      />
    ))

  const userResultElemntList = () => {
    return (
      <SS.SearchResultListLayout $isSelected={selectedFilter === "users"}>
        <SS.SearchResultListTitle>{"사용자"}</SS.SearchResultListTitle>
        {users?.length > 0
          ? users.slice(0, SEARCH_RESULT_COUNT)
          : "텅텅 비었답니다"}
      </SS.SearchResultListLayout>
    )
  }

  const postResultElemntList = () => {
    return (
      <SS.SearchResultListLayout $isSelected={selectedFilter === "posts"}>
        <SS.SearchResultListTitle>{"포스트"}</SS.SearchResultListTitle>
        {posts?.length > 0
          ? posts.slice(0, SEARCH_RESULT_COUNT)
          : "텅텅 비었답니다"}
      </SS.SearchResultListLayout>
    )
  }

  return (
    <S.SearchResultLayout>
      {selectedFilter !== "posts" && userResultElemntList()}
      {selectedFilter !== "users" && postResultElemntList()}
    </S.SearchResultLayout>
  )
}

export default SearchResult
