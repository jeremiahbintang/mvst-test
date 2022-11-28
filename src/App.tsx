import moment from "moment";
import { Octokit } from "@octokit/rest";
import { useEffect, useState } from "react";
import "./App.css";
import LeftSide, {
  Organization,
  PersonalInformation,
} from "./components/LeftSide";
import RightSide, { Repository } from "./components/RightSide";

const octokit = new Octokit({
  auth: "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",
});

function App() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformation>({
      name: "",
      loginName: "",
      bio: "",
      followers: 0,
      following: 0,
      email: "",
    });
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    const fetchGithubData = async () => {
      const {
        data: {
          avatar_url,
          name,
          login,
          bio,
          followers,
          following,
          email,
          organizations_url,
          repos_url,
          ...rest
        },
      } = await octokit.request("/user");

      setAvatarUrl(avatar_url);
      setPersonalInformation({
        name,
        loginName: login,
        bio,
        followers,
        following,
        email,
      });
      const { data: organizations } = await octokit.request(organizations_url);
      setOrganizations(
        organizations.map(
          ({
            id,
            name,
            avatar_url,
          }: {
            id: number;
            name: string;
            avatar_url: string;
          }) => ({
            id,
            name,
            avatarUrl: avatar_url,
          })
        )
      );

      const { data: repos } = await octokit.request(repos_url);

      setRepositories(
        repos.map(
          ({
            id,
            name,
            description,
            language,
            forks_count,
            license,
            updated_at,
          }: {
            id: number;
            name: string;
            description: string;
            language: string;
            forks_count: number;
            license: {
              key: string;
              name: string;
              node_id: string;
              spdx_id: string;
              url: string;
            };
            updated_at: string;
          }) => ({
            id,
            name,
            description,
            language,
            forksCount: forks_count,
            license: license?.name,
            updatedAt: new Date(updated_at),
          })
        )
      );
    };
    fetchGithubData();
  }, []);

  return (
    <div className="w-screen">
      <div className="px-8 flex space-x-6 m-auto">
        <LeftSide
          className="flex-initial w-[296px]"
          avatarUrl={avatarUrl}
          personalInformation={personalInformation}
          organizations={organizations}
        />

        <RightSide
          className="flex-initial w-full"
          repositories={repositories}
        />
      </div>
    </div>
  );
}

export default App;
