import moment from "moment";

export interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  forksCount: number;
  license: string;
  updatedAt: Date;
}
interface RightSideProps {
  className?: string;
  repositories: Repository[];
}
export default function RightSide({ className, repositories }: RightSideProps) {
  return (
    <div>
      <div>
        <div>Overview</div>
        <div>Repositories</div>
        <div>Projects</div>
      </div>
      <div>
        <input placeholder="Find a repository..."></input>
        <button>Type: All</button>
        <button>Language: All</button>
      </div>
      <div>
        {repositories.map((repo) => (
          <div key={repo.id}>
            <div>{repo.name}</div>
            <div>{repo.description}</div>
            <div>
              <div>{repo.language}</div>
              <div>{repo.forksCount}</div>
              <div>{repo.license}</div>
              <div>Updated {moment(repo.updatedAt).fromNow()}</div>
            </div>
            <div>
              <button>Star</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
