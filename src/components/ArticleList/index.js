import { Route, Switch } from "react-router-dom";
import SingleArticle from "../SingleArticle";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articleReducer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => {
    console.log(state, "State");
    return state.articleState.entries;
  });
  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);
  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/article/${id}`}>{title}</NavLink>
            </li>
          );
        })}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
