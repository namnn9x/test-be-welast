import axios from "axios";

const URL_REPOS = "https://api.github.com/users/freeCodeCamp/repos";
export const getRepos = async () => {
  const response = await axios.get(URL_REPOS);
  const data = response.data;

  if (!data || (data && data.length < 0)) {
    throw Error("Repos not found");
  }

  const filteredRepos = data.filter(
    (repo: any) => !repo.fork && repo.forks > 5
  );

  const sortedRepos = filteredRepos.sort((a: any, b: any) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  return sortedRepos
};
