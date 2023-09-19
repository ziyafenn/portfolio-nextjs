import { Repo } from "./types";

const fetchGithubRepos = async () => {
  function compareDates(a: Repo, b: Repo) {
    const dateA = new Date(a.pushed_at);
    const dateB = new Date(b.pushed_at);

    if (dateA > dateB) return -1; // Return a negative number for descending order
    if (dateA < dateB) return 1; // Return a positive number for descending order
    return 0; // Return 0 if dates are equal (unlikely)
  }

  const getRepos = await fetch("https://api.github.com/users/ziyafenn/repos");
  const repos: Repo[] = await getRepos.json();
  const sortedRepos = repos.filter((repo) => !repo.fork).sort(compareDates);

  return sortedRepos.slice(0, 6);
};

export default fetchGithubRepos;
